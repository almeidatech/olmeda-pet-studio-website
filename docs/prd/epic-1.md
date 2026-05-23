# Epic 1 — Foundation, Schema & First Render

**Goal:** Estabelecer monorepo Turborepo, definir e aplicar schema Supabase via Git integration, migrar mocks MDX para Postgres, e fazer o site Next.js consumir essas rows em local dev. Ao final, `pnpm dev` no `apps/site` renderiza todas as páginas com conteúdo real vindo do Supabase.

**Prerequisites:** Phase 0 environment bootstrap ✅. Supabase project ativo (`gwgvhhymcsddyigutghm`).

**Reference:** `docs/prd.md` §6 Epic 1.

---

## Story 1.1 — Monorepo Refactor

**As a** developer, **I want** to restructure the existing flat Next.js repo into a Turborepo monorepo with `apps/site`, **so that** I can later add `apps/admin` without contamination and share types via `packages/db-types`.

**Acceptance Criteria:**
1. Repo raiz contém `turbo.json`, `pnpm-workspace.yaml`, top-level `package.json` com `workspaces` config.
2. `apps/site/` contém todo o código Next.js atual movido de `/src`, `/public`, `next.config.js`, `tsconfig.json`, etc.
3. `apps/site/package.json` declara nome `@olmeda/site` e scripts `dev`, `build`, `start`, `lint`, `typecheck`.
4. `packages/db-types/` criado como package vazio com `package.json` (`@olmeda/db-types`).
5. `pnpm install` na raiz instala tudo sem erros.
6. `pnpm --filter @olmeda/site dev` levanta o site na porta 3000 com paridade funcional ao state pré-refactor.
7. `pnpm --filter @olmeda/site build` completa verde.
8. `pnpm --filter @olmeda/site typecheck` passa.
9. `/design`, `/docs`, `MIGRATION_PLAN.md`, `SETUP.md`, `.aiox/` permanecem intocados na raiz.
10. README raiz atualizado com instruções de monorepo.

**Architecture refs:** `docs/architecture/source-tree.md`, `docs/architecture/tech-stack.md`.

---

## Story 1.2 — Supabase Schema v0

**As a** developer, **I want** a Supabase migration that creates `app_users`, `posts`, `pages`, `services`, `media`, `audit_log` with RLS, **so that** the application has a versioned, production-ready schema.

**Acceptance Criteria:**
1. Arquivo `supabase/migrations/00000000000001_init.sql` criado.
2. Tabela `app_users` (id UUID FK auth.users, role enum `admin|editor|viewer`, name, email, active, timestamps).
3. Tabela `posts` (id UUID, slug unique, title, excerpt, body_md, body_html, category, tags TEXT[], cover_image_id FK media, status enum, published_at TIMESTAMPTZ, author_id FK app_users, timestamps).
4. Tabela `pages` (id UUID, slug unique, title, body_md, body_html, meta JSONB, status, published_at, timestamps).
5. Tabela `services` (id UUID, slug unique, title, summary, body_md, body_html, price_tier, icon, order_index, status, published_at, timestamps).
6. Tabela `media` (id UUID, storage_path, alt, mime, size_bytes, uploaded_by FK app_users, timestamps).
7. Tabela `audit_log` (id BIGINT, actor_id FK app_users, action enum, entity_type, entity_id UUID, diff JSONB, created_at).
8. RLS habilitado em todas; policies: anon SELECT em `posts/pages/services` onde `status='published' AND published_at <= now()`; authenticated com role `admin|editor` full CRUD; `viewer` SELECT only; `audit_log` write only via SECURITY DEFINER trigger.
9. Triggers de `updated_at` automáticos.
10. Migration commitada em `master` é aplicada pelo Supabase Git integration (verificar via direct schema inspection, NÃO `list_migrations` — gotcha conhecido).
11. Documentação inline (`COMMENT ON TABLE/COLUMN`) cobre semântica não-óbvia.
12. `audit_log` particionado por mês (RANGE on `created_at`) com 6 partições iniciais pré-criadas — vide `docs/architecture/adrs.md` ADR-001.
13. Owner seeded via `INSERT...ON CONFLICT` por email (TODO @sm: substituir `<OWNER_EMAIL>` antes de aprovar story).

**Architecture refs:** `docs/architecture/data-models.md`, `docs/architecture/adrs.md#adr-001`.

**⚠️ Pre-requisites for story approval:**
- Confirmar `<OWNER_EMAIL>` real da Amanda.
- Verificar que `pgcrypto` extension está habilitada.

---

## Story 1.3 — Seed MDX → Supabase

**As a** developer, **I want** a one-shot script that imports existing MDX mocks into Supabase tables as drafts, **so that** we have realistic content to render and don't lose existing mocks.

**Acceptance Criteria:**
1. Script `scripts/seed-from-mdx.ts` lê `apps/site/src/content/{blog,pages,services}/*.mdx`.
2. Parsing usa `gray-matter` para frontmatter + body markdown.
3. Para cada arquivo cria row em `posts`/`pages`/`services` correspondente com `status='draft'`.
4. Slug derivado do filename se não vier em frontmatter.
5. Script idempotente (upsert por slug).
6. Script roda via `pnpm seed` na raiz; usa `SUPABASE_SERVICE_ROLE_KEY` do `.env`.
7. Output lista cada item inserido/atualizado.
8. Documentado em `docs/guides/seed.md`.

---

## Story 1.4 — Supabase Client + Type Generation

**As a** developer, **I want** `packages/db-types` populated com generated TS types + shared client factory, **so that** both apps consume the DB com type safety.

**Acceptance Criteria:**
1. Script `pnpm generate-types` roda `supabase gen types typescript --project-id gwgvhhymcsddyigutghm > packages/db-types/database.types.ts`.
2. `packages/db-types/index.ts` re-exporta types + factories `createServerClient(url, key)` + `createBrowserClient(url, anonKey)` retornando `SupabaseClient<Database>`.
3. `apps/site` adiciona `@olmeda/db-types` como workspace dependency.
4. README do package documenta workflow.
5. Types commitados no repo (não geram em CI no MVP).

---

## Story 1.5 — Site Lê do Supabase

**As a** visitante do site, **I want** pages to render content from Supabase instead of MDX mocks, **so that** the site reflects what's in the database.

**Acceptance Criteria:**
1. `apps/site/src/lib/cms.ts` criado com funções `getPosts()`, `getPostBySlug(slug)`, `getPages()`, `getPageBySlug(slug)`, `getServices()`, `getServiceBySlug(slug)` — server-side only, anon key.
2. `getStaticProps`/`getStaticPaths` de `blog/[slug]`, `blog/index`, `pages/[slug]`, `services/[slug]`, `services/index` refatorados para usar `cms.ts`.
3. Fallback MDX preservado quando `CMS_FALLBACK_MDX=1` (dev offline).
4. Erro 404 quando slug não existe ou está `draft`/`scheduled` futuro.
5. ISR habilitado: `revalidate: 60` nas páginas de conteúdo.
6. `pnpm dev` renderiza ≥3 posts + 5 páginas + home + serviços com rows seeded.
7. Sem regressão visual vs state pré-refactor (smoke manual).

**Architecture refs:** `docs/architecture/source-tree.md`, `docs/fullstack-architecture.md` §10.1.
