---
name: laravel-feature-references-investigation
description: When a Laravel project audit surfaces a controller file that doesn't match its expected class, a route pointing at a missing method, or any "is this a dead controller or a broken feature?" question, run this 5-step investigation: (1) dump the file's class declaration, (2) grep routes for the controller/method, (3) check the model exists, (4) check admin React pages, (5) check the DB table. End with a clear BROKEN-FEATURE vs DEAD-CODE verdict before any fix is proposed.
source: auto-skill
extracted_at: '2026-07-16T03:40:54.233Z'
---

# Investigate "is this a broken feature or dead code?" in a Laravel project

When a controller file is misnamed, contains the wrong class, or routes point
at methods that don't exist on the controller they reference, the project may
have a fully-implemented frontend + database + model for a feature whose
controller layer is silently broken (500ing on every request) or
alternatively may be a leftover from a removed feature. Before assuming either,
run this investigation.

## When to use

The user asks, or the auditor's findings suggest:
- "This controller file contains the wrong class" (e.g.
  `CtaBannerController.php` contains `class CategoryGalleryController`)
- "These routes point at `Controller::method` but the method doesn't exist"
- "The model exists, the migration exists, but no controller handles them"
- "Is this dead code or a broken feature?"
- Before deciding whether to delete a file, add a method, or rewrite a route

## Procedure (run all 5 checks, in order)

### 1. Dump the file's class declaration

Read the controller file in full and report the **exact `class FooController extends`**
line. The bug pattern is: a file with one name (e.g. `CtaBannerController.php`)
containing a class with a different name (e.g. `CategoryGalleryController`).
PSR-4 autoloading will silently route `new CategoryGalleryController` to the
correctly-named file, so the misnamed file becomes unreachable. Report the
class name verbatim.

### 2. Grep `routes/web.php` (and `routes/api.php` if present) for the controller

```sh
grep -rn "CtaBanner" routes/
```

For each match, capture:
- The **HTTP method + path** the route maps to
- The **controller class** the route points to
- The **method name** the route calls (e.g. `HeroController::ctaIndex`)
- Whether the named route is referenced from anywhere else (`grep -rn
  "admin.cta-banner"`)

Also check the **shape** of the routes: e.g. is there a `POST` route for the
create form? An `index` + `create` + `store` + `edit` + `update` + `destroy`
RESTful set, or only some? A "create page that exists but no `store` route"
is a common half-implementation.

### 3. Cross-check with the model's class definition

```sh
grep -rn "class CtaBanner" app/
type app/Models/CtaBanner.php
```

Confirm:
- The **model class** exists in the expected namespace
- The **`$fillable`** array lists the fields the admin forms edit
- The **table name** (Laravel convention: `Str::snake(Str::pluralStudly(class_basename($model)))`) — confirm via the migration, not by guessing

### 4. Check the admin React pages

```sh
ls resources/js/Pages/Admin/<Feature>/
grep -rn "admin/<feature>" resources/js/
```

For each `.jsx` file in `Pages/Admin/<Feature>/`:
- Note the **HTTP calls it makes** (`post`, `put`, `delete`, `get`)
- Cross-reference each one against the routes from step 2
- If a `.jsx` calls `post("/admin/foo")` but no `POST /admin/foo` route exists,
  that's a 405-Method-Not-Allowed-or-404 in production
- If a `.jsx` calls `get(...)` for an index page, confirm there's a matching
  route that actually returns the data (the controller method exists AND
  passes the right props)

Also check if the feature is consumed by the public site (e.g. does
`Pages/Home.jsx` import a `Ctabanner` component that receives a `ctaBanner`
prop from the home route?). If yes, the read path works, which is why this
bug goes unnoticed — the user sees the banner on the homepage and assumes
the admin CRUD also works.

### 5. Check the DB table and data

```sh
php artisan tinker --execute="echo \Illuminate\Support\Facades\Schema::hasTable('foo') ? 'YES' : 'NO'; echo PHP_EOL; echo \App\Models\Foo::count();"
```

Confirm:
- The table **exists** in the schema
- It has **data** (especially if the feature is rendered on the public site —
  the public site is reading from this table, so if the admin CRUD is the only
  broken piece, the table is almost certainly populated)
- Note the **column nullability** of any image/file fields — relevant for the
  nullable-file-upload bug check

### 6. Render the verdict

After all 5 checks, the answer is one of three:

| Pattern | Verdict | Why |
|---|---|---|
| Model + table + frontend pages all exist; routes point at non-existent methods; controller file has wrong/no class | **🔴 BROKEN FEATURE** | Frontend and DB are live, only the controller layer is missing/broken. Users see 500s on the admin page. |
| Controller exists and works; no frontend pages reference it; no route points to it; no DB rows | **🟢 DEAD CODE** | Safe to delete the controller, the file, the model, and the migration (in that order, with `git rm` for each). |
| Controller exists, but only some routes are wired; some frontend pages exist; table exists with some data | **🟡 PARTIAL FEATURE** | Some admin actions work, some 500. Audit which routes/methods are missing and propose the minimal fix (usually: add the missing methods, or rename the misnamed file and add the missing route). |

