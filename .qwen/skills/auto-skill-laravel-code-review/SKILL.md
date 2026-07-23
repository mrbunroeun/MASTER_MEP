---
name: laravel-code-review
description: Perform a non-disruptive full code review of a Laravel + Inertia/React project covering security, validation, database/Eloquent, error handling, code quality, and frontend. Report findings with file:line + severity (High/Medium/Low) grouped High-first; do NOT fix anything until the user confirms.
source: auto-skill
extracted_at: '2026-07-16T02:02:33.569Z'
---

# Full Laravel + Inertia/React code review (read-only, report findings)

When the user asks for "a full code review", "audit the project", or "check
for issues in [these areas]", do a read-only sweep and produce a structured
report. **Do not modify any code in the same turn as the report** — the user
must see the findings first and pick what to fix.

## Areas to cover (default checklist)

If the user doesn't specify, run the full checklist. If they do specify, only
skip categories they didn't ask for, but always note the skipped ones.

1. **Security**
   - SQL injection: grep for `DB::raw|whereRaw|selectRaw|havingRaw|orderByRaw|DB::statement|DB::select|->raw\(` in `app/`.
   - Mass assignment: grep `\$request->all\(\)|->create\(\$request|\$request->all\(\)` AND verify every model under `app/Models/` has `$fillable`, `$guarded`, or the PHP 8 `#[Fillable]`/`#[Guarded]` attribute.
   - Auth/role middleware: confirm all `/admin/*` routes sit inside `Route::middleware(['auth', 'admin'])`. Check `bootstrap/app.php` for the alias.
   - File upload validation: every `->file()->store()` and `Storage::disk()` should be preceded by a `validate()` with `image`/`mimes`/`max:`. Flag any `->store()` with no matching validator.
   - XSS: grep Blade for `{!! !!}` and React for `dangerouslySetInnerHTML`. For each hit, assess whether the content is sanitized.
   - Secrets: search for `env(...)` calls that look like hardcoded tokens; also search for emails, API keys, bot tokens used directly in code (e.g. `Mail::to('someone@gmail.com')`, `Http::post("https://api...bot{$token}")`).

2. **Validation**
   - Every `store()` and `update()` must call `$request->validate()` or use a FormRequest. List any that don't.
   - Collect every `image|max:NNNN` and `mimes:...|max:NNNN` rule; flag **inconsistencies** in similar fields (e.g. one controller at 2 MB, another at 50 MB, with no apparent reason).
   - Compare `store()` and `update()` of the same controller for the same field — flag when `required` becomes `nullable` (or vice versa) without a documented reason. Sometimes intentional, sometimes a bug.

3. **Database / Eloquent**
   - N+1: look for `foreach` over a collection that touches a relationship without `->with()`/`->load()`. Also check `routes/web.php` and Blade views if relevant.
   - Indexes: read `database/migrations/*.php`; flag foreign keys without `$table->index()` and frequently-queried columns (`is_active`, `slug`, `category`, `order`, `type`) without an index.
   - Migration issues:
     - Missing or empty `down()`.
     - Destructive no-op `down()` (e.g. drop table that was just created, with no recreate logic in `down()`).
     - Empty stub migrations that have a name suggesting they should do something (red flag).
     - Duplicate migrations with the same name/purpose a few minutes apart.

4. **Error handling**
   - Grep `app/Http/Controllers` for `try {` / `catch (` — note if it's **zero** (consistent lack of error handling).
   - Look for external API calls (`Http::`, `Mail::`, `Notification`) without `->throw()`, response check, or try/catch — flag any that return a "success" message regardless of failure.
   - File operations: `Storage::delete()` and `$request->file()->store()` without error handling; in particular the "delete old, store new" pattern that loses data on a partial failure.

