# PO Master Validation — Phase 1 Artifacts

**Date:** 2026-05-23
**Validator:** @po (Pax)
**Mode:** YOLO cross-doc consistency check
**Artifacts reviewed:**
- `docs/project-brief.md` (v1)
- `docs/prd.md` (v1)
- `docs/front-end-spec.md` (v1)
- `docs/fullstack-architecture.md` (v1)

---

## Verdict: ✅ GO with 6 minor fixes

Documentos são internamente coerentes e mutuamente alinhados. 6 ajustes pontuais necessários antes de shard — todos `[FIX]` listados abaixo. Nenhum issue arquitetural ou de escopo bloqueia o avanço.

---

## Coverage matrix (PRD requirements ↔ architecture)

| PRD ID | Coverage in architecture                                                | Status     |
| ------ | ----------------------------------------------------------------------- | ---------- |
| FR1    | §9 schema + Supabase Git integration                                    | ✅         |
| FR2    | §10.1 site routing + §6.1 lib/cms.ts                                    | ✅         |
| FR3    | §11.2 magic-link flow + middleware                                      | ✅         |
| FR4    | §9 RLS policies                                                         | ✅         |
| FR5-6  | §6.2 RichEditor + tech stack TipTap                                     | ✅         |
| FR7    | §6.2 + §11.3 image pipeline                                             | ✅         |
| FR8    | ADR-004 pg_cron                                                          | ✅         |
| FR9    | §9 audit trigger fn + ADR-001 partitioning                              | ✅         |
| FR10-11| §5.1 /api/revalidate + §8.1 sequence                                    | ✅         |
| FR12   | Story 1.3 covers                                                         | ✅         |
| FR13   | §10.1 sitemap.xml.ts                                                    | ✅         |
| FR14   | §10.1 /api/og/[type]/[slug]                                             | ✅         |
| FR15-16| §6.2 DataTable + /users                                                 | ✅         |
| FR17   | §10.1 site routing matches design pages                                 | ✅         |
| FR18   | §13 design system consumed via npm                                      | ✅         |
| NFR1-5 | §15.2 perf strategies                                                   | ✅         |
| NFR6   | §14 swarm restart_policy + healthchecks                                 | ✅         |
| NFR7   | §14 Traefik + LE                                                         | ✅         |
| NFR8   | §15.1 service-role isolation enforced                                   | ✅         |
| NFR9   | Smoke checklist Story 4.8                                                | ✅ (handed off)|
| NFR10  | §14 build matrix + cache                                                | ✅         |
| NFR11  | ADR-005 sharp WEBP                                                       | ✅         |
| NFR12  | ADR-001 13mo retention (>1y ✅)                                          | ✅         |
| NFR13  | Schema sem JSONB locale                                                  | ✅         |
| NFR14  | ADR-002 backup strategy                                                 | ✅         |
| NFR15  | ADR-003 email transport                                                  | ✅         |

**Coverage: 33/33 PRD requirements have explicit architecture treatment.**

---

## Fixes required before shard

### [FIX-1] Story 1.2 AC missing partitioning reference

**Where:** `docs/prd.md` Epic 1 / Story 1.2 / AC9.
**Issue:** Architecture ADR-001 manda particionar `audit_log` por mês. Story 1.2 AC9 só diz "RLS habilitado" sem mencionar partitioning.
**Fix:** add AC10 "audit_log partitioned by month per ADR-001, with 6 initial monthly partitions pre-created via migration".

### [FIX-2] Story 3.3.1 referenced but never declared

**Where:** `docs/prd.md` Epic 3 / Story 3.3 AC3 mentions "Story 3.3.1" hipotética.
**Issue:** Não existe Story 3.3.1 formal. Architecture §9 já inclui seed do owner na init migration via `INSERT...ON CONFLICT`.
**Fix:** Remove a alternativa "OR migration adicional Story 3.3.1" do AC3 e refine pra: "Owner seeded via initial migration `INSERT...ON CONFLICT` por email (Amanda); SE auth.users ainda não existe, primeiro login do owner cria row em auth.users e seed roda no próximo deploy/sync."

### [FIX-3] Owner email é placeholder

**Where:** `docs/fullstack-architecture.md` §9 seed `WHERE email = 'amanda@olmedapetstudio.com'`.
**Issue:** Email real desconhecido.
**Fix:** Substituir por placeholder explícito `<OWNER_EMAIL>` + nota: "TODO: confirmar email do owner antes de Story 1.2 ser executada". @sm pega isso na criação da story.

