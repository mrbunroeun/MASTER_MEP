---
name: laravel-nullable-file-upload-update
description: Audit and fix the common Laravel CRUD bug where `$request->validate(['image' => 'nullable'])` followed by `->update($validated)` silently writes NULL (or crashes on a NOT NULL column) when an admin updates a record without uploading a new file. Covers all Admin controllers, schema-aware severity grading, and the standard fix (unset the file key when no upload).
source: auto-skill
extracted_at: '2026-07-16T03:40:54.233Z'
---

# Fix the "nullable file upload → update($validated) writes NULL" Laravel bug

The pattern in `store()` is fine: the file is `required`, stored, written to
the row. The pattern in `update()` is broken: the file is `nullable`, so when
the admin saves without uploading, `$validated['image']` exists as `null` and
gets passed straight into `$model->update($validated)`. Depending on schema:

- **NOT NULL column** → `SQLSTATE[23000] Integrity constraint violation` crash.
- **Nullable column** → silent corruption: the existing image is replaced with
  NULL on every edit, even when the admin only changed the title.

The fix is identical in both cases: in the `if ($request->hasFile(...))`
branch, add `else { unset($validated['fieldname']); }` so the key is never
passed to `->update()` when no new file was uploaded.

## When to use

The user reports:
- "Updating a record crashes with 23000 integrity constraint violation"
- "Editing without uploading a new image clears the existing image"
- "I have to re-upload the image every time I edit" (the symptom of the
  nullable-column flavor)
- Or asks for a general audit of all admin CRUD controllers for this pattern

## Procedure

### 1. Identify the controller set

The bug lives in `app/Http/Controllers/Admin/*Controller.php` (or wherever
the project's admin CRUD lives). List them with `glob` and read the `update()`
method of each one in full. Don't skim — the bug is one line, easy to miss.

### 2. For each `update()` method, check three things

1. **Field name(s):** which validated key holds a file (`image`, `logo`,
   `video`, `gallery_images`, `sections.*.image`, etc.)?
2. **Validation rule:** is it `nullable` (the bug) or `required`/`present`
   (no bug, but still means the field is mandatory on edit, which is usually
   wrong UX)?
3. **`->update()` shape:** does the controller call `$model->update($validated)`
   with the possibly-null key still in the array, OR does it use
   `$model->field = ...; $model->save();` (which is safe), OR does it call
   `unset($validated['field'])` before `->update()` (already safe)?

### 3. Cross-check the schema

For each bugged field, read the relevant migration and note whether the
column is `->nullable()`. The schema determines severity:

| Schema | Symptom | Severity |
|---|---|---|
| `string('image')` (NOT NULL) | 23000 crash on edit without upload | 🔴 High |
| `string('image')->nullable()` | Image silently cleared on every edit | 🟠 Medium |
| `string('image')->nullable()` AND `is_active` is the only "active" data | Sometimes intentional (e.g. "clear logo"), but still a hidden footgun | 🟡 Low (ask before fixing) |

If the column is part of a JSON array (e.g. `items.*.image`, `sections.*.image`,
`images.*`), audit the **array-processing helper** (`processItems`,
`processSections`, `resolveGallery`, etc.) — the bug in those is slightly
different: it's the absence of the `elseif ($oldValue) $item['field'] = $oldValue`
branch that preserves the prior image when no new upload was made.

### 4. Audit, don't fix in the same turn

Always show the user the full audit (per-controller verdict + diff) and wait
for the go-ahead. The user explicitly asked for "show me the full diff of all
changes before saving anything" in the original task — this is a recurring
preference (now confirmed across three separate multi-file admin audits in
the same project: full codebase review, the 7-controller nullable-file fix,
and a follow-up feature-references investigation), not a one-off. Honor it
unconditionally on this class of multi-file edit.

### 5. Apply the fix in one shot, one line per file

The standard fix in every case is:

```php
if ($request->hasFile('image')) {
    if ($model->image) Storage::disk('public')->delete($model->image);
    $validated['image'] = $request->file('image')->store('path', 'public');
} else {
    unset($validated['image']);   // <-- the fix
}
```

Or for the assignment-style controllers (e.g. `ProjectController`), the existing
`unset($validated['image']); // handled separately below` pattern is already
correct — don't touch it.

### 6. Report format that works

Per-controller block:

1. Show the current `update()` body (or just the relevant branch).
2. State the bug (or "no bug — already has `else { unset }`").
3. If buggy, show the 2-line diff (one `}` closing, one `else { unset }`).

End with a summary table: `file | field | bug present? | fix applied?`.

### 7. Schema column nullability is the severity dial

The bug **exists in every controller with the pattern**, regardless of schema.
The schema only changes the **observable symptom**:

| Migration declaration | Symptom | Severity |
|---|---|---|
| `$table->string('image');` (no `->nullable()`) | `SQLSTATE[23000] Integrity constraint violation` crash on every edit-without-upload | 🔴 High — production broken |
| `$table->string('image')->nullable();` | Image silently cleared to NULL on every edit; admin re-uploads every time | 🟠 Medium — UX broken, data is being silently destroyed |
| `json('items')->nullable();` with `items.*.image` inside | Same nullable-column flavor, but for the array entries | 🟠 Medium — same UX broken |

Worked example from one project: 7 admin controllers had the bug. Only one
(CertificationController) had a NOT-NULL `image` column → 23000 crash. The
other 6 had `->nullable()` columns → silent image clearing on every edit. All
7 got the same 2-line `else { unset }` fix; only the crash would have made
the bug obvious to the user. The silent-clearing flavor is invisible until
someone notices "every time I edit a Hero, the image disappears".

**Always read the migration; never assume.** The diagnosis and the fix are
the same; the user's perceived severity is very different.

## Investigation technique

- **Run `glob` on `app/Http/Controllers/Admin/*.php`** to get the full list.
- **Read each `update()` method in full** in one parallel batch.
- **For each, find the matching migration** (look for `*create_<table>*.php`
  or `*add_<column>_to_<table>*.php`) and read the column declaration to
  confirm nullability.
- **For JSON-array fields**, find the helper that processes the array and
  check for the "preserve on no-upload" branch.
- **For controllers that don't use `update($validated)` at all** (e.g. use
  `$model->field = ...; $model->save();` with `unset` before `fill()`), mark
  as already safe.

