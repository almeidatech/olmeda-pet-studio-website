# Tech Stack

> Source of truth. All technology choices below are binding for SDC stories.

| Category               | Technology                              | Version       | Purpose                                      |
| ---------------------- | --------------------------------------- | ------------- | -------------------------------------------- |
| Language               | TypeScript (strict)                     | 5.4+          | Both apps + scripts                          |
| Framework              | Next.js (Pages Router)                  | 14.x          | apps/site + apps/admin                       |
| Runtime                | Node.js                                 | 24.x          | Pinned in `engines`                          |
| Package Manager        | pnpm                                    | 10.x          | Monorepo workspaces                          |
| Build Tool             | Turborepo                               | 2.x           | Task orchestration + cache                   |
| UI Tokens              | `amandaalmeidda/olmeda-design-system`   | latest        | npm private; needs `GH_DESIGN_SYSTEM_TOKEN`  |
| State                  | React Context + SWR                     | 18 / 2.x      | Auth context + data fetching                 |
| Editor                 | TipTap                                  | 2.x           | starter-kit + link + image + code-block      |
| Database               | Postgres (Supabase managed)             | 17.6.1        | Project `gwgvhhymcsddyigutghm`, sa-east-1    |
| Auth                   | Supabase Auth (magic-link OTP)          | latest        | Admin only                                   |
| Storage                | Supabase Storage                        | latest        | Bucket `media` (public read)                 |
| Database Webhooks      | Supabase Webhooks                       | latest        | publish event → site /api/revalidate         |
| Cron                   | pg_cron                                 | extension     | `* * * * *` schedule promotion (ADR-004)     |
| Image Processing       | sharp                                   | 0.33+         | Resize + WEBP at upload time (ADR-005)       |
| Testing — Unit         | Vitest                                  | 1.x           | Functions + components                       |
| Testing — Integration  | Vitest + supabase local                 | 1.x           | DB-backed flows                              |
| Testing — E2E          | Manual smoke checklist                  | n/a           | Playwright Phase 2                           |
| Linting                | ESLint + Prettier + jsx-a11y            | latest        | Strict; CI gate                              |
| Container              | Docker (alpine + vips for sharp)        | 29.x          | Multi-stage, standalone Next                 |
| Orchestrator           | Docker Swarm (1-node)                   | n/a           | Stack file in `infra/swarm/olmeda.yaml`      |
| Reverse Proxy          | Traefik                                 | v2.11         | Existing VPS install                         |
| TLS                    | Let's Encrypt                           | n/a           | Via Traefik `letsencryptresolver`            |
| Registry               | GitHub Container Registry               | n/a           | `ghcr.io/olmedatech/*`                       |
| CI/CD                  | GitHub Actions                          | n/a           | Build matrix [site, admin] + SSH deploy      |
| DNS                    | Cloudflare (DNS-only / grey cloud)      | n/a           | Mandatory for HTTP-01 ACME                   |

## What's NOT in the stack (deliberate)

- ❌ Tailwind (using design system + CSS Modules)
- ❌ Redux/Zustand (Context + SWR enough)
- ❌ GraphQL (REST via Supabase SDK)
- ❌ Playwright (manual smoke MVP, add Phase 2)
- ❌ Sentry / observability stack (Phase 2)
- ❌ Tailwind / shadcn-ui (Phase 2 candidate)
- ❌ App Router (Pages Router for migration continuity)
- ❌ Vercel / Netlify (using Hetzner + Swarm)
- ❌ Railway (using Hetzner; Railway CLI skipped in bootstrap)
- ❌ Redis (no caching layer; Next ISR + browser HTTP cache)
- ❌ Terraform / Pulumi (just Docker Swarm stack file)
