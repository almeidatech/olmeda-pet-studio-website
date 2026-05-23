---
name: project-olmeda-website-lint-debt
description: olmeda-website carries 166 pre-existing react/no-unescaped-entities lint errors across most page files — present since at least commit a1c07af on origin/master
metadata:
  type: project
---

The olmeda-website repo has 166 pre-existing ESLint errors, all `react/no-unescaped-entities` (apostrophes and quotes in JSX text). They span ~20 files in `src/pages/` (services, work, locations, resources, legal, contact, careers, about, index, etc.). They were already present on `origin/master` at commit `a1c07af` before commit `11fee33`.

**Why:** This is accumulated technical debt from page authoring, not introduced by recent commits. The lint gate cannot be used as a blocker for new commits in this repo until a dedicated cleanup pass is done.

**How to apply:** When running pre-push quality gates here, treat lint as CONCERNS rather than FAIL if the failing files are not in the commit being pushed. Cross-check failing files against `git diff-tree --no-commit-id --name-only -r <commit>` before blocking. A dedicated cleanup PR (likely a one-shot `eslint --fix` plus manual entity escaping) should be opened separately before lint can become a true gate.
