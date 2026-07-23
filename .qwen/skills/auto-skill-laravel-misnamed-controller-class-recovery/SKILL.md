---
name: laravel-misnamed-controller-class-recovery
description: When a Laravel audit or feature-references investigation reveals a controller file declares the wrong class (e.g. CtaBannerController.php contains class CategoryGalleryController), recover the missing methods from git history into the correctly-named controller, and delete the misnamed file. Pairs with laravel-feature-references-investigation (which detects the issue) — this skill is the fix procedure.
source: auto-skill
extracted_at: '2026-07-16T06:18:47.226Z'
---

# Recover methods when a controller file declares the wrong class

A Laravel project may have evolved to the point where one file declares a
class that doesn't match its filename. Most commonly:

- `CtaBannerController.php` contains `class CategoryGalleryController`
  (legacy of a copy-paste that was never renamed)
- A file was renamed on disk but the class inside still says the old name
- A class was moved into a different file as a temporary experiment and
  the original was supposed to be deleted

This is an anti-pattern because routes are routed by class
(`CategoryGalleryController@index`) — the file name is incidental. So the
bug is silent: routes still resolve, the class still loads, but the file
name lies about what's in it. The first person to try
"delete this obviously-unused controller" wipes out a feature they didn't
know was living there.

This skill is the **fix procedure** for the case where deleting the
misnamed file (or fixing the class name) would break a real feature.
**Pair with `laravel-feature-references-investigation`** — that skill
detects the issue and recommends an action; this one carries it out.

## When to use

- The investigation skill (or a manual grep) found a file with a class
  name that doesn't match the filename
- The user said "delete this controller" or "make X a static section" and
  the feature-references investigation flagged it
- `php artisan route:list` shows routes resolving to the class that
  lives in the wrong file
- Deleting or renaming the file would 500 a route that the live
  application depends on

## Procedure

### 1. Confirm the mismatch with one read

Open the suspected file. Look at line 1 of the class declaration. Compare
to the filename. Example:

```
app/Http/Controllers/Admin/CtaBannerController.php
  → contains:  class CategoryGalleryController extends Controller
```

This is the smoking gun. The file is named for a class that doesn't
exist in it; the class it does contain has a different filename (often
`app/Http/Controllers/Admin/CategoryGalleryController.php`).

### 2. Find the "real" file for the class

For every class that lives in a misnamed file, find the file the class
*should* be in. Use:

```bash
grep -rn "class CategoryGalleryController" app/
```

The result is normally 2 files:

- The misnamed file (full implementation) — e.g. `CtaBannerController.php`
- The correctly-named file (may be a stub with just `update()` or empty)

### 3. Read the correctly-named file in full

The "real" file is often a partial implementation — a single method like
`update()` that was added later, while `index()` and the supporting
`CATEGORIES` const stayed in the misnamed file. Read it in full so you
know exactly what's already present and what needs to be merged in.

### 4. Diff the two files method-by-method

Build a table before any edit:

| Method/const | Misnamed file | Correctly-named file | Action |
|---|---|---|---|
| `CATEGORIES` const | present | absent | copy into correct file |
| `index()` | present | absent | copy into correct file |
| `update()` | present | present (different impl) | KEEP correct file's version, do NOT copy |
| Imports | `use Inertia\Inertia;` etc. | some missing | merge missing imports |

The common pattern: the correctly-named file has a **newer / canonical**
version of `update()` (because the misnamed file was forgotten about),
and the misnamed file has the **original** `index()` and the const.
The fix is: copy the missing pieces from the misnamed file into the
correct one, then delete the misnamed file.

### 5. If the misnamed file is already deleted, recover from git

If the misnamed file was already deleted in a recent commit (which is
exactly the scenario this skill was born from — deleting
`CtaBannerController.php` wiped out the only `CategoryGalleryController::index()`):

```bash
# Find which commit still had the misnamed file
git log --all --oneline -- app/Http/Controllers/Admin/CtaBannerController.php

# View the full file as it existed right before deletion
git show <sha-before-deletion>:app/Http/Controllers/Admin/CtaBannerController.php
```

Then pick the methods/consts that the correctly-named file is missing
and merge them in. **Do not** blindly copy the whole file — the
correctly-named file is the source of truth for any method it already
defines.

### 6. The merge edit pattern

Apply with `edit`, not `write_file`, so the diff is reviewable:

```php
// Add imports the misnamed file had but the correct one doesn't
+use Inertia\Inertia;
```

```php
// Add the const above the methods that need it
+private const CATEGORIES = [
+    'Commercial Buildings',
+    'Hospitals',
+    'Banks',
+    'Restaurants & Cafés',
+    'Luxury Villas',
+    'Fitness Centers',
+    'Fuel & Industrial Projects',
+];
```

