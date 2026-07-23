---
name: laravel-video-duration-limit
description: Audit a Laravel + Inertia/React project to determine whether video uploads have any duration limit (in seconds), and if not, recommend concrete paths to add one. Distinguish size limits (Laravel max: in KB) from duration limits (no built-in rule). Check both server-side tooling (getID3, ffmpeg, php-ffmpeg) and client-side (video.duration on loadedmetadata). Report findings only; do not install libraries without explicit confirmation.
source: auto-skill
extracted_at: '2026-07-16T02:25:47.686Z'
---

# Audit video upload duration limits in a Laravel + Inertia/React project

When a user asks "is the video length limited?", "can the admin upload a
1-hour video?", "how do I cap video duration?", the answer is almost
always "**no, only the file size is capped**". Laravel has no built-in
duration rule; most projects never add one. Don't guess — verify across
every layer, then recommend concrete options.

## Procedure

Run all four checks in parallel where possible.

### 1. Server-side validation rule (size, not duration)

Read the relevant controller's `store()` and `update()` in full. Look at
the `video` field's rule. Almost always you'll see:

```php
'video' => 'nullable|mimes:mp4,mov,avi|max:51200',
```

**Critical unit gotcha:** Laravel's `max:N` is in **kilobytes**, not
megabytes, and not seconds.
- `max:2048` = 2 MB (file size)
- `max:10240` = 10 MB
- `max:51200` = 50 MB
- There is **no built-in `max:60` for "60 seconds"** — `max:` is size only.

Always note in the report that the existing limit is **size** (MB), not
**duration** (seconds). Conflating the two is the most common
misunderstanding.

### 2. Server-side duration tooling

Grep the entire project for duration-checking libraries:

```text
grep_search in app/, database/, composer.json, composer.lock for:
    duration|getID3|getid3|ffprobe|ffmpeg
```

If the project is on WAMP/XAMPP (no Linux ffmpeg binary), even if the
PHP `php-ffmpeg` Composer package is installed, runtime calls will fail
unless the binary is on the host. Confirm the host environment when
recommending libraries.

Common libraries you may find (or recommend):
- `php-ffmpeg/php-ffmpeg` — requires the `ffmpeg` binary on the server.
- `james-heinrich/getid3` — pure PHP, reads duration from MP4/MOV/etc
  metadata without a binary.
- `intervention/video` — higher-level, also uses ffmpeg under the hood.

Also grep for any custom Rule class that might handle video duration:

```text
app/Rules/, app/Http/Rules/, app/Rules/VideoDurationRule.php
```

### 3. Frontend JS — does any file read `video.duration`?

Grep `resources/js/` for:

```text
video.duration|loadedmetadata|onloadedmetadata|HTMLVideoElement
```

Read any `Create.jsx` / `Edit.jsx` form for the video upload. Typical
JSX to look for:

```jsx
<input type="file" accept="video/*" onChange={(e) => setData("video", e.target.files[0])} />
```

If `onChange` only does `setData("video", e.target.files[0])` with no
`<video>` element + `loadedmetadata` listener, **no client-side
duration check exists**. The browser does NOT read the duration during
file selection — you must explicitly load the file into a `<video>` or
`URL.createObjectURL()` blob to read it.

Tip: also check whether the helper text shown to the admin mentions
duration at all (e.g. "MP4 recommended, up to 50MB" → no duration hint).

### 4. The `ini_set()` no-op trap

If the controller does:

```php
ini_set('upload_max_filesize', '50M');
ini_set('post_max_size', '55M');
```

…these are `PHP_INI_PERDIR` directives and **cannot be changed at
runtime**. They're a no-op but mislead anyone reading the code. Note
this if you see it. This is already covered in
`auto-skill-laravel-code-review` (finding H2 pattern), but call it out
again when discussing video uploads because the temptation to
`ini_set()` for "duration" is even more futile.

## Output format that works

1. **Controller rules table** — file, line, the `video` rule verbatim,
   with the size-in-MB conversion.
2. **Server-side duration tooling** — one-line "no duration-checking
   library found in composer.json or composer.lock" OR list of what's
   installed.
3. **Client-side duration check** — file:line of any `<video>` +
   `loadedmetadata` reads; if none, say so explicitly.
