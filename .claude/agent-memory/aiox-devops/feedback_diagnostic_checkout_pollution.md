---
name: feedback-diagnostic-checkout-pollution
description: Never use `git checkout <other-commit> -- .` to probe history — it stages files from the other commit and pollutes the working tree. Use git show / git diff instead.
metadata:
  type: feedback
---

When verifying whether a lint/build failure is pre-existing on a parent commit, do NOT use `git checkout <parent> -- .` followed by `git checkout <head> -- .`. This pattern stages files from the other commit and silently changes the index, even when the working tree appears clean on first inspection.

**Why:** In this session I used that pattern to check whether 166 lint errors existed on `a1c07af` (parent of `11fee33`). After "restoring" with `git checkout 11fee33 -- .`, the index ended up with 7 staged Adds (legacy `public/css/`, `public/fonts/`, `public/js/`, `public/video/` paths) — directly contradicting the asset reorganization being pushed. I had to `git reset --hard 11fee33` to recover. Had I pushed without checking, I would have shipped a broken state.

**How to apply:** To check history without mutating state, use:
- `git show <commit>:<path>` to read a file at a commit
- `git diff <parent> <head> -- <path>` to see what changed
- A temporary worktree (`git worktree add /tmp/probe <commit>`) for full-tree probes
After ANY git operation that could touch the index, run `git status --short` before proceeding to the next step.
