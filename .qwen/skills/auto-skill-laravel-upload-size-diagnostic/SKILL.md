---
name: laravel-upload-size-diagnostic
description: Diagnose why a Laravel file/image upload is rejected by systematically checking every layer (PHP ini, .user.ini, validation rules, .env, filesystems config, Nginx/Apache, frontend JS) and identifying the smallest effective limit.
source: auto-skill
extracted_at: '2026-07-16T01:54:03.960Z'
---

# Diagnose "upload too large" in a Laravel project

When admin cannot upload a file of size N MB, the cause can be at any of several
layers. Don't guess — check every layer and report the **smallest** limit, then
recommend the exact one-line change.

## Procedure

Run all checks in parallel where possible.

### 1. Active PHP limits
```bash
php -r "echo 'upload_max_filesize: ' . ini_get('upload_max_filesize') . PHP_EOL;
        echo 'post_max_size: ' . ini_get('post_max_size') . PHP_EOL;
        echo 'memory_limit: ' . ini_get('memory_limit') . PHP_EOL;
        echo 'Loaded php.ini: ' . php_ini_loaded_file() . PHP_EOL;"
```
Also check for `public/.user.ini` (CGI/FPM override). If present, its values win
for web requests even if the CLI `php -i` shows different numbers — note this
explicitly to the user.

### 2. Laravel validation rules (most common cause)
Grep all `app/Http/Controllers` and `app/Http/Requests` for the `image|max:`
or `file|max:` or `mimes:...|max:` patterns. Report file + line for every match.

**Critical unit gotcha:** Laravel's `max:N` is in **kilobytes**, not megabytes.
- `max:2048` = 2 MB
- `max:4096` = 4 MB
- `max:5120` = 5 MB
- `max:10240` = 10 MB
- `max:51200` = 50 MB

Always convert to MB when reporting to the user so they don't misread the limit.

### 3. App config
- Grep `.env` for `upload`, `file`, `size`, `max` (case-insensitive).
- Read `config/filesystems.php` — Laravel does not read upload-size from here,
  but confirm so you can rule it out explicitly.

### 4. Web server
- Nginx: grep the project tree and `/etc/nginx` for `client_max_body_size`.
- Apache: check `.htaccess` and `httpd.conf` for `LimitRequestBody`.
- WAMP/XAMPP: only Apache is in play; Nginx does not apply even if mentioned.

### 5. Frontend JS
Grep `resources/js`, `resources/views`, and any blade with alpine for
`file.size`, `fileSize`, `maxSize`, `max_file`, and inline numeric `size <` / `size >` checks.
Report constant values in bytes with the MB equivalent.

### 6. Synthesize
List every limit found with its layer, value, and MB equivalent.
The **smallest** limit is the actual blocker. State it explicitly.

Then recommend the **minimal** one-line change (just the validator lines, not
PHP ini or nginx) — prefer bumping `max:N` from N→N+ by the smallest amount
that fits, plus a safety margin. Example: to allow 4 MB, use `max:5120` (5 MB).

## Output format that worked well

1. **PHP config table** with active values + loaded php.ini path + presence/absence of `.user.ini`.
2. **Validation rules table**: file, line, rule, allowed (MB).
3. **.env / filesystems** statement (one line each — usually "no relevant setting").
4. **Web server** statement (N/A if WAMP, etc.).
5. **Frontend JS** table: file, line, limit, MB.
6. **Summary**: the single smallest limit + exact file:line to change + recommended new value, with a one-line "Why" tying it to the user's reported failure size.

## Why this procedure
- A user reporting "upload of N MB fails" often assumes it's PHP. In practice
  Laravel's per-field `max:` in KB is the most common cause, and it's invisible
  to `php -i`.
- Reporting every layer (even ones that pass) builds trust and prevents the
  user from changing the wrong file.
- Showing the diff before saving — and giving the user a chance to confirm —
  avoids "I edited the wrong line" regret.

## How to apply
Use this skill whenever the user asks "why can't I upload X", "upload size
limit", "file too large", or reports a validator error like
"The image must not be greater than 2048 kilobytes." Run all checks, then
propose a diff (do not save) and ask for confirmation before editing.