4. **ini_set() trap callout** — if present, note it.
5. **Bottom line** in one sentence: "There is currently NO limit on
   video length in seconds; only a 50 MB file size cap."
6. **Three concrete options** to add a duration limit, in order of
   safety:
   a. **JS-only (UX, bypassable):** read `video.duration` on
      `loadedmetadata`; reject in the form. ~10 lines of React.
      Bypassable by curl, so always combine with server-side.
   b. **PHP-side with getID3 (pure PHP, no binary needed):** install
      `james-heinrich/getid3`, write a custom rule that opens the
      uploaded file with `getID3`, reads `getDuration()`, and compares
      to the limit. Works on any host.
   c. **PHP-side with php-ffmpeg (requires `ffmpeg` binary):**
      install `php-ffmpeg/php-ffmpeg`, use `FFProbe::create()->format($file)->get('duration')`.
      Requires the binary on the host — fails on shared WAMP/XAMPP
      without explicit setup.
7. End with a recommendation: "Want me to implement option X?" and
   **wait for explicit confirmation** before installing any package
   (modifies `composer.json`/`composer.lock` and possibly needs a
   server binary).

## Implementation pattern that worked (option b: getID3 + JS)

After the user picks an option, here's the concrete recipe for option (b) —
**server-side getID3 + client-side `URL.createObjectURL`**. This was the
chosen pattern for the About page video upload in this project because:

- It works on shared hosting (no ffmpeg binary required).
- It supports arbitrary file size (no 50 MB cap), so 4K 5-minute clips
  (~500 MB–1 GB) upload fine.
- Both layers enforce the cap (defense in depth — JS for UX, PHP for
  security).

### A. Backend — `composer.json`

```jsonc
"require": {
    "php": "^8.3",
    ...
    "james-heinrich/getid3": "^1.10",   // pure PHP, no ffmpeg binary
    ...
}
```

Then the user runs `composer require james-heinrich/getid3` themselves
(do not run `composer install` for them — it changes `composer.lock`).

### B. Backend — `app/Rules/MaxVideoDuration.php` (custom rule)

Laravel 11/12 `ValidationRule` interface. Reads `playtime_seconds` from
the uploaded file. Don't `try` to be too strict — if getID3 can't parse,
let the other rules (`mimes:`) reject the file.

```php
<?php
namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class MaxVideoDuration implements ValidationRule
{
    public function __construct(private int $maxSeconds) {}

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! $value instanceof \Illuminate\Http\UploadedFile) return;
        $path = $value->getRealPath();
        if (! $path || ! is_readable($path)) return;

        try {
            $getID3  = new \getID3();
            $file    = $getID3->analyze($path);
            $seconds = $file['playtime_seconds'] ?? null;
        } catch (\Throwable $e) {
            return; // let mimes: rule handle unparseable files
        }

        if ($seconds === null) return;
        if ($seconds > $this->maxSeconds) {
            $minutes = (int) floor($this->maxSeconds / 60);
            $fail("Video must be {$minutes} minutes or less (uploaded video is "
                . gmdate('i:s', (int) $seconds) . ").");
        }
    }
}
```

### C. Backend — controller

Remove the size rule (`max:51200`), remove the no-op `ini_set()` calls
(`upload_max_filesize` and `post_max_size` are `PHP_INI_PERDIR` and
**cannot** be set at runtime — these calls are misleading dead code),
then plug in the new rule:

```php
use App\Rules\MaxVideoDuration;
// ...
'video' => ['nullable', 'mimes:mp4,mov,avi', new MaxVideoDuration(300)],
```

### D. Frontend — JSX (`Create.jsx` / `Edit.jsx`)

Read `video.duration` via a hidden `<video>` element + `loadedmetadata`,
block submit if too long, update helper text:

