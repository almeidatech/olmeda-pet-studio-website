# Olmeda Pet Studio — Discovery (2026-05-23)

Status snapshot taken during initial session. Frozen in time — re-verify before acting.

## Repo state

- **Origin**: `github.com/almeidatech/olmeda-pet-studio-website` (cloned into `d:/projects/olmeda-petstudio/`)
- **Stack**: Next.js 14, React 18, TypeScript, MDX (`@next/mdx`, `next-mdx-remote`, `gray-matter`)
- **Design system**: external repo `github:amandaalmeidda/olmeda-design-system#master` consumed via npm dependency
- **Source of truth**: `/design` directory (HTML/CSS) — immutable per project rules
- **Implementation status**: HTML→Next.js migration in progress per `MIGRATION_PLAN.md` (all pages TODO)
- **Content**: `/src/content/{blog,pages,services}` MDX files are **mocks only**; real content will come from the CMS via Supabase
- **CI**: single workflow `.github/workflows/deploy-design.yml` publishes `/design` to GitHub Pages on push to `master`
- **No `supabase/` directory yet** — needs `supabase init` + `migrations/` folder for Git↔Supabase auto-apply

## Supabase project

- **Ref**: `gwgvhhymcsddyigutghm`
- **Org**: `hcwguniuicvoxjmhtzdu`
- **Name**: olmeda-pet-studio-website
- **Region**: `sa-east-1`
- **DB**: Postgres 17.6.1
- **Status**: ACTIVE_HEALTHY, **0 tables, 0 migrations** (clean slate, created 2026-05-23)
- **Git integration**: user confirms repo↔project is linked; pushing `supabase/migrations/*.sql` to default branch auto-applies. **Needs verification in Supabase dashboard before relying on it.**
- **Keys in `.env`**: SUPABASE_URL, ANON_KEY, SERVICE_ROLE_KEY, PUBLISHABLE_KEY, password

## VPS (production)

- **Host**: 178.156.139.32 (Hetzner), `debian-dedicated`, Debian 13, kernel 6.12
- **SSH**: `root@178.156.139.32:22`, ed25519 key in `.env` (VPS_SSH_KEY)
- **Orchestrator**: Docker 29.2.1, Docker Swarm 1-node leader
- **Reverse proxy**: Traefik v2.11.2 with Let's Encrypt (email `contato@olmedatech.com`)
- **Shared overlay network**: `olmedaNet` (must be attached for Traefik discovery)
- **Image registries**:
  - GHCR: `ghcr.io/olmedatech/*` (used by `mundodecici`), `ghcr.io/almeidatech/*` (used by `aylas-site`)
  - Local `private-registry:2` available
- **Running stacks**: aylas-chat, aylas-site, chatwoot (4 svcs), minio, mundodecici, n8n (4 svcs), portainer, postgres (pgvector pg16), redis, traefik
- **Existing Postgres on VPS**: `pgvector/pgvector:pg16` available locally — NOT used for Olmeda (Supabase Cloud is the backend)

### Traefik label pattern (from `aylas-site_aylas-site` service)

```yaml
labels:
  - traefik.enable=true
  - traefik.docker.network=olmedaNet
  - traefik.http.routers.<name>-http.entrypoints=web
  - traefik.http.routers.<name>-http.rule=Host(`apex.tld`) || Host(`www.apex.tld`)
  - traefik.http.routers.<name>-https.entrypoints=websecure
  - traefik.http.routers.<name>-https.rule=Host(`apex.tld`) || Host(`www.apex.tld`)
  - traefik.http.routers.<name>-https.tls=true
  - traefik.http.routers.<name>-https.tls.certresolver=letsencryptresolver
  - traefik.http.routers.<name>-https.middlewares=<name>-www-redirect
  - traefik.http.middlewares.<name>-www-redirect.redirectregex.regex=^https://www\.apex\.tld/(.*)
  - traefik.http.middlewares.<name>-www-redirect.redirectregex.replacement=https://apex.tld/${1}
  - traefik.http.middlewares.<name>-www-redirect.redirectregex.permanent=true
  - traefik.http.services.<name>-service.loadbalancer.server.port=80
  - traefik.http.services.<name>-service.loadbalancer.healthcheck.path=/health
  - traefik.http.services.<name>-service.loadbalancer.healthcheck.interval=30s
```

Production domain for Olmeda: **TBD** (not yet decided).

## CMS reference (Gruppo Nicoletti pattern, from `nicoletti-cigars`)

Patterns to adopt:

- Supabase + RLS as authorization layer
- i18n via JSONB columns `{ "pt": "...", "en": "..." }`
- Webhook-driven ISR: publish → POST `/api/revalidate` → Next.js on-demand revalidation
- Scheduled publishing via `published_at TIMESTAMPTZ` field
- Role-based access: `admin` / `editor` / `viewer`
- pgvector embeddings for AI (`ai.knowledge_base`) — optional for Olmeda phase 1
- Media via Supabase Storage with CDN

Patterns to **NOT adopt** (specific to Nicoletti):

- Multi-tenant `tenant_id` everywhere — Olmeda is single brand
- Two-repo split (storefront + Grupo CMS) — Olmeda will live in one repo

Key files in nicoletti-cigars worth referencing:

- `docs/architecture/technical/adrs.md` — especially ADR-011 (CMS strategy)
- `docs/architecture/technical/data-model.md` — Supabase schema patterns
- `docs/product/epics/epics.md` — EPIC-005 (CMS & AI content pipeline)

## Open questions

1. **Production domain**? e.g., `olmedapetstudio.com`, `.com.br`?
2. **CMS placement**: single-repo monorepo (`apps/site` + `apps/admin`) vs. `/admin` route inside the site app? Decision recorded: **separate app in same Supabase**, but repo layout TBD.
3. **Editor choice**: TipTap, Lexical, Plate, or plain markdown textarea?
4. **i18n needed for Olmeda?** Site appears English-only in design. Confirm before adding JSONB locale layer.
5. **Auth provider for admin users**: Supabase Auth (email/password, magic link, or OAuth)?
6. **AI features in scope for phase 1**? (Auto-generated drafts, SEO suggestions, etc.)