```php
// Add the missing method at the top of the class, above the existing one
+/**
+ * Show all categories with their current 5 image slots.
+ */
+public function index()
+{
+    $galleries = CategoryGallery::all()->keyBy('category');
+    // ... (verbatim from the misnamed file)
+    return Inertia::render('Admin/CategoryGallery/Index', [
+        'galleries' => $data,
+    ]);
+}
```

**Do not** modify the existing `update()` method even if it has minor
differences from the misnamed file's version. It's the live one in
production; the misnamed file is the abandoned one.

### 7. Delete the misnamed file

Once the correctly-named file is complete:

```bash
git rm app/Http/Controllers/Admin/CtaBannerController.php
```

This is the part that's safe **only after** the merge in step 6 — not
before. The investigation skill's BROKEN-FEATURE vs DEAD-CODE verdict
tells you which; this skill assumes the verdict is "live feature, just
in the wrong place."

### 8. Verify

Three checks, in order:

```bash
# 1. PHP syntax
php -l app/Http/Controllers/Admin/CategoryGalleryController.php
# Expected: "No syntax errors detected"

# 2. Routes still resolve to real methods (no "undefined method")
php artisan route:list | findstr /I "category-gallery"
# Expected: lines like
#   GET|HEAD  admin/category-gallery ... CategoryGalleryController@index
#   PUT       admin/category-gallery/{category} ... CategoryGalleryController@update
```

```bash
# 3. Frontend build (catches the case where the page expects a prop
#    shape the new index() method doesn't produce)
npm run build
# Expected: "✓ built in X.XXs", no errors
```

The second check is the highest-signal one. If the route line shows
`CategoryGalleryController@index` (not "undefined method" or a 500
trace), the merge succeeded.

### 9. Commit message pattern

The commit message should make it clear that two things happened in one
fix:

```
fix: hide <feature> button + recover <method>() method deleted with <misnamed-file>
```

The "+" makes the dual nature obvious — future maintainers reading
`git log` will know the commit isn't just a UI tweak and shouldn't be
cherry-picked without the method recovery.

## What NOT to do

- **Do not** rename the class inside the misnamed file to match the
  filename. The misnamed file is the *abandoned* one — fixing the class
  name keeps the abandoned structure in place. The correctly-named file
  is the one that should grow.
- **Do not** copy `update()` from the misnamed file into the correctly-
  named file. The correctly-named file's `update()` is the live version;
  overwriting it would silently regress whatever the user has fixed
  about it (validation, error handling, the
  `REMOVE`/delete-old-file pattern, etc.).
- **Do not** add a new const just because the old one had it, if the
  new method doesn't reference it. In the example, `update()` doesn't
  validate against `CATEGORIES` (no `abort_unless(in_array(...))`), so
  the const is only added because `index()` enumerates from it.
- **Do not** push to git without first running
  `php artisan route:list`. A syntax error is silent at the file level
  if PHP never loads the class — the route still resolves, but the
  method body throws when called. `route:list` won't catch a missing
  method, but it WILL catch an autoloader failure (which the merged
  class is most at risk of).
- **Do not** skip the `git show` step when recovering from a deleted
  file. Reading from memory is exactly the kind of mistake this skill
  exists to prevent — the user may have edited the misnamed file's
  methods since the version you remember, and you want the version
  that was actually in production.

## Why this procedure

- The misnamed-class anti-pattern is silent at the route layer. A user
  can ship the project for years without noticing, until they try to
  delete what looks like dead code — at which point they 500 a live
  feature. Catching this requires a feature-references investigation,
  not a code review.
- The "merge into the canonical file, don't rename the class" decision
  matters because the canonical file is almost always the more
  recently-touched one. A user who fixed the file name is signaling
  "this is the file I work in." Reversing that decision (renaming the
  class back to match the abandoned file) creates a maintenance trap.
- Recovering the deleted method from `git show` is the only safe
  source. Even if the user remembers the method body, they may not
  remember the imports, the docblock, or the variable names — and the
  diff against the canonical file is what reveals those. The recovery
  is the moment to verify "yes, this is the version that was in
  production, not the version I think I wrote six months ago."
- The `+` in the commit message is a small but important
  signal: the UI tweak and the backend recovery belong together
  because the recovery is what makes the UI tweak non-regressive.
  Splitting them would let a future revert of just the UI change
  re-break the backend.

## How to apply

Use this skill when the user asks for any of:

- "Delete this controller" and the investigation says it contains a
  live class with the wrong name
- "Make X a static section" and the X admin controller actually
  contains the implementation for a *different* feature
- "Why is `/admin/category-gallery` 500ing" after deleting a file the
  user thought was unused
- "This controller file has the wrong class name — fix it"

Pair with `laravel-feature-references-investigation` for detection, and
with `laravel-static-section-conversion` for the broader "convert this
admin CRUD to static" case where the misnamed controller is part of
the cleanup scope.
