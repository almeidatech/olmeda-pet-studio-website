---
name: project-olmeda-website-scripts
description: olmeda-website package.json only defines lint, build, dev, start, format — no test, no typecheck scripts
metadata:
  type: project
---

`package.json` scripts available: `postinstall`, `dev`, `build`, `start`, `lint`, `format`. There are **no** `test` or `typecheck` scripts.

**Why:** This is a Next.js 14 static marketing site. TypeScript checks run as part of `next build` (build will fail on type errors). No test suite has been authored yet.

**How to apply:** Pre-push quality gate should only run `lint` and `build`. Skip `test` and `typecheck` gracefully per the task spec — `build` covers type-checking implicitly. Do not request the user to "add tests before pushing" for this repo.
