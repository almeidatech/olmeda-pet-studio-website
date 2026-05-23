# Olmeda Pet Studio — Proposed Plan

Input for the formal `/greenfield` workflow. Not yet ratified.

## Goal

Ship the public site to production VPS and stand up a CMS that lets non-developers publish blog posts, services, and page content — without touching the repo.

## Architectural decisions (proposed, subject to /greenfield review)

| Concern | Decision | Why |
|---|---|---|
| Site framework | Keep Next.js 14 from current repo | Already chosen, design integration in progress |
| Backend | Supabase Cloud (existing project) | User decision, multi-feature (DB + Auth + Storage + Edge Functions) |
| Repo layout | Monorepo via Turborepo: `apps/site` + `apps/admin` + `packages/db-types` | Keeps single repo as "immutable source of truth"; admin separate so deploys don't churn the site |
| CMS UI | Custom Next.js admin app, not Strapi/Directus | Tighter integration with site design system; we already have Next stack |
| Editor | TipTap (rich text) + markdown export | Best DX/UX trade-off for blog content; matches modern "Notion-like" expectation |
| Auth | Supabase Auth (email + magic link) | Native, RLS-ready |
| Authorization | Postgres RLS + role enum (`admin`, `editor`, `viewer`) | Mirror Nicoletti pattern |
| Deploy unit | Docker images via GitHub Actions → GHCR → `docker stack deploy` on Swarm | Mirror aylas-site pattern, single source registry |
| Traefik | Reuse pattern from `aylas-site` | Already battle-tested on this Swarm |
| Migrations | Supabase Git integration (`supabase/migrations/*.sql` auto-apply on push) | User requested; eliminates manual `supabase db push` |
| ISR triggers | Postgres webhook (Supabase) → site `/api/revalidate` | Standard pattern; instant publish |

## Phases

### Phase 1 — Foundation (Supabase schema + project skeleton)

- `supabase init` → creates `supabase/` with `config.toml`, `migrations/`
- Write `supabase/migrations/00000000000001_init.sql`:
  - `app_users` (linked to `auth.users`, role enum)
  - `posts` (slug, title, excerpt, body_md, body_html, category, tags[], cover_image_id, status enum, published_at, author_id, created/updated)
  - `pages` (slug, title, body_md, body_html, meta, published_at)
  - `services` (slug, title, summary, body_md, price_tier, icon, order_index, published_at)
  - `media` (storage_path, alt, mime, size, uploaded_by, created_at)
  - `audit_log` (actor_id, action, entity_type, entity_id, diff, created_at)
  - RLS policies (public read for published, admin/editor write)
- Seed: migrate existing MDX mocks into `posts`/`pages`/`services` as drafts
- Push → verify auto-apply via Supabase Git integration

### Phase 2 — Site reads from Supabase

- Add `apps/site/src/lib/cms.ts` (Supabase JS client, server-only)
- Refactor `getStaticProps`/`getStaticPaths` in `pages/blog/[slug].tsx` etc. to read from Supabase
- Keep MDX fallback for local dev via env flag
- Wire `/api/revalidate` route (token-gated)

### Phase 3 — Admin app (`apps/admin`)

- Routes: `/login`, `/posts`, `/posts/[id]`, `/pages`, `/services`, `/media`, `/users`
- Components: TipTap editor, media picker, schedule picker, role gating HOC
- Server actions for CRUD using Supabase service role (inside `apps/admin` only — never bundled to site)
- Audit log on every write

### Phase 4 — CI/CD + Deploy

- Dockerfile multi-stage Next standalone for each app
- GH Actions: build matrix `[site, admin]` → push to GHCR `ghcr.io/olmedatech/olmeda-{site,admin}:latest` + `:{sha}`
- `infra/swarm/olmeda.yaml` stack file with both services, Traefik labels (pattern from `aylas-site`), `olmedaNet`
- Deploy step: SSH to VPS → `docker stack deploy -c olmeda.yaml olmeda`
- Domain: TBD (assume `olmedapetstudio.com` apex + `admin.olmedapetstudio.com`)

### Phase 5 — Webhook ISR + polish

- Supabase database webhook on `posts`/`pages`/`services` UPDATE/INSERT where `status = 'published'` → site `/api/revalidate?paths=...`
- Sitemap generation script reading Supabase
- robots.txt, OG image generation per post

## Out of scope (phase 1)

- AI-generated drafts
- pgvector RAG
- Multi-language (add later if needed)
- Form builder / lead capture (Chatwoot or n8n already on VPS — integrate later)
- Analytics dashboard (use Plausible or `events` table later)

## Risks & open items

- **Supabase Git integration not yet verified** — must confirm in dashboard before first push
- **Production domain undecided** — blocks Traefik labels + ACME cert provisioning
- **Design system repo private** — GH Actions build needs deploy token with read access to `amandaalmeidda/olmeda-design-system`
- **CMS editor scope creep risk** — TipTap can grow infinitely; cap phase 1 to "WordPress parity" (bold/italic/heading/link/image/code/list) and ship

## Next step

Run `/greenfield` in a clean session with this doc + `docs/discovery.md` as input.