## What NOT to do

- Don't fix anything in the same turn as the audit. The user wants to see the
  full diff first, especially for multi-file changes.
- Don't blindly apply the fix to every controller — some already have it,
  some handle the field outside `$validated` entirely, and some are using
  `update(['specific_field' => value])` with a hand-built payload (already
  safe).
- Don't assume the column is NOT NULL just because the controller has the
  bug — read the migration. The bug exists in both cases; the severity
  differs.
- Don't touch `store()` methods — they need a `required` rule (or a presence
  check + manual handling) and don't suffer from this bug.
- Don't add the unset branch inside the `if` (it would be a no-op). It has
  to be in the `else` so the unset runs when there's no upload.

## Why this procedure

- The bug is invisible at the file level — it doesn't appear in tests, doesn't
  fire on the create path, and only manifests when an admin hits "Save"
  without selecting a new file. Easy to ship and easy to miss.
- Severity depends entirely on schema. The same code that crashes one project
  silently corrupts another. Read the migration.
- The user has a strong preference (validated across two prior tasks) for
  "show diffs before saving" on multi-file admin controller edits. Honor it.
- A single 2-line fix in each controller is the standard remedy — there is
  no shared "image handler" trait in this codebase to use, and introducing
  one is out of scope for a bug fix.

## How to apply

Use this skill when:
- A user reports a `23000` integrity violation on an admin edit form, or
- A user reports "my image got cleared when I just edited the title", or
- A user asks "audit every admin controller for the nullable-file-on-update
  bug" (the original task).

Procedure: glob → read all `update()` methods in parallel → cross-check
schema → report per-controller verdict + diff → wait for go-ahead → apply
fixes → summary table.

If the codebase has a shared image-handling trait or `HasUploads` interface,
note its location and use it instead of inline `if/else` — but the audit
step is the same.