### [FIX-4] Story 4.2 AC8 redundante com ADR-004

**Where:** `docs/prd.md` Epic 4 / Story 4.2 AC8 diz "decisão @architect; aceito qualquer um que funcione".
**Issue:** Arquitetura JÁ decidiu (ADR-004 pg_cron). AC ficou desatualizado.
**Fix:** Reescrever AC8 para: "Promoção `scheduled→published` via pg_cron schedule a cada minuto (vide ADR-004); SQL job em `supabase/migrations/00000000000002_cron.sql`".

### [FIX-5] Story 4.6 — onde fica o webhook config

**Where:** `docs/prd.md` Epic 4 / Story 4.6 AC4 diz "configurado via dashboard ou migration".
**Issue:** Architecture §8.1 implica webhook config existe mas não diz como/onde versionado.
**Fix:** AC4 reescrito: "Supabase Database Webhook criado via dashboard manualmente (Supabase Git integration NÃO cobre webhook config — gotcha). Procedure documentada em `docs/guides/webhook-setup.md` (passo-a-passo screenshots). Payload, target URL e token salvos em `.aiox/runbook/webhook-config.yaml` para restore disaster recovery."

### [FIX-6] PRD §4.4 ENV var nome `WEBHOOK_SIGNING_SECRET`

**Where:** `docs/fullstack-architecture.md` §13.2 lista `WEBHOOK_SIGNING_SECRET` como "optional Phase 2".
**Issue:** PRD nunca menciona — só lista `REVALIDATE_TOKEN`. Architecture introduz var nova sem ancorar em FR.
**Fix:** OK manter como "Phase 2 optional"; sem ação pro MVP. Documentar em `docs/architecture/security.md` quando shard rodar.

---

## Cross-doc consistency: confirmed alignments

- **Stack:** PRD §4 + spec §6 + arch §3 tech stack — todos batem (Next 14 Pages Router, Supabase PG17, Turborepo+pnpm, Docker Swarm, Traefik, GHCR, GH Actions, TipTap).
- **Naming:** os 3 nomes (folder/repo/package) reconhecidos consistentemente em todos docs como inconsistência aceita.
- **Roles enum:** `admin|editor|viewer` consistente em PRD FR4 + spec §1.1 + arch §9.
- **Status enum:** `draft|scheduled|published|archived` consistente.
- **Auth:** magic-link only em todos docs.
- **Deploy target:** Hetzner 178.156.139.32 / Swarm 1-node em todos docs.
- **Performance targets:** Lighthouse ≥90, LCP ≤2.5s, publish→live ≤30s — consistentes.
- **Out-of-scope:** AI, i18n, multi-tenant, form builder, analytics, comments, newsletter — consistentes.

## Cross-doc gaps NOT requiring fix (Phase 2 ok)

- **E2E Playwright:** mencionado como Phase 2 em todos docs — sem ação.
- **Sentry/error tracking:** Phase 2 — sem ação.
- **Rate limiting de /api/upload:** Phase 2 — sem ação.
- **CSP detalhado:** mencionado em arch §15.1, detalhar no shard `coding-standards.md`.
- **PR template + Dependabot:** sub-feito; spawn issue Phase 2.

---

## Risks flagged for SDC awareness

- **R1:** Supabase Git integration aplica DDL mas não atualiza `schema_migrations` (gotcha discovery). @sm/@dev devem validar via direct schema inspection após push, não `list_migrations`.
- **R2:** `sharp` no Docker alpine precisa `apk add --no-cache vips` — recordar em Dockerfile (Story 2.1/3.5).
- **R3:** `CREATE INDEX CONCURRENTLY` incompatível com Supabase Git integration (transactional). Index criados nas migrations sem `CONCURRENTLY` no MVP (tabelas vazias). Após launch, indexes futuros via Supabase Dashboard.
- **R4:** Cloudflare DNS-only (grey cloud) é mandatório no MVP para HTTP-01 ACME. Se Cloudflare proxy for ligado antes do cert provisionar, falha silenciosa.
- **R5:** pg_cron extension deve estar habilitada no Supabase project antes da Story 4.2 — verificar via dashboard.

---

## Action items for @po before shard

Aplicar FIX-1 a FIX-5 nos arquivos correspondentes (FIX-6 não-bloqueante). Após fixes aplicados, prosseguir com shard.

— Pax, validando histórias ✓
