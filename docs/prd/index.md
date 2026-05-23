# PRD Index — Olmeda Pet Studio Website + CMS

> **Source:** `docs/prd.md` v1 (2026-05-23) — sharded by @po (Pax) 2026-05-23.
> Treat this index + the per-epic files as the canonical reference for @sm story creation.

## Quick links

- **Goals & Background:** see `docs/prd.md` §1
- **Requirements (FR1-18, NFR1-15):** see `docs/prd.md` §2
- **UI Design Goals:** see `docs/prd.md` §3
- **Technical Assumptions:** see `docs/prd.md` §4

## Epics

| Epic | Title                                  | Stories | File                          |
| ---- | -------------------------------------- | ------- | ----------------------------- |
| 1    | Foundation, Schema & First Render      | 5       | [epic-1.md](./epic-1.md)      |
| 2    | Production Deployment Pipeline         | 5       | [epic-2.md](./epic-2.md)      |
| 3    | Admin App Foundation                   | 5       | [epic-3.md](./epic-3.md)      |
| 4    | Admin CRUD, Editor & Publish Flow      | 8       | [epic-4.md](./epic-4.md)      |

**Total:** 23 stories across 4 epics.

## Sequencing rules

- Stories within an epic are sequential — story N+1 may depend on story N.
- Epics 1 → 2 → 3 → 4 in strict order. Cross-epic parallelism only if @architect/@po approves explicitly.
- Each epic delivers a deployable, shippable increment.

## Status

- Phase 1.5 validation: ✅ PASS (see `docs/po-validation.md`).
- Ready for SDC: stories drafted via @sm `*create-story` consuming this index.
