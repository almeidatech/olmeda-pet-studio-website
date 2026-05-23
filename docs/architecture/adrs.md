# Architecture Decision Records (ADRs)

> Full rationale in `docs/fullstack-architecture.md` §18. This file is the consumable index.

## ADR-001 — Audit Log Partitioning & Retention

**Status:** Accepted
**Decision:** Particionar `audit_log` por mês (`PARTITION BY RANGE (created_at)`); retenção 13 meses; cleanup via DROP partition (Phase 2 cron); 6 partições futuras pré-criadas em script.
**Why:** PRD NFR12 exige ≥1 ano; DROP partition é O(1); partition pruning otimiza queries por data.

## ADR-002 — Supabase Backup Strategy

**Status:** Accepted
**Decision:** MVP: built-in daily backup do Supabase Free (7d retention) + weekly `pg_dump` via GH Action para MinIO no VPS (4w retention). Upgrade pra Supabase Pro (PITR 7d) quando ≥2 editores ativos.
**Why:** RPO 24h aceitável no MVP (baixo volume); custo zero.

## ADR-003 — Magic-Link Email Transport

**Status:** Accepted
**Decision:** MVP: Supabase Auth built-in transport. Migrar pra Resend SMTP quando: deliverability spam, >5 editores, ou branding `from:` necessário.
**Why:** Zero setup; aceitável pra CMS interno; sem code change na migração futura.

## ADR-004 — Scheduled → Published Cron

**Status:** Accepted
**Decision:** **pg_cron** (`* * * * *`) executando UPDATE SQL direto, sem Edge Function. UPDATE dispara webhook ISR via cadeia padrão.
**Why:** Mais simples (1 SQL job); latência ≤60s aceita; pg_cron já habilitado no Supabase.

## ADR-005 — Image Processing Pipeline

**Status:** Accepted
**Decision:** Next.js API route em `apps/admin/src/pages/api/upload.ts` usando `sharp` (resize ≤1920, WEBP q82). Single-container processing.
**Why:** `sharp` é state-of-art; sem cold start de Edge Function; performance ~150ms para 4MB.
**⚠️ Risk R2:** Docker alpine precisa `apk add --no-cache vips`.

## ADR-006 — Revalidate Token Rotation

**Status:** Accepted
**Decision:** Dual-token strategy: site aceita `REVALIDATE_TOKEN` (current) + `REVALIDATE_TOKEN_PREVIOUS` (old). Rotation flow: gen new → deploy site com ambos → update webhook → wait 1h → remove previous.
**Why:** Zero downtime rotation; simplicidade.

## ADR-007 — Zero-Downtime Schema Migrations

**Status:** Accepted
**Decision:** Expand-then-contract pattern obrigatório.
1. Add nullable column / new table (compat com old code).
2. Deploy app reading old + optionally new.
3. Backfill (separate migration).
4. Cutover (flip code).
5. Drop old column/constraint (separate migration).
**Restrictions:** Nunca `ADD COLUMN NOT NULL` sem default; nunca `DROP COLUMN` enquanto código usa; nunca `RENAME` (use add+backfill+drop).
**Why:** Supabase Git integration auto-aplica DDL; app running pode quebrar.
**⚠️ Caveat:** `CREATE INDEX CONCURRENTLY` não funciona em migration (Supabase wraps em transaction). Use dashboard pra concurrent indexes pós-launch.

---

## Quick decision matrix

| Question                     | Answer                              | ADR  |
| ---------------------------- | ----------------------------------- | ---- |
| How to retain audit?         | Monthly partitions, 13mo            | 001  |
| Backup of DB?                | Built-in + weekly pg_dump           | 002  |
| Email transport?             | Supabase built-in (MVP)             | 003  |
| Cron for scheduled posts?    | pg_cron SQL job                     | 004  |
| Image processing?            | sharp em Next API route             | 005  |
| Token rotation?              | Dual-token, zero-downtime           | 006  |
| Schema migration safety?     | Expand-then-contract                | 007  |
