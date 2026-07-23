---
name: npm-audit-dev-vs-prod
description: When npm audit reports vulnerabilities, triage each by direct vs transitive, production vs dev-only, exploitability, and semver range, then recommend whether to run npm audit fix (no --force) or whether --force / a manual upgrade is required. Report findings before applying any fix.
source: auto-skill
extracted_at: '2026-07-16T02:18:32.687Z'
---

# Triage `npm audit` advisories before applying a fix

`npm audit` flags every known vulnerability in the dependency tree, but
"critical" severity does NOT mean "must fix now, will break production".
Most advisories on a typical web app are:

- Transitive (in `node_modules/X/node_modules/Y`, not in your `package.json`).
- Dev-only (`devDependencies`, not bundled to the browser).
- Low exploitability (no untrusted input reaches the vulnerable code path).
- Patchable within the current semver range (no breaking change).

Apply the fix only after this triage. Don't run `npm audit fix` blindly.

## Procedure

### 1. Read the raw `npm audit` output

```bash
npm audit
```

`npm audit` exit code is **non-zero** when vulnerabilities exist — this is
expected, not an error in your script. Capture the full output. Each
advisory is listed twice when it's transitive: once for the vulnerable
package itself, once for the direct dep that pulls it in. Count distinct
advisories, not rows.

### 2. For each advisory, answer five questions

For every package listed, gather these facts:

1. **Package + installed version + fixed-in version**
   - Find the line in `package.json` (direct) or in `package-lock.json`
     under `node_modules/X/node_modules/Y/` (transitive).
   - Note the version range that contains the fix. The advisory page and
     `npm view <pkg> versions` both help.

2. **Direct or transitive?**
   - If it's in your `package.json`, it's a **direct** dep.
   - If it's only in `package-lock.json` under another `node_modules/`,
     it's a **transitive** dep — fix by bumping the parent, not the child.
   - `npm ls <package>` shows the parent chain.

3. **Production or dev-only?**
   - Check the block in `package.json`: `dependencies` vs `devDependencies`.
   - If `devDependencies`, the package is shipped only to your build machine
     (Vite, webpack, lint, test, dev server). It's never sent to the
     browser.
   - Confirm by checking the `vite build` output for any chunk that contains
     the package name. A real production bundle would have a JS file with
     the package code; a dev tool won't.
   - Dev-only packages cannot affect production users even if exploited at
     build time, **unless** untrusted input flows into them.

4. **Exploitability in THIS project**
   - Find where the package is actually invoked:
     `grep -r "<package-name>" composer.json package.json *.json vite.config.* 2>/dev/null`
   - If it's only invoked with hardcoded arguments from `composer.json` /
     npm scripts, exploitability is near zero.
   - If it's a build pipeline that processes user input, exploitability
     matters more.

5. **Fix mechanism: patch, minor, or major?**
   - Look up the patched version range.
   - Check your current `package.json` caret range (`^X.Y.Z`):
     - If the patched version is `>= X.Y.Z` (e.g. you're on `^9.0.1` and
       the fix is `9.2.2`), `npm audit fix` resolves it without
       `--force`. **Safe.**
     - If the patched version requires a major bump (e.g. you're on
       `^9.x` and the fix is in `10.x`), `npm audit fix` will refuse by
       default. You'd need `--force`, which rewrites your manifest with
       a major-version change — that **can break the build**.
   - `npm view <package>@latest version` tells you the latest published
     version, useful as a sanity check.

### 3. Common real-world outcome (this project, for example)

> `npm audit` reports 2 critical-severity vulnerabilities.
> They are the **same** advisory counted twice:
> - `shell-quote@1.8.3` (transitive in `concurrently@9.2.1`)
> - `concurrently@9.2.1` (the carrier, itself flagged as a separate row)
> `concurrently` is in `devDependencies` only; it is only invoked from
> `composer.json` with hardcoded commands; `npm audit fix` resolves the
> `shell-quote` issue within the current `^9.0.1` semver range.
> **Recommendation:** `npm audit fix` (no `--force`) is safe. There is
> no production exposure and no breaking-change risk.

That kind of summary is what the user wants — **not** a long dump of the
audit output, not a `npm audit fix --force` reflex.

### 4. Report findings before applying

For each advisory, give the user:

- **Package + installed version**
- **Direct or transitive?**
- **Production or dev-only?**
- **Brief description of the vulnerability** (one or two sentences, no need
  to copy the whole advisory)
- **Fix mechanism**: does `npm audit fix` resolve it, or does it require
  `--force` / a manual upgrade?
- **Will it break the build?** Cross-check with the project's build
  command (`npm run build`, `vite build`, `composer install`).

End with a **recommendation**: run `npm audit fix` (safe) or
`npm audit fix --force` (risky) or **don't fix** (advisory is irrelevant
for this project — e.g. dev tool with no untrusted input).

## Why this procedure

- `npm audit fix --force` has destroyed real production builds. It rewrites
  `package.json` to a major version that may have removed APIs you use.
- "Critical" is the CVSS severity, not the practical risk. A critical RCE
  in a dev-only package that only sees hardcoded commands is not a critical
  risk for *this* deployment.
- Transitive vulnerabilities are usually fixed by bumping the parent
  package, not by adding the transitive dep directly to your `package.json`
  (which would actually break the resolution).

## How to apply

Use this skill when `npm audit` reports vulnerabilities and the user asks
"what do these mean?", "is this safe to fix?", or "will this break the
build?". Default action: read the advisory, classify it on the 5
questions above, report findings, and **wait for explicit confirmation**
before running `npm audit fix` (with or without `--force`).