## Investigation technique

- **Use `read_file` for the controller** — the class name is on the first line
  and the structure on the rest. Reading 80 lines takes less time than guessing.
- **Use `grep_search` with the controller name** (not just `class`):
  `grep -rn "CtaBanner" routes/ app/ resources/js/`
- **For the routes, read the file at the offset of the match** — the route
  definition is rarely more than 5 lines, but the **shape** of the route group
  (does `index` exist? does `create` exist? does `store` exist?) requires
  seeing the surrounding 5–10 lines.
- **For the model, read the whole file** — `$fillable` is on line 2 or 3
  usually, but you want to see all of it to confirm the field list matches
  the admin form.
- **For the frontend, list the directory** (`ls resources/js/Pages/Admin/<Feature>/`)
  and **grep for the route paths the JSX calls** — this is what reveals
  half-wired features.
- **For the DB, use `php artisan tinker --execute`** rather than `migrate:status`
  or `db:show` — `--execute` lets you run two lines (`Schema::hasTable` +
  `Model::count`) in one shell call.

## Report format that works

1. **Section 1**: full file content (or at least the `class` line + every
   `public function` line) of the suspect controller.
2. **Section 2**: route definitions verbatim, with route name → controller
   method mapping. Call out which methods are missing on the controller.
3. **Section 3**: model `$fillable` and the table name.
4. **Section 4**: list of admin `.jsx` pages, what each one POSTs/PUTs/DELETEs,
   and which of those calls have a matching route + which don't.
5. **Section 5**: `TABLE_EXISTS / TABLE_MISSING` + `rows=N`.
6. **Section 6**: a one-line verdict (`🔴 BROKEN FEATURE` /
   `🟢 DEAD CODE` / `🟡 PARTIAL FEATURE`) followed by a 2–3 line explanation
   of what the user can experience right now in production (e.g.
   "Clicking 'Add CTA Banner' → 404; clicking 'Edit' → 500; the homepage
   shows the 1 row in the table fine because the read path works").

## What NOT to do

- Don't propose a fix in the same turn as the investigation. The user will
  ask for a fix in a follow-up; propose the fix in that turn. (The user's
  preferred workflow on multi-step audits: report-only first, fix-only after
  go-ahead.)
- Don't conclude "dead code" just because the controller file is misnamed —
  check the routes, model, and frontend first. A misnamed file is often
  the *only* broken layer in a feature that otherwise works.
- Don't conclude "broken feature" just because the controller class is
  missing — check whether the routes point at a different class that does
  have the methods (e.g. `HeroController::ctaIndex` is a method on
  `HeroController`, not on a `CtaBannerController`).
- Don't auto-delete any file based on a misnaming — even if the class
  inside the file is wrong, the file may be the "intended" controller
  someone is about to write. Report the misnaming, then ask.
- Don't `php artisan migrate:rollback` to "see if the table exists" — the
  table is referenced by models and possibly by the running app, so rolling
  it back is destructive. Use `Schema::hasTable` instead.

## Why this procedure

- The misnamed-file pattern is invisible to the user: the homepage renders
  fine (the data path works), the admin panel renders the index page (the
  data path works), and the *first* click that hits a non-existent method
  500s — which the user typically interprets as "this feature was never
  finished" rather than "this is half-wired and the missing piece is the
  controller layer".
- Skipping the frontend check leads to the wrong conclusion: if no
  `Admin/CtaBanner/*.jsx` files exist, the feature is dead even if the
  controller and table exist. If they DO exist, the feature is half-wired.
- Skipping the DB check leads to the wrong conclusion in the other
  direction: if no rows exist, the broken admin CRUD is the reason there's
  no data, not evidence that the feature is unused.
- The 5-check structure is just the right depth: it takes ~4 tool calls
  (read controller, grep routes, list frontend, tinker for DB) and gives
  enough to render a confident verdict.

## How to apply

Use this skill when:
- An audit or refactor surfaces a controller file with a mismatched class
  declaration, OR
- Routes reference controller methods that don't exist (`grep "public
  function"` against the route's controller class), OR
- The user explicitly asks "is this dead code or a broken feature?"

Procedure: read the controller file → grep routes → read the model → list
the frontend pages → tinker for table existence + count → render the
BROKEN / DEAD / PARTIAL verdict → wait for the user to ask for a fix.

Do NOT propose a fix or apply edits in the same turn as the investigation.
