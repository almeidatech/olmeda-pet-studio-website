# Epic 3 — Admin App Foundation

**Goal:** Criar `apps/admin` como Next.js separado, implementar Supabase Auth magic-link, layout + role gating, e views read-only listando posts/pages/services. Ao final, owner faz login em `admin.olmedapetstudio.com` e visualiza todo conteúdo existente; ainda sem editar.

**Prerequisites:** Epic 2 completo. Site live em prod. DNS `admin.olmedapetstudio.com` resolvendo.

**Reference:** `docs/prd.md` §6 Epic 3.

---

## Story 3.1 — Admin App Skeleton

**As a** developer, **I want** `apps/admin` scaffolded as a separate Next.js app no monorepo, **so that** admin dev não interfere no site.

**Acceptance Criteria:**
1. `apps/admin/` criado com Next.js 14 Pages Router + TypeScript + design system import.
2. `apps/admin/package.json` declara `@olmeda/admin`, scripts standard, deps Supabase + `@olmeda/db-types` workspace.
3. `pnpm --filter @olmeda/admin dev` levanta na porta 3001.
4. Landing `/` mostra placeholder "Olmeda CMS — Login required" + link `/login`.
5. Layout base com sidebar fixa (Posts, Pages, Services, Media, Users) — só navegação.
6. CSS Modules + tokens do design system aplicados.
7. `pnpm --filter @olmeda/admin build` verde.

---

## Story 3.2 — Supabase Auth Magic-Link

**As an** owner, **I want** to log in via magic link sent to my email, **so that** I não preciso decorar senha.

**Acceptance Criteria:**
1. Rota `/login` aceita email, dispara `supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: 'https://admin.olmedapetstudio.com/auth/callback' } })`.
2. UI mostra "check your email" state após submit OK.
3. Rota `/auth/callback` processa PKCE token, seta cookies HttpOnly via `@supabase/ssr` e redireciona `/posts`.
4. Sessão persiste em cookies HttpOnly.
5. Middleware bloqueia rotas autenticadas (`/posts`, `/pages`, `/services`, `/media`, `/users`) se não logado → redirect `/login`.
6. `/logout` invalida sessão e redireciona `/login`.
7. Email magic-link via Supabase built-in transport (ADR-003); MVP usa default sender.
8. Erro email inválido / rate limit (>3 OTP/hour) exibe mensagem clara PT-BR.

**Architecture refs:** `docs/fullstack-architecture.md` §11.2, `docs/architecture/adrs.md#adr-003`.

---

## Story 3.3 — Role Gating + User Loading

**As an** admin, **I want** o app to load my role from `app_users` after auth, **so that** UI role-restricted funciona.

**Acceptance Criteria:**
1. Após login, hook `useCurrentUser()` busca row de `app_users` matching `auth.uid()`.
2. Se row não existe ou `active=false`, exibe "Access denied — contact owner" + forced logout.
3. Owner (Amanda) seeded via initial migration de Story 1.2 com `INSERT...ON CONFLICT (id) DO UPDATE` matching por email. Se `auth.users` ainda não existe (owner não logou nunca), seed é NO-OP; re-sync migration `00000000000003_owner_seed.sql` roda no próximo deploy/sync após primeiro magic-link. Documentado em `docs/guides/owner-bootstrap.md`.
4. Sidebar mostra/oculta link `/users` baseado em `role === 'admin'`.
5. Sidebar mostra/oculta `/audit` baseado em `role === 'admin'`.
6. Context Provider `<AuthContext>` disponibiliza `{ user, role, supabase, signOut }`.
7. Logout limpa context.

---

## Story 3.4 — Read-Only Lists (Posts/Pages/Services)

**As an** admin, **I want** to view paginated lists of posts/pages/services, **so that** I posso confirmar conteúdo existente.

**Acceptance Criteria:**
1. `/posts` lista posts com colunas: title, status badge, published_at, author, updated_at.
2. Paginação 50/page via query string `?page=N`.
3. Filtro por status (dropdown All/Draft/Scheduled/Published/Archived).
4. Busca por título (input + debounce 300ms → query ILIKE).
5. Click em row navega para `/posts/[id]` (readonly view).
6. `/posts/[id]` mostra title + body_html rendered + metadata.
7. Pattern replicado em `/pages` e `/services`.
8. Loading states (skeleton) e empty states (mensagem + CTA "Create" disabled — habilitado Epic 4).
9. RLS implícito via cliente authenticated com role admin — testar que viewer não vê drafts.

---

## Story 3.5 — Admin Deploy (Dockerfile + Stack + CI)

**As a** DevOps operator, **I want** `apps/admin` containerized e deployado como `apps/site`, **so that** admin URL works in prod.

**Acceptance Criteria:**
1. `apps/admin/Dockerfile` clonado de `apps/site` com ajustes (nome, port 3001, `sharp` deps via `apk add --no-cache vips`).
2. Workflow `deploy.yml` matrix `[site, admin]` cobrindo build + push de ambos.
3. Stack file `infra/swarm/olmeda.yaml` ganha service `admin` com Traefik labels para `Host(admin.olmedapetstudio.com)`.
4. ENV vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (admin only — NEVER no site).
5. Healthcheck `/api/health` no admin.
6. Deploy step roda `stack deploy` com ambos serviços.
7. `https://admin.olmedapetstudio.com/login` responde 200 em prod.
8. Owner consegue fazer login real em prod e ver listas.

**⚠️ Risk:** R2 — `sharp` precisa `vips` no alpine.
