# Olmeda Pet Studio Website + CMS — Product Requirements Document (PRD)

**Status:** Draft v1 (Phase 1.2 — PM output)
**Date:** 2026-05-23
**Author:** @pm (Morgan) — derived from `docs/project-brief.md`
**Input artifacts:** `docs/project-brief.md`, `docs/discovery.md`, `docs/proposed-plan.md`

---

## 1. Goals and Background Context

### Goals

- Publicar `olmedapetstudio.com` em produção (HTTPS via Traefik + Let's Encrypt, hospedado no Hetzner VPS).
- Substituir mocks MDX por conteúdo real servido do Supabase Cloud.
- Entregar CMS (`admin.olmedapetstudio.com`) que permite o owner publicar posts/páginas/serviços sem tocar no repo.
- Garantir ciclo publish→live em menos de 30s via Postgres webhook + Next.js ISR.
- Estabelecer pipeline CI/CD via GitHub Actions → GHCR → `docker stack deploy` espelhando o pattern de `aylas-site`.
- Onboarding-zero para editor não-técnico (publica primeiro post em <10 min sem assistência).

### Background Context

Olmeda Pet Studio possui um site Next.js 14 em construção (migração HTML→Next.js em curso) que ainda lê conteúdo de mocks MDX em `/src/content`, sem ambiente de produção e sem ferramenta para edição por não-devs. A infra de produção (VPS Hetzner + Docker Swarm + Traefik + GHCR) e o backend (Supabase Cloud `gwgvhhymcsddyigutghm`, `sa-east-1`) já estão provisionados e validados (incluindo a integração Git→Supabase para auto-apply de migrations). O projeto entrega site em produção + CMS dedicado, reutilizando patterns battle-tested de `aylas-site` (Traefik/Swarm), `mundodecici` (GHCR) e `nicoletti-cigars` (Supabase+RLS+webhook ISR).

### Change Log

| Date       | Version | Description           | Author          |
| ---------- | ------- | --------------------- | --------------- |
| 2026-05-23 | 1.0     | Initial PRD draft     | @pm (Morgan)    |

---

## 2. Requirements

### 2.1 Functional

- **FR1:** Sistema persiste conteúdo (posts, pages, services, media) em Supabase Postgres com schema versionado em `supabase/migrations/*.sql`.
- **FR2:** Site público (`apps/site`) lê dados do Supabase em build (SSG/ISR) com fallback opcional MDX em dev via env flag.
- **FR3:** Admin app (`apps/admin`) autentica via Supabase Auth magic-link (email-only).
- **FR4:** RLS no Postgres aplica permissões por role enum (`admin`, `editor`, `viewer`); leitura pública restrita a `status = 'published'`.
- **FR5:** Editor TipTap com escopo WordPress-parity: bold, italic, heading (H2/H3), link, image, code-inline + code-block, listas ordered/unordered.
- **FR6:** Editor salva markdown source (`body_md`) e HTML renderizado (`body_html`) na mesma row.
- **FR7:** Admin oferece CRUD completo para Posts, Pages, Services e gerenciamento de Media (upload via Supabase Storage).
- **FR8:** Scheduled publishing — campo `published_at TIMESTAMPTZ` permite agendar publicação futura; site só renderiza conteúdo com `status='published' AND published_at <= now()`.
- **FR9:** Audit log registra toda escrita (INSERT/UPDATE/DELETE) em `posts`, `pages`, `services`, `media`, `app_users` com `actor_id`, `action`, `entity_type`, `entity_id`, `diff JSONB`, `created_at`.
- **FR10:** Postgres webhook dispara em UPDATE/INSERT de `posts`/`pages`/`services` onde `status='published'`, chamando `POST /api/revalidate?paths=...` no site com token de autenticação.
- **FR11:** Site expõe `/api/revalidate` autenticado (header `x-revalidate-token` ou query string) que executa `res.revalidate(path)` para os paths recebidos.
- **FR12:** Migration inicial faz seed das mocks MDX existentes em `/src/content/{blog,pages,services}` como rows com `status='draft'`.
- **FR13:** Site gera sitemap.xml a partir de queries Supabase (todos os slugs published).
- **FR14:** Admin gera OG image básica por post (server-side, via Next.js `@vercel/og` ou Satori).
- **FR15:** Admin app exibe lista paginada (50/page) de posts/pages/services com filtros por status e busca por título.
- **FR16:** Admin app permite ao owner gerenciar usuários (`/users`): criar/desativar accounts, atribuir roles.
- **FR17:** Site possui rotas estáticas/dinâmicas correspondentes às páginas de design existentes em `/design`: home, sobre, serviços, blog index, blog post, contato.
- **FR18:** Site usa o design system externo `amandaalmeidda/olmeda-design-system` consumido via npm.

### 2.2 Non-Functional

- **NFR1:** Site Lighthouse Performance ≥ 90 em mobile (Moto G4 / 4G slow).
- **NFR2:** LCP do site ≤ 2.5s no p75 mobile.
- **NFR3:** TTFB do site ≤ 200ms quando servido do VPS Hetzner (sem CDN externo no MVP).
- **NFR4:** Publish→live latency ≤ 30s end-to-end (webhook + revalidate).
- **NFR5:** Admin TTI ≤ 3s em desktop.
- **NFR6:** Uptime ≥ 99.5% mensal (limitação de Swarm 1-node aceita).
- **NFR7:** HTTPS obrigatório em ambos `olmedapetstudio.com` e `admin.olmedapetstudio.com`, com cert Let's Encrypt renovado automaticamente via Traefik.
- **NFR8:** Service-role key do Supabase NUNCA pode ser bundled no `apps/site`; uso restrito a `apps/admin` em código server-side.
- **NFR9:** Editor não-técnico consegue publicar primeiro post sem assistência em ≤ 10 min após onboarding inicial.
- **NFR10:** Build do monorepo (turbo) em CI completa em ≤ 5 min (cold) / ≤ 2 min (warm com cache).
- **NFR11:** Imagens enviadas via admin processadas/otimizadas (formato `.webp` ou compressão equivalente; max 1MB por imagem após processamento).
- **NFR12:** Audit log retém registros por no mínimo 1 ano (decisão final → @architect Phase 1.4).
- **NFR13:** Site EN-only no MVP — sem JSONB locale columns.
- **NFR14:** Backup do Supabase: PITR Pro habilitado OU dump diário automatizado (decisão final → @architect).
- **NFR15:** Magic-link email transport: Supabase built-in OU SMTP customizado (decisão final → @architect; afeta deliverability).

---

## 3. User Interface Design Goals

### 3.1 Overall UX Vision

**Site público:** elegante, leve, pet-friendly. Hierarquia visual clara guiando visitante para serviços ou contato. Performance percebida como instantânea. Mobile-first (maioria do tráfego esperado de Instagram/WhatsApp/Google mobile).

**Admin:** desktop-first, denso em informação mas calmo visualmente. Padrão "list + detail + editor full-screen" inspirado em Notion/Linear. Não-técnico deve completar publicação sem ver markdown raw, slugs ou IDs.

### 3.2 Key Interaction Paradigms

**Site público:**
- Navegação header + footer simples, mobile menu hamburger.
- CTAs claros (WhatsApp, formulário de contato) no fim de páginas de serviço.
- Cards de blog em grid responsivo.

**Admin:**
- Lista lateral fixa (Posts, Pages, Services, Media, Users).
- Editor TipTap em modo "WYSIWYG completo" (não preview + source split).
- Save manual + status badge (Draft / Scheduled / Published / Archived).
- Schedule picker = datepicker simples + select hora.
- Media picker = modal com grid + upload drop zone.

### 3.3 Core Screens and Views

**Site público:**
- Home
- Sobre
- Serviços (index + detail por slug)
- Blog (index + post detail por slug)
- Contato

**Admin:**
- Login (magic-link email input → "check your email" state)
- Dashboard (resumo: drafts, scheduled, recent activity)
- Posts list (`/posts`)
- Post detail/editor (`/posts/[id]`)
- Pages list + editor
- Services list + editor
- Media library (`/media`)
- Users (`/users`) — owner-only
- Audit log viewer (`/audit`) — owner-only

### 3.4 Accessibility

**WCAG AA** — site público obrigatório; admin best-effort (uso interno limita escopo de testes formais).

### 3.5 Branding

Consumir 100% do design system `amandaalmeidda/olmeda-design-system` (repo privado, instalado via deploy token). Source-of-truth visual em `/design` (HTML/CSS imutável). Admin usa palette neutro do design system + acentos da marca para CTAs/status badges.

### 3.6 Target Device and Platforms

- **Site público:** Web Responsive (mobile + tablet + desktop), evergreen browsers.
- **Admin:** Web desktop (1280px+ first), responsivo até tablet; sem suporte mobile dedicado no MVP.

---

## 4. Technical Assumptions

### 4.1 Repository Structure

**Monorepo Turborepo** — `apps/site`, `apps/admin`, `packages/db-types` (Supabase TS types compartilhados). Refactor do repo atual (atualmente flat Next.js) para essa estrutura. Mantém repo único `github.com/almeidatech/olmeda-pet-studio-website` como source of truth. **Rationale:** shared types, single CI matrix, atomic releases de schema+admin+site, alinhado a `proposed-plan.md` ratificado.

### 4.2 Service Architecture

**Monolith por app, multi-app por stack.** Dois serviços Docker independentes (`apps/site` e `apps/admin`), cada um Next.js standalone em modo standalone build. Ambos atrás do mesmo Traefik na network `olmedaNet`. **Sem comunicação direta** entre eles — ambos consomem Supabase. Edge Functions Supabase opcional no Phase 2 se precisar lógica server-side compartilhada.

### 4.3 Testing Requirements

**Unit + Integration (sem E2E formal no MVP).**
- **Unit:** funções puras (slugify, markdown→html, RLS policy helpers) via Vitest.
- **Integration:** queries Supabase usando supabase local (`supabase start`) com seed mínimo + testes de fluxo (publish post → render no site dev server).
- **Smoke E2E manual:** checklist documentado em `docs/qa/smoke-checklist.md` rodado antes de cada deploy production.
- **No Playwright no MVP** — adicionar Phase 2 quando admin estabilizar.

### 4.4 Additional Technical Assumptions and Requests

- **Framework site/admin:** Next.js 14, Pages Router (manter compatibilidade com migração em curso). App Router fica como possível Phase 2 refactor.
- **Database:** Supabase Postgres 17 (project `gwgvhhymcsddyigutghm`, `sa-east-1`). Migrations versionadas em `supabase/migrations/*.sql`, auto-aplicadas via Supabase Git integration (validado 2026-05-23; gotcha: `schema_migrations` não populado — verificar via direct schema inspect).
- **Auth:** Supabase Auth magic-link only (sem senha). Email transport: Supabase built-in inicialmente, SMTP customizado se deliverability ruim (@architect decide).
- **Editor:** TipTap (`@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-image`, `@tiptap/extension-link`). Escopo travado em WordPress-parity — sem tables, embeds custom, ou extensions no MVP.
- **Storage:** Supabase Storage para mídia. Bucket `media` público (leitura). Upload via admin com service-role.
- **CI/CD:** GitHub Actions — workflow único `.github/workflows/deploy.yml` com matrix `[site, admin]`. Build Docker multi-stage standalone → push GHCR `ghcr.io/olmedatech/olmeda-{site,admin}:latest` + `:{sha}` → SSH ao VPS → `docker stack deploy -c infra/swarm/olmeda.yaml olmeda`.
- **Infra files:** `infra/swarm/olmeda.yaml` (stack file), `apps/{site,admin}/Dockerfile` (multi-stage).
- **Design system:** consumido via npm `github:amandaalmeidda/olmeda-design-system#master` — CI precisa de deploy token (`GH_DESIGN_SYSTEM_TOKEN`) com read em repo privado.
- **DNS:** Cloudflare DNS-only (grey cloud) para HTTP-01 ACME challenge. A records: `olmedapetstudio.com`, `www.olmedapetstudio.com`, `admin.olmedapetstudio.com` → `178.156.139.32`.
- **Secrets:** `.env` local para dev (gitignored); GitHub Actions secrets para CI; Docker stack envs injetadas no `docker stack deploy`.
- **Linting/formatting:** ESLint config existente + Prettier. Sem mudança no MVP.
- **Package manager:** pnpm (já em uso no host, mais eficiente com monorepo).
- **Node version:** Node 24 (já instalado), pinado em `package.json` engines.
- **Existing artifact preservation:** `MIGRATION_PLAN.md`, `SETUP.md`, `/design`, `/docs/frontend-reference` permanecem intocados — `/design` é imutável.

---

## 5. Epic List

Quatro épicos sequenciais, cada um entregando um incremento deployable e testável:

- **Epic 1: Foundation, Schema & First Render** — monorepo Turborepo, schema Supabase + seed de mocks MDX, site lê do DB em local dev, scripts de build verde. _Outcome: site renderiza conteúdo real em localhost._
- **Epic 2: Production Deployment Pipeline** — Dockerfile, GitHub Actions, stack Swarm + Traefik, DNS + TLS, site live em `https://olmedapetstudio.com`. _Outcome: site público no ar com conteúdo seeded._
- **Epic 3: Admin App Foundation** — `apps/admin`, Supabase Auth magic-link, layout + role gating, views read-only de posts/pages/services. _Outcome: owner faz login no admin e visualiza conteúdo existente._
- **Epic 4: Admin CRUD, Editor & Publish Flow** — TipTap editor, media library, audit log, webhook ISR, OG/sitemap, smoke checklist. _Outcome: owner publica post novo via admin, aparece live em <30s._

**Rationale do sequencing:**
- E1 fecha primeiro a integração arquitetural (monorepo + schema + leitura) — sem isso, todo o resto fica suspenso no ar.
- E2 traz a infra de produção pra cedo (não acumular dívida de deploy) — site live com conteúdo seeded já entrega valor a stakeholders.
- E3 separa auth/layout (risco baixo) do CRUD/editor (risco alto) — permite validar Supabase Auth + RLS isoladamente antes de adicionar TipTap.
- E4 é onde o CMS "vira CMS" — concentra editor + ISR + audit + polish.

Cross-cutting que **NÃO viram último épico** (entram desde Epic 1):
- Logging básico (`console` + Next.js logs no Docker).
- Audit log do schema (definido em Epic 1, populado a partir de Epic 4).
- TypeScript strict desde Epic 1.

---

## 6. Epic Details

### Epic 1 — Foundation, Schema & First Render

**Goal:** Estabelecer o monorepo Turborepo, definir e aplicar o schema inicial do Supabase via Git integration, migrar mocks MDX para rows seeded no Postgres, e fazer o site Next.js consumir essas rows em ambiente local. Ao final do épico, `pnpm dev` no `apps/site` renderiza todas as páginas com conteúdo real vindo do Supabase.

#### Story 1.1 — Monorepo Refactor

As a developer,
I want to restructure the existing flat Next.js repo into a Turborepo monorepo with `apps/site`,
so that I can later add `apps/admin` without contamination and share types via `packages/db-types`.

**Acceptance Criteria**
1. Repo raiz contém `turbo.json`, `pnpm-workspace.yaml`, top-level `package.json` com `workspaces` config.
2. `apps/site/` contém todo o código Next.js atual movido de `/src`, `/public`, `next.config.js`, `tsconfig.json`, etc.
3. `apps/site/package.json` declara nome `@olmeda/site` e scripts `dev`, `build`, `start`, `lint`, `typecheck`.
4. `packages/db-types/` criado como package vazio com `package.json` (`@olmeda/db-types`, `main: ./index.ts`, conteúdo placeholder).
5. `pnpm install` na raiz instala tudo sem erros.
6. `pnpm --filter @olmeda/site dev` levanta o site na porta 3000 com paridade funcional ao state pré-refactor (mocks MDX ainda funcionam neste momento).
7. `pnpm --filter @olmeda/site build` completa verde.
8. `pnpm --filter @olmeda/site typecheck` passa.
9. `/design`, `/docs`, `MIGRATION_PLAN.md`, `SETUP.md`, `.aiox/` permanecem intocados na raiz.
10. README raiz atualizado com instruções de monorepo.

#### Story 1.2 — Supabase Schema v0

As a developer,
I want a Supabase migration that creates `app_users`, `posts`, `pages`, `services`, `media`, `audit_log` with RLS,
so that the application has a versioned, production-ready schema.

**Acceptance Criteria**
1. Arquivo `supabase/migrations/00000000000001_init.sql` criado.
2. Tabela `app_users` (id UUID FK auth.users, role enum `admin|editor|viewer`, name, email, active boolean, timestamps).
3. Tabela `posts` (id UUID, slug unique, title, excerpt, body_md, body_html, category, tags TEXT[], cover_image_id FK media, status enum `draft|scheduled|published|archived`, published_at TIMESTAMPTZ, author_id FK app_users, timestamps).
4. Tabela `pages` (id UUID, slug unique, title, body_md, body_html, meta JSONB, status, published_at, timestamps).
5. Tabela `services` (id UUID, slug unique, title, summary, body_md, body_html, price_tier, icon, order_index, status, published_at, timestamps).
6. Tabela `media` (id UUID, storage_path, alt, mime, size_bytes, uploaded_by FK app_users, timestamps).
7. Tabela `audit_log` (id UUID, actor_id FK app_users, action enum `insert|update|delete`, entity_type, entity_id UUID, diff JSONB, created_at).
8. RLS habilitado em todas; policies: anon SELECT em `posts/pages/services` onde `status='published' AND published_at <= now()`; authenticated com role `admin|editor` full CRUD; `viewer` SELECT only; `audit_log` write only via SECURITY DEFINER trigger.
9. Triggers de `updated_at` automáticos.
10. Migration commitada em branch `master` é aplicada pelo Supabase Git integration ao schema `public` (verificar via direct inspection, não `list_migrations`).
11. Documentação inline (`COMMENT ON TABLE/COLUMN`) cobre semântica dos campos não-óbvios.
12. `audit_log` particionado por mês (RANGE on `created_at`) com 6 partições iniciais pré-criadas (current + 5 ahead) — vide ADR-001.

#### Story 1.3 — Seed MDX → Supabase

As a developer,
I want a one-shot script that imports existing MDX mocks into Supabase tables as drafts,
so that we have realistic content to render and don't lose the mocks already written.

**Acceptance Criteria**
1. Script `scripts/seed-from-mdx.ts` lê `apps/site/src/content/{blog,pages,services}/*.mdx`.
2. Parsing usa `gray-matter` para frontmatter + body markdown.
3. Para cada arquivo cria row em `posts`/`pages`/`services` correspondente com `status='draft'`, `body_md` = markdown source, `body_html` = renderizado.
4. Slug derivado do filename se não vier em frontmatter.
5. Script idempotente (upsert por slug).
6. Script roda via `pnpm seed` na raiz; usa `SUPABASE_SERVICE_ROLE_KEY` do `.env`.
7. Output do script lista cada item inserido/atualizado.
8. Documentado em `docs/guides/seed.md` com pré-requisitos e exemplo.

#### Story 1.4 — Supabase Client + Type Generation

As a developer,
I want `packages/db-types` populated with generated TS types from Supabase + a shared client factory,
so that both apps consume the DB with full type safety.

**Acceptance Criteria**
1. Script `pnpm generate-types` roda `supabase gen types typescript --project-id gwgvhhymcsddyigutghm > packages/db-types/database.types.ts`.
2. `packages/db-types/index.ts` re-exporta types + factory `createSupabaseServerClient(url, key)` retornando `SupabaseClient<Database>`.
3. `apps/site` adiciona `@olmeda/db-types` como dependency workspace.
4. README do package documenta workflow (gerar types quando schema muda).
5. Types gerados commitados no repo (não geram em CI no MVP).

#### Story 1.5 — Site Lê do Supabase

As a visitante do site,
I want pages to render content from Supabase instead of MDX mocks,
so that the site reflects what's in the database.

**Acceptance Criteria**
1. `apps/site/src/lib/cms.ts` criado com funções `getPosts()`, `getPostBySlug(slug)`, `getPages()`, `getPageBySlug(slug)`, `getServices()`, `getServiceBySlug(slug)` — todas server-side only, usando anon key.
2. `getStaticProps`/`getStaticPaths` das páginas `blog/[slug]`, `blog/index`, `pages/[slug]`, `services/[slug]`, `services/index` refatoradas para usar `cms.ts`.
3. Fallback MDX preservado quando env `CMS_FALLBACK_MDX=1` (para dev offline).
4. Erro 404 quando slug não existe ou conteúdo está `draft`/`scheduled` futuro.
5. ISR habilitado: `revalidate: 60` nas páginas de conteúdo.
6. `pnpm dev` renderiza pelo menos 3 posts + 5 páginas + home + serviços a partir das rows seeded em Story 1.3.
7. Sem regressão visual vs. state pré-refactor (smoke manual: home, /blog, /blog/[primeiro post], /servicos).

---

### Epic 2 — Production Deployment Pipeline

**Goal:** Containerizar `apps/site`, automatizar build+push+deploy via GitHub Actions, configurar Docker Swarm stack com Traefik labels (pattern de `aylas-site`), apontar DNS Cloudflare e levantar HTTPS Let's Encrypt. Ao final, qualquer push em `master` deploya automaticamente, e `https://olmedapetstudio.com` está no ar com conteúdo real do Supabase.

#### Story 2.1 — Dockerfile Multi-Stage Site

As a developer,
I want a multi-stage Dockerfile that produces a minimal Next.js standalone image for `apps/site`,
so that deployments are fast and the image is small.

**Acceptance Criteria**
1. `apps/site/Dockerfile` com stages `deps` (pnpm install com cache), `builder` (build standalone), `runner` (output mínimo).
2. Build flag `--output=standalone` no `next.config.js` ativo.
3. Imagem final inclui apenas `.next/standalone`, `.next/static`, `public/`, `node_modules` essenciais.
4. Healthcheck `/api/health` exposto (endpoint criado retornando `200 OK` com `{ status: 'ok', commit: process.env.GIT_SHA }`).
5. Tamanho da imagem final ≤ 250MB.
6. `docker build -t olmeda-site:test apps/site` localmente funciona.
7. Container roda com `docker run -p 3000:3000 olmeda-site:test` e responde a `/` + `/api/health`.
8. ENV vars consumidas: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `REVALIDATE_TOKEN`.

#### Story 2.2 — GitHub Actions Build & Push

As a developer,
I want a workflow that builds the Docker image on push to master and pushes it to GHCR,
so that we have versioned, immutable artifacts.

**Acceptance Criteria**
1. `.github/workflows/deploy.yml` criado com trigger `push` em `master` e `workflow_dispatch`.
2. Job `build-site` faz checkout, login GHCR, build, push com tags `latest` + `${{ github.sha }}`.
3. Imagem registrada em `ghcr.io/olmedatech/olmeda-site`.
4. Workflow tem cache de Docker layers (`actions/cache` ou `buildx`).
5. Secret `GH_DESIGN_SYSTEM_TOKEN` injetado no build args para `pnpm install` acessar repo privado do design system.
6. Build verde em <8 min cold, <4 min com cache.
7. Documentação `docs/guides/ci-cd.md` explica trigger, secrets necessários, debug.

#### Story 2.3 — Docker Swarm Stack + Traefik Labels

As a DevOps operator,
I want a stack file `infra/swarm/olmeda.yaml` defining the site service with Traefik labels,
so that I can `docker stack deploy` to bring it up.

**Acceptance Criteria**
1. `infra/swarm/olmeda.yaml` define service `olmeda-site` consumindo `ghcr.io/olmedatech/olmeda-site:latest`.
2. Service attached à network external `olmedaNet`.
3. Traefik labels seguindo pattern de `aylas-site`: routers HTTP→HTTPS redirect, HTTPS com `letsencryptresolver`, middleware www→apex redirect, healthcheck path `/api/health`.
4. Rules cobrem `Host(olmedapetstudio.com)` e `Host(www.olmedapetstudio.com)`.
5. Service usa `loadbalancer.server.port=3000`.
6. ENV vars do Supabase + `REVALIDATE_TOKEN` injetadas via `secrets` ou `environment` do compose.
7. Stack file commitado em `infra/swarm/`.
8. Documentação `docs/guides/deploy.md` com comando `docker stack deploy -c infra/swarm/olmeda.yaml olmeda`.

#### Story 2.4 — GitHub Actions Deploy Step

As a developer,
I want the CI workflow to SSH into the VPS and run `docker stack deploy` after image push,
so that deploy is fully automated on push to master.

**Acceptance Criteria**
1. Job `deploy-site` no `deploy.yml` depende de `build-site`.
2. Usa `appleboy/ssh-action` ou equivalente com secrets `VPS_HOST=178.156.139.32`, `VPS_USER=root`, `VPS_SSH_KEY`.
3. Comando remoto: `docker pull ghcr.io/olmedatech/olmeda-site:latest && docker stack deploy -c /srv/olmeda/olmeda.yaml olmeda --with-registry-auth`.
4. Stack file copiado para VPS via SCP step antes do deploy (ou versionado em `/srv/olmeda/` manualmente — decisão @devops).
5. Rolling update strategy no compose (`update_config: order: start-first, parallelism: 1`).
6. Post-deploy step faz healthcheck (`curl -fsS https://olmedapetstudio.com/api/health`) e falha o workflow se 500/timeout.
7. Notificação de falha (GitHub commit status; opcional Discord/Slack webhook).

#### Story 2.5 — DNS + TLS Cutover

As a DevOps operator,
I want DNS records pointing to the VPS and TLS certificates issued,
so that `https://olmedapetstudio.com` is reachable publicly.

**Acceptance Criteria**
1. A records em Cloudflare (DNS-only grey cloud): `olmedapetstudio.com`, `www.olmedapetstudio.com`, `admin.olmedapetstudio.com` → `178.156.139.32`.
2. Traefik (existente no VPS) resolve as rules e obtém certs Let's Encrypt para todos os 3 hostnames.
3. `https://olmedapetstudio.com` retorna 200 e renderiza home com conteúdo seeded.
4. `https://www.olmedapetstudio.com` redireciona 301 para apex.
5. `http://olmedapetstudio.com` redireciona 301 para HTTPS.
6. SSL Labs grade A ou superior em `olmedapetstudio.com`.
7. `admin.olmedapetstudio.com` resolve mas retorna 404 ou placeholder (admin ainda não existe — corrigido em Epic 3).
8. TTFB ≤ 200ms medido de SP via curl.

---

### Epic 3 — Admin App Foundation

**Goal:** Criar `apps/admin` como Next.js separado, implementar Supabase Auth magic-link, layout + role gating, e views read-only listando posts/pages/services. Ao final, owner faz login em `admin.olmedapetstudio.com` e visualiza todo conteúdo existente; ainda sem capacidade de editar.

#### Story 3.1 — Admin App Skeleton

As a developer,
I want `apps/admin` scaffolded as a separate Next.js app in the monorepo,
so that admin development doesn't interfere with site code.

**Acceptance Criteria**
1. `apps/admin/` criado com Next.js 14 (Pages Router para consistência) + TypeScript + design system import.
2. `apps/admin/package.json` declara `@olmeda/admin`, scripts standard, deps Supabase + db-types via workspace.
3. `pnpm --filter @olmeda/admin dev` levanta na porta 3001.
4. Landing `/` mostra placeholder "Olmeda CMS — Login required" + link `/login`.
5. Layout base com sidebar fixa (links: Posts, Pages, Services, Media, Users) — sem funcionalidade ainda, apenas navegação.
6. Tailwind ou CSS módulos do design system aplicados.
7. `pnpm --filter @olmeda/admin build` verde.

#### Story 3.2 — Supabase Auth Magic-Link

As an owner,
I want to log in via magic link sent to my email,
so that I don't have to manage a password.

**Acceptance Criteria**
1. Rota `/login` aceita email, dispara `supabase.auth.signInWithOtp({ email })`.
2. UI mostra estado "check your email" após submit bem-sucedido.
3. Rota `/auth/callback` processa link recebido, troca por sessão Supabase e redireciona para `/posts`.
4. Sessão persiste em cookies HttpOnly (Supabase SSR helper).
5. Middleware Next.js (ou HOC) bloqueia rotas autenticadas (`/posts`, `/pages`, `/services`, `/media`, `/users`) se não logado → redirect `/login`.
6. `/logout` invalida sessão e redireciona `/login`.
7. Email magic-link recebido via Supabase built-in (transport SES/custom é decisão @architect/@devops; MVP usa default).
8. Erro de email inválido / rate limit exibe mensagem clara em PT-BR.

#### Story 3.3 — Role Gating + User Loading

As an admin,
I want the app to load my role from `app_users` after auth,
so that role-restricted UI works correctly.

**Acceptance Criteria**
1. Após login, hook `useCurrentUser()` busca row de `app_users` matching `auth.uid()`.
2. Se row não existe ou `active=false`, exibe "Access denied — contact owner" e logout forçado.
3. Owner (Amanda) seeded via initial migration de Story 1.2 com `INSERT ... ON CONFLICT (id) DO UPDATE` matching por email. Se `auth.users` ainda não existe (owner não logou nenhuma vez), seed roda no próximo deploy/sync após primeiro magic-link. Documentado em `docs/guides/owner-bootstrap.md`.
4. Sidebar mostra/oculta link `/users` baseado em `role === 'admin'`.
5. Sidebar mostra/oculta `/audit` baseado em `role === 'admin'`.
6. Context Provider `<AuthContext>` disponibiliza `{ user, role, supabase }` para qualquer componente.
7. Logout limpa context.

#### Story 3.4 — Read-Only Lists (Posts/Pages/Services)

As an admin,
I want to view paginated lists of posts, pages and services,
so that I can confirm what content exists.

**Acceptance Criteria**
1. `/posts` lista posts com colunas: title, status, published_at, author, updated_at.
2. Paginação 50/página com query string `?page=N`.
3. Filtro por status (dropdown: all/draft/scheduled/published/archived).
4. Busca por título (input + debounce 300ms → query ILIKE).
5. Click em row navega para `/posts/[id]` (placeholder por agora — readonly view).
6. `/posts/[id]` mostra title + body_html rendered + metadata.
7. Replicar pattern em `/pages` e `/services`.
8. Loading states (skeleton) e empty states (mensagem + CTA "Create" disabled — habilitado em Epic 4).
9. RLS implícito via cliente authenticated com role admin — testar que viewer não vê drafts.

#### Story 3.5 — Admin Deploy (Dockerfile + Stack + CI)

As a DevOps operator,
I want `apps/admin` containerized and deployed similar to site,
so that the admin URL works in production.

**Acceptance Criteria**
1. `apps/admin/Dockerfile` clonado de `apps/site` com ajustes (nome, port 3001).
2. Workflow `deploy.yml` ganha matrix `[site, admin]` cobrindo build + push de ambos.
3. Stack file `infra/swarm/olmeda.yaml` ganha service `olmeda-admin` com Traefik labels para `Host(admin.olmedapetstudio.com)`.
4. ENV vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (admin only).
5. Healthcheck `/api/health` no admin idem site.
6. Deploy step roda `stack deploy` com ambos serviços.
7. `https://admin.olmedapetstudio.com/login` responde 200 em produção.
8. Owner consegue fazer login real em produção e ver listas (com conteúdo do Supabase prod).

---

### Epic 4 — Admin CRUD, Editor & Publish Flow

**Goal:** Implementar criação/edição/exclusão de Posts/Pages/Services com TipTap, media library com upload Supabase Storage, audit log populado, webhook ISR para revalidate, OG image básica e sitemap. Ao final, owner publica post novo via admin, post aparece em `https://olmedapetstudio.com/blog/[slug]` em <30s. Smoke checklist documentado.

#### Story 4.1 — TipTap Editor (WordPress Parity)

As an editor,
I want a rich text editor with WordPress-parity formatting,
so that I can write posts without learning markdown.

**Acceptance Criteria**
1. Componente `<RichEditor value onChange />` em `apps/admin/src/components/`.
2. Extensions: starter-kit, link, image, code-block. **Sem** tables, embeds, callouts custom.
3. Toolbar exibe: bold, italic, H2, H3, link (modal), image (open media picker), code-inline, code-block, list ul/ol.
4. Output salvo como `body_md` (markdown export via `tiptap-markdown` ou `turndown`) **e** `body_html` (TipTap getHTML).
5. Editor não permite paste com formatação rica externa (paste-as-plaintext OU sanitização rigorosa).
6. Word count + estimated reading time exibidos abaixo.
7. Auto-save draft a cada 30s (status badge "Saved 12s ago").
8. Sem suporte a co-edição/realtime no MVP.

#### Story 4.2 — Post CRUD

As an editor,
I want to create, edit, delete and schedule posts,
so that I have full content lifecycle control.

**Acceptance Criteria**
1. Botão "New post" em `/posts` → cria draft vazio → navega `/posts/[id]`.
2. Formulário em `/posts/[id]` cobre: title, slug (auto-generated, editable), excerpt, category, tags, cover_image (via media picker), body (RichEditor), status (dropdown), published_at (datetime picker).
3. Save dispara UPDATE com optimistic UI; erro mostra toast vermelho.
4. Slug uniqueness validado client + server (RLS retorna erro se duplicado).
5. Delete confirmation modal → soft delete (status='archived'). Hard delete só via SQL direto (não exposto no admin MVP).
6. "Publish now" CTA seta `status='published'` + `published_at=now()`.
7. "Schedule" CTA exige `published_at` futuro + `status='scheduled'`.
8. Promoção `scheduled → published` via pg_cron schedule `* * * * *` (cada minuto), vide ADR-004. SQL job em `supabase/migrations/00000000000002_cron.sql`. UPDATE dispara webhook ISR via cadeia padrão.

#### Story 4.3 — Pages + Services CRUD

As an editor,
I want CRUD on Pages and Services analogous to Posts,
so that I can manage static content and service offerings.

**Acceptance Criteria**
1. `/pages/[id]` espelha `/posts/[id]` minus category/tags, plus `meta JSONB` editor (key-value para SEO meta).
2. `/services/[id]` espelha `/posts/[id]` minus body category/tags, plus `price_tier`, `icon` (select de design system icons), `order_index`.
3. Re-ordering em `/services` via drag-and-drop (opcional MVP — pode ser input number manual).
4. Mesmo padrão de save/delete/publish/schedule.

#### Story 4.4 — Media Library

As an editor,
I want to upload, list and pick images from a media library,
so that I can illustrate posts and pages.

**Acceptance Criteria**
1. `/media` lista grid de mídia com thumbs, filename, size, dimensões, uploaded_by, created_at.
2. Botão "Upload" abre file picker; aceita PNG/JPG/WEBP até 5MB raw.
3. Upload envia para Supabase Storage bucket `media`, processa (resize >1920px → 1920px, convert para WEBP, compress) — pode ser server-side simples em Next.js API route ou Edge Function.
4. Cria row em `media` table após upload bem-sucedido.
5. Click em item → modal com URL pública, alt text editor, delete.
6. Media picker (`<MediaPicker onSelect />`) reutilizável invocado de RichEditor (Story 4.1) e form de cover_image (Story 4.2).
7. Bucket policy: leitura pública anon, write authenticated com role admin/editor.

#### Story 4.5 — Audit Log Population

As an admin,
I want every write operation to log to `audit_log`,
so that we have a trail of who changed what.

**Acceptance Criteria**
1. Trigger SQL em `posts`/`pages`/`services`/`media`/`app_users` capturando INSERT/UPDATE/DELETE.
2. Trigger usa SECURITY DEFINER + `auth.uid()` para popular `actor_id`.
3. `diff JSONB` armazena old vs. new (apenas campos modificados em UPDATE).
4. `/audit` (owner-only) lista log com filtros por actor, entity_type, date range.
5. Performance: index em `(entity_type, entity_id, created_at DESC)` e `(actor_id, created_at DESC)`.
6. Retention: sem cleanup automático no MVP (decisão @architect — NFR12 ≥ 1 ano).

#### Story 4.6 — Webhook ISR

As an editor,
I want the public site to update within 30s of publishing,
so that scheduled content goes live punctually.

**Acceptance Criteria**
1. Endpoint `apps/site/src/pages/api/revalidate.ts` aceita POST com header `x-revalidate-token` (compara constant-time vs. env `REVALIDATE_TOKEN`).
2. Body JSON: `{ paths: string[] }`. Para cada path chama `res.revalidate(path)`.
3. Retorna 200 com lista de revalidated paths; 401 se token inválido; 400 se body malformado.
4. Supabase Database Webhook criado via dashboard manualmente (Supabase Git integration NÃO cobre webhook config — gotcha). Trigger em `INSERT`/`UPDATE` em `posts`/`pages`/`services` `WHERE status='published'`. Procedure documentada em `docs/guides/webhook-setup.md`; config (payload, target URL, token) versionada em `.aiox/runbook/webhook-config.yaml` para disaster recovery.
5. Webhook payload derivado da row + slug; chama endpoint do site com paths apropriados (ex: `[/blog/${slug}, /blog]`).
6. Latência publish→live medida em ≤30s p95 em smoke manual.
7. Documentação `docs/guides/webhook-isr.md` cobre setup, debugging e troubleshooting.

#### Story 4.7 — Sitemap + OG Images

As a SEO-conscious owner,
I want sitemap.xml and basic OG images generated automatically,
so that the site is indexable and shareable.

**Acceptance Criteria**
1. `apps/site/src/pages/sitemap.xml.ts` gera sitemap a partir de queries Supabase (todos slugs published).
2. Rebuild do sitemap incluído no webhook revalidate path (`/sitemap.xml`).
3. Endpoint `apps/site/src/pages/api/og/[type]/[slug].tsx` gera OG image via `@vercel/og` ou Satori usando title + cover image se disponível.
4. `<head>` de cada page/post inclui meta `og:image` apontando para endpoint.
5. Image dimensions 1200x630.
6. Cache `Cache-Control: public, max-age=31536000, immutable` (URL inclui hash do conteúdo ou versão).

#### Story 4.8 — Smoke Checklist + Onboarding Doc

As a stakeholder,
I want a smoke checklist and editor onboarding doc,
so that we can verify each release and handoff to editorial team.

**Acceptance Criteria**
1. `docs/qa/smoke-checklist.md` cobre: login admin, create post draft, publish post, verify in <30s no site, schedule post for +5min, verify auto-promote, upload image, edit page, archive post, audit log entry visible.
2. `docs/guides/editor-onboarding.md` em PT-BR com screenshots, fluxo passo-a-passo para owner publicar primeiro post.
3. Tempo aferido em sessão real do owner: publica post novo em ≤10 min (NFR9 validation).
4. Documentos commitados.

---

## 7. Checklist Results Report

_Será populado após executar `pm-checklist` na fase de validação (@po na Phase 1.5)._

---

## 8. Next Steps

### 8.1 UX Expert Prompt

> @ux (Uma) — usando este PRD como input, gere `docs/front-end-spec.md` focado no `apps/admin`. Cobertura: information architecture (sidebar nav), wireframes das 8 telas core (login, dashboard, lists, editor, media library, users, audit), state design (loading/empty/error), responsive breakpoints (desktop-first 1280+), interaction patterns (auto-save, optimistic UI, modals), accessibility WCAG AA best-effort. Site público segue o design imutável em `/design` — não redesenhar; apenas referenciar como source-of-truth visual e definir como admin reusa tokens/components do `amandaalmeidda/olmeda-design-system`. Use template `front-end-spec-tmpl`.

### 8.2 Architect Prompt

> @architect (Aria) — usando este PRD + futuro `front-end-spec.md` como input, gere `docs/fullstack-architecture.md`. Decisões já travadas no PRD: monorepo Turborepo, Next.js 14 Pages Router, Supabase Postgres 17, Auth magic-link, RLS por role, TipTap WordPress-parity, Docker Swarm + Traefik + GHCR + GH Actions, webhook ISR, pnpm. Decisões pendentes a resolver com profundidade: (1) audit log retention policy ≥1y — particionamento? archive? (2) backup Supabase: PITR Pro vs. dump diário; (3) magic-link email transport: Supabase built-in vs. SMTP custom (SES/Resend) — deliverability/avaliação; (4) cron de scheduled→published — Supabase Edge Function, pg_cron, ou view computada; (5) image processing pipeline — Next.js API route vs. Edge Function vs. Supabase image transformation; (6) revalidate token rotation strategy; (7) zero-downtime migration approach quando schema mudar pós-launch. Use template `fullstack-architecture-tmpl`. Pode sugerir ajustes ao PRD se algo for inviável tecnicamente.

---

— Morgan, planejando o futuro 📊
