# Epic 2 — Production Deployment Pipeline

**Goal:** Containerizar `apps/site`, automatizar build+push+deploy via GitHub Actions, configurar Docker Swarm stack com Traefik (pattern de `aylas-site`), apontar DNS Cloudflare e levantar HTTPS Let's Encrypt. Ao final, push em `master` deploya automaticamente e `https://olmedapetstudio.com` está no ar com conteúdo real do Supabase.

**Prerequisites:** Epic 1 completo. Site renderizando localmente do Supabase.

**Reference:** `docs/prd.md` §6 Epic 2.

---

## Story 2.1 — Dockerfile Multi-Stage Site

**As a** developer, **I want** a multi-stage Dockerfile that produces a minimal Next.js standalone image for `apps/site`, **so that** deployments are fast and the image is small.

**Acceptance Criteria:**
1. `apps/site/Dockerfile` com stages `deps`, `builder`, `runner`.
2. Build flag `output: 'standalone'` no `next.config.js` ativo.
3. Imagem final inclui apenas `.next/standalone`, `.next/static`, `public/`, `node_modules` essenciais.
4. Healthcheck `/api/health` exposto retornando `{ status: 'ok', commit: process.env.GIT_SHA, supabase_reachable: bool }`.
5. Tamanho da imagem ≤ 250MB.
6. `docker build -t olmeda-site:test apps/site` localmente funciona.
7. Container roda com `docker run -p 3000:3000` e responde a `/` + `/api/health`.
8. ENV vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `REVALIDATE_TOKEN`, `GIT_SHA`, `NEXT_PUBLIC_SITE_URL`.

**Architecture refs:** `docs/architecture/deployment.md`.

---

## Story 2.2 — GitHub Actions Build & Push

**As a** developer, **I want** a workflow that builds the Docker image on push to master and pushes it to GHCR, **so that** we have versioned, immutable artifacts.

**Acceptance Criteria:**
1. `.github/workflows/deploy.yml` criado com trigger `push:master` + `workflow_dispatch`.
2. Job `build` matrix `[site]` (admin adicionado em Story 3.5).
3. Imagem em `ghcr.io/olmedatech/olmeda-site` com tags `latest` + `${{ github.sha }}`.
4. Cache de Docker layers via `cache-from: type=gha`.
5. Secret `GH_DESIGN_SYSTEM_TOKEN` injetado em build args para `pnpm install` acessar repo privado.
6. Build verde em <8 min cold, <4 min com cache.
7. Documentação em `docs/guides/ci-cd.md`.

**Architecture refs:** `docs/fullstack-architecture.md` §14.2.

---

## Story 2.3 — Docker Swarm Stack + Traefik Labels

**As a** DevOps operator, **I want** a stack file `infra/swarm/olmeda.yaml` defining the site service com Traefik labels, **so that** I can `docker stack deploy` to bring it up.

**Acceptance Criteria:**
1. `infra/swarm/olmeda.yaml` define service `site` consumindo `ghcr.io/olmedatech/olmeda-site:latest`.
2. Service na network external `olmedaNet`.
3. Traefik labels: HTTP→HTTPS redirect, HTTPS com `letsencryptresolver`, middleware www→apex redirect, healthcheck path `/api/health`.
4. Rules cobrem `Host(olmedapetstudio.com)` e `Host(www.olmedapetstudio.com)`.
5. Service usa `loadbalancer.server.port=3000`.
6. ENV vars Supabase + `REVALIDATE_TOKEN` via env file `/srv/olmeda/.env` (mode 0600).
7. Stack file commitado em `infra/swarm/`.
8. Documentação em `docs/guides/deploy.md`.

**Architecture refs:** `docs/fullstack-architecture.md` §14.3.

---

## Story 2.4 — GitHub Actions Deploy Step

**As a** developer, **I want** the CI workflow to SSH into the VPS and run `docker stack deploy` after image push, **so that** deploy é totalmente automatizado.

**Acceptance Criteria:**
1. Job `deploy` no `deploy.yml` depende de `build`.
2. Usa `appleboy/ssh-action` com secrets `VPS_HOST=178.156.139.32`, `VPS_USER=root`, `VPS_SSH_KEY`.
3. SCP do stack file pra `/srv/olmeda/olmeda.yaml`.
4. SSH executa: `docker login ghcr.io` + `docker pull` + `docker stack deploy -c olmeda.yaml olmeda --with-registry-auth --prune`.
5. Rolling update strategy no compose (`update_config: order: start-first, parallelism: 1, failure_action: rollback`).
6. Post-deploy smoke: `curl -fsS https://olmedapetstudio.com/api/health` falha workflow se 500/timeout.
7. `concurrency: { group: deploy, cancel-in-progress: false }` para evitar deploys paralelos.

---

## Story 2.5 — DNS + TLS Cutover

**As a** DevOps operator, **I want** DNS records pointing to VPS e TLS certificates issued, **so that** `https://olmedapetstudio.com` está reachable publicamente.

**Acceptance Criteria:**
1. A records Cloudflare (DNS-only/grey cloud): `olmedapetstudio.com`, `www.olmedapetstudio.com`, `admin.olmedapetstudio.com` → `178.156.139.32`.
2. Traefik resolve as rules e obtém certs Let's Encrypt para os 3 hostnames.
3. `https://olmedapetstudio.com` retorna 200 e renderiza home com conteúdo seeded.
4. `https://www.olmedapetstudio.com` redireciona 301 para apex.
5. `http://olmedapetstudio.com` redireciona 301 para HTTPS.
6. SSL Labs grade A ou superior.
7. `admin.olmedapetstudio.com` resolve mas retorna 404/placeholder (admin não existe ainda — corrigido em Epic 3).
8. TTFB ≤ 200ms medido de SP via curl.

**⚠️ Risk:** Cloudflare DNS-only mandatório para HTTP-01 ACME. Se proxy (orange) for ligado antes de cert provisionar, falha silenciosa (R4 em po-validation).
