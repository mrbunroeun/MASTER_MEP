---
name: laravel-xss-dompurify-remediation
description: When a Laravel + Inertia/React project renders user-supplied rich-text via dangerouslySetInnerHTML, audit every occurrence, install DOMPurify, sanitize on the render side, and verify no other React files have the same gap. Show the full diff before saving.
source: auto-skill
extracted_at: '2026-07-16T02:08:01.748Z'
---

# Fix XSS in a Laravel + Inertia/React project using DOMPurify

When a code review flags `dangerouslySetInnerHTML` rendering admin-supplied or
TipTap-saved rich text without sanitization, the fix is more than one line —
you need to confirm there's only one such site, pick a sanitizer, and verify
the editor side isn't an issue. This is the procedure that worked.

## Procedure

### 1. Confirm the scope: how many `dangerouslySetInnerHTML` are there?

```text
grep_search in resources/js for pattern: dangerouslySetInnerHTML
```

For each hit, read the file in full and note:
- The source of the HTML (TipTap output, raw `content` column, user paste, etc.).
- Whether it's already sanitized (DOMPurify, xss-filters, etc.).
- Whether the file is server-rendered (Blade) — in which case the same grep
  pattern with `{!! !!}` applies.

**Decision rule:** if there's exactly one occurrence and it's a TipTap
`<EditorContent>` output, the fix is a 1-file edit. If there are multiple,
they all need the same sanitizer.

### 2. Don't forget the "rendered-as-HTML-but-not-dangerouslySetInnerHTML" cases

Sometimes rich text is rendered safely via a parser (e.g. a custom
`SectionBody` component that splits on `\n` and renders `<li>`/`<p>`).
That's safe by construction; **don't sanitize it**. Confirm by reading the
renderer in full.

### 3. Don't break the editor side

TipTap's `<EditorContent>` is the **output** side of the editor — it does
not call `dangerouslySetInnerHTML` and does not need DOMPurify. Sanitizing
the editor's editable area would break the rich-text experience. The
sanitizer goes on the **render** side (the public view), not the editor.

### 4. Install DOMPurify

Check first whether it's already in the project:

```bash
findstr /i "dompurify" package.json
findstr /i "dompurify" package-lock.json
ls -la node_modules/dompurify 2>/dev/null   # NOT_PRESENT if absent
```

If absent, add to `package.json` `dependencies`:

```diff
     "react-easy-crop": "^6.0.2"
+    ,
+    "dompurify": "^3.2.4"
```

Pin a current major. Don't run `npm install` in the same turn as the edit
unless the user asks — it modifies `package-lock.json` and `node_modules/`
which the user may want to review separately. Tell the user they need to
run `npm install` to actually pull the package.

### 5. Apply the sanitizer

In each render file, import DOMPurify, compute a sanitized constant, and
use it inside `dangerouslySetInnerHTML`:

```jsx
import DOMPurify from "dompurify";

// ... inside the component
const safeHtml = DOMPurify.sanitize(activity?.content || activity?.excerpt || "");

return (
    <div
        className="..."
        dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
);
```

The null-safe optional-chaining (`activity?.content`) defends against the
component being rendered with `null` (which some Inertia pages do during
hydration).

### 6. Report the full diff before saving

Always show:
- The `package.json` addition.
- Every JSX file change, with enough context (3-5 lines around the
  `dangerouslySetInnerHTML` line) so the user can confirm the right line
  was hit.
- A "What was checked but does NOT need changing" section listing files
  inspected (TipTap editor, InsightDetail parser, etc.) so the user trusts
  nothing was missed.

## Why this procedure

- A common mistake is sanitizing the TipTap `<EditorContent>` itself, which
  breaks the editor. The procedure makes the editor-vs-render distinction
  explicit.
- Skipping the `node_modules` check means committing a `package.json` change
  with no actual library present; CI/dev environments will break.
- Showing the diff before saving is consistent with the project's
  established workflow (the upload-size fix and sitemap route fix also went
  through diff-then-confirm).

## How to apply

Use this skill when a code review, audit, or vulnerability report mentions
`dangerouslySetInnerHTML`, XSS, "rich-text injection", or "unsanitized HTML"
in a Laravel + Inertia/React project. Default action: full audit of all
`dangerouslySetInnerHTML` sites, then propose a multi-file diff (if needed)
and ask before saving.