5. **Code quality**
   - Duplicate logic: especially the "if old image exists, delete it; if new file uploaded, store it" pattern — list every location, recommend a shared trait or helper.
   - Dead code: unused `use` statements, commented-out code, unused variables.
   - Inconsistent naming: PascalCase vs camelCase, route-name style (`'admin.x.y'` vs FQNs), redirect URL style (`route(...)` vs hardcoded strings).
   - Helpers defined inside `routes/web.php` instead of `app/Helpers/` or a service class.

6. **Frontend (React/Inertia)**
   - `dangerouslySetInnerHTML` — list every occurrence, note whether content is sanitized (DOMPurify, etc.).
   - `console.log` / `console.warn` / `console.error` / `debugger;` left in production — list file:line.
   - `.map()` without a stable `key=` prop, or using array index as the key.
   - Unhandled loading/error states in Inertia `useForm`, `router.post`, `axios`, or `fetch` calls.
   - Hardcoded file-size limits in JS (`MAX_FILE_SIZE = ...`) and whether they match the backend.

## Investigation technique

- **Run searches in parallel** where possible (multiple `grep_search`/`glob_search` in one block).
- **Read representative files in full** — don't skim. For each Admin controller, read the whole file (most are < 200 lines). For migrations, read each in full so you catch empty `up()`/`down()` stubs.
- **Read `routes/web.php` end to end** — it's where most public-facing logic and middleware-group bugs live.
- **Read `bootstrap/app.php`** to confirm middleware aliases (`'admin' => ...`).
- **Read `app/Models/User.php` and one or two other models** to confirm `$fillable` style (traditional vs PHP 8 attributes).
- **For the frontend**, sample 2-3 admin pages and 2-3 public pages — the difference is where the most bugs hide.

## Severity rubric (use consistently)

- **🔴 High** — security hole, data loss, data corruption, "false success" UX, or production runtime exception with no handling. Examples: publicly accessible write endpoint with no auth, hardcoded secrets, `ini_set()` of `PHP_INI_PERDIR` (no-op but misleading), XSS via `dangerouslySetInnerHTML` with no sanitizer, missing try/catch around payment/mail that returns success on failure.
- **🟠 Medium** — correctness/UX bug, consistency bug, performance hot spot, missing best-practice item. Examples: validation rule typo (`max:50120` vs `max:51200`), inconsistent `required`/`nullable` between `store()` and `update()`, missing indexes on hot columns, duplicate logic that should be extracted.
- **🟡 Low** — code style, naming, dead code, minor perf, anti-patterns that aren't breaking. Examples: `console.log` in prod, `key={i}` on `.map()`, typo in folder name (`Insgihts/` vs `Insights/`), inline DB queries in `routes/web.php` instead of a controller.

## Report format that works

1. **Group by severity**, High first → Medium → Low.
2. **Each finding**: `file:line` → short description → severity.
3. After the severity lists, add a **"✅ NOT FOUND"** section listing the categories that came up clean (e.g. "No SQL injection via raw queries found" or "All `/admin/*` routes are inside the auth+admin middleware group"). This builds trust that you actually checked.
4. End with a **"Top 5 things to fix first"** list of the most impactful High-severity items, in order.
5. A summary line: total count per severity.

## What NOT to do in the same turn

- Don't fix anything. The user will choose what to fix; jumping straight to edits is presumptuous and risky.
- Don't write a generic checklist response. Cite **this project's** files and lines.
- Don't pad findings with low-severity items to look thorough. If a category is clean, say so.

## Why this procedure

- A read-only report lets the user prioritize. Reviewing 60+ findings in one
  sitting is fine; fixing 60+ in one pass introduces regressions.
- Citing file:line makes the report actionable — the user can `cmd+click` in
  their editor.
- Grouping High-first matches the natural reading order: "what's broken?" →
  "what's wrong?" → "what's annoying?"
- The "NOT FOUND" section prevents the user from wondering whether you
  actually checked those areas.

## How to apply

Use this skill when the user says "code review", "audit", "find issues",
"security review", "check for bugs", or lists one or more of the six areas
above. Run the full checklist by default, report findings only, and end with
"would you like me to fix any of these?" — never start editing in the same
turn.