```jsx
import { useState } from "react";

const MAX_VIDEO_SECONDS = 300;

function readVideoDuration(file) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const v   = document.createElement("video");
        v.preload  = "metadata";
        const cleanup = () => { URL.revokeObjectURL(url); v.removeAttribute("src"); };
        v.onloadedmetadata = () => {
            const d = Number.isFinite(v.duration) ? v.duration : null;
            cleanup();
            resolve(d);
        };
        v.onerror = () => { cleanup(); resolve(null); };
        v.src = url;
    });
}

const [durationError, setDurationError] = useState("");

const handleVideoChange = async (e) => {
    const file = e.target.files[0];
    setData("video", file || null);
    if (!file) { setDurationError(""); return; }
    const seconds = await readVideoDuration(file);
    if (seconds !== null && seconds > MAX_VIDEO_SECONDS) {
        setDurationError(`Video must be 5 minutes or less (this file is ${Math.round(seconds)}s).`);
    } else {
        setDurationError("");
    }
};

// Block submit while duration error is set
const handleSubmit = (e) => {
    e.preventDefault();
    if (durationError) return;
    post("/admin/about", { forceFormData: true });
};

// Helper text: "MP4 recommended, up to 5 minutes (any resolution including 4K)."
// <button disabled={processing || !!durationError}>
```

`URL.revokeObjectURL` is essential — without it the blob stays in memory
until the page is closed.

### E. Server limits — the often-forgotten step

Removing `max:51200` only works if the **server** accepts the larger
file. For a 1 GB 4K video, all of these must be raised:

| Layer | What | Default → Required for 1 GB |
|---|---|---|
| `php_value upload_max_filesize` | `.htaccess` (Apache) or `public/.user.ini` (CGI/FPM) | 50M → 1024M |
| `php_value post_max_size` | same | 55M → 1100M (must be ≥ upload) |
| `php_value memory_limit` | same | 256M → 512M (getID3 + Laravel overhead) |
| `php_value max_execution_time` | same | 120 → 300 (5 min) |
| `php_value max_input_time` | same | 120 → 300 |

**Two-file rule for shared hosting (e.g. Hostinger):**
- `public/.htaccess` — read by Apache mod_php. The existing project
  already uses this for `php_value upload_max_filesize 50M` etc.
  Raise the values here.
- `public/.user.ini` — read by PHP-CGI / PHP-FPM. **Create this file
  on shared hosting** where `php.ini` cannot be edited directly. The
  `.htaccess` directives don't apply under CGI mode.

Both files are needed on Hostinger: `.htaccess` for the rewrite rules
(Apache), `.user.ini` for the PHP limits (CGI). Format:

```ini
; public/.user.ini (Hostinger / shared hosting CGI override)
upload_max_filesize = 1024M
post_max_size       = 1100M
memory_limit        = 512M
max_execution_time  = 300
max_input_time      = 300
```

### F. Don't forget the local dev machine

If the dev environment is WAMP, the `php.ini` in
`C:\wamp64\bin\php\phpX.Y.Z\php.ini` must be edited **and Apache
restarted** (WAMP tray → "Restart All Services"). The `.htaccess`
overrides usually win, but it's a good idea to align the underlying
`php.ini` values too.

### G. Verification steps after implementing

1. `php -l app/Http/Controllers/Admin/AboutController.php` — no syntax errors.
2. `composer require james-heinrich/getid3` — installs the package + updates `composer.lock`.
3. `npm run build` — confirm the JSX still compiles.
4. Test in browser: upload a 4-minute video → should succeed. Upload
   a 6-minute video → should be blocked by both the JS error message
   AND the server-side 422.
5. (Production) upload `public/.user.ini` to Hostinger and confirm
   `phpinfo()` shows the new limits in the active configuration.

## Why this procedure

- A user asking about "video length" almost always means duration, but
  the only thing most projects limit is size. Showing the actual
  `max:51200` rule and saying "this is 50 MB, not 50 seconds" prevents
  hours of debugging.
- JS-side-only checks are not a security measure; they're a UX nicety.
  The report must say so or the user will think they're protected.
- `php-ffmpeg` is a great library but won't work on stock WAMP. Always
  ask about the host environment before recommending it.
- "Critical" / "no limit" answers in plain English save the user from
  reading through six files themselves.

## How to apply

Use this skill when a user asks "is video length limited?", "can admin
upload a 1-hour video?", "add a 60-second video limit", or reports that
"videos of any duration are accepted" and wants to add a cap. Default
action: run all 4 checks, report the bottom line, and propose the 3
options — never install a package without explicit confirmation.
