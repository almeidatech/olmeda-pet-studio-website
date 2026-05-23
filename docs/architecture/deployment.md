# Deployment

> Full spec in `docs/fullstack-architecture.md` §14. This is the operational shard.

## Topology

```
Browser → Cloudflare DNS (DNS-only) → Hetzner VPS (178.156.139.32)
                                       └─ Traefik v2.11 + LE
                                          ├─ olmeda_site:3000 (apps/site)
                                          └─ olmeda_admin:3001 (apps/admin)

apps → Supabase Cloud sa-east-1 (project gwgvhhymcsddyigutghm)
```

## Domains

| Domain                          | Service              |
| ------------------------------- | -------------------- |
| `olmedapetstudio.com`           | site (apex)          |
| `www.olmedapetstudio.com`       | site (301 → apex)    |
| `admin.olmedapetstudio.com`     | admin                |

## Environments

- **Production (only):** Hetzner VPS. No staging in MVP.
- **Local dev:** `pnpm dev` (site:3000, admin:3001) + `.env.local` apontando para Supabase Cloud OR `supabase start` local.

## ENV Vars per Service

### apps/site
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `REVALIDATE_TOKEN`
- `NEXT_PUBLIC_SITE_URL=https://olmedapetstudio.com`
- `GIT_SHA` (build-time)

### apps/admin
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`  ⚠️ ADMIN ONLY
- `NEXT_PUBLIC_SITE_URL=https://admin.olmedapetstudio.com`
- `GIT_SHA` (build-time)

Secrets injected via `/srv/olmeda/.env` (mode 0600) on VPS, referenced in `infra/swarm/olmeda.yaml` via `${VAR}` interpolation at `docker stack deploy` time.

## CI/CD Flow

```
push:master
  └─→ GH Actions
       ├─ build matrix [site, admin]
       │   ├─ docker buildx (cache from GHA)
       │   ├─ tag :latest + :${sha}
       │   └─ push GHCR ghcr.io/olmedatech/olmeda-{site,admin}
       └─ deploy (depends build)
           ├─ scp infra/swarm/olmeda.yaml → /srv/olmeda/
           ├─ ssh: docker login ghcr.io
           ├─ ssh: docker pull both images
           ├─ ssh: docker stack deploy -c olmeda.yaml olmeda --with-registry-auth --prune
           └─ smoke: curl /api/health on both hosts (fail workflow if 500/timeout)
```

## Rolling Update Strategy (in stack file)

```yaml
deploy:
  update_config:
    order: start-first
    parallelism: 1
    failure_action: rollback
  restart_policy:
    condition: any
    delay: 5s
    max_attempts: 3
```

## Healthcheck

- Both apps expose `GET /api/health` returning `{ status, commit, uptime_seconds, supabase_reachable }`.
- Traefik label `healthcheck.path=/api/health`, `interval=30s`.

## Secrets Required (GH Actions)

| Secret                       | Used in                                       |
| ---------------------------- | --------------------------------------------- |
| `GITHUB_TOKEN`               | GHCR push (automatic)                         |
| `GH_DESIGN_SYSTEM_TOKEN`     | Build-time `pnpm install` of private design system |
| `VPS_HOST`                   | SSH                                           |
| `VPS_USER`                   | SSH                                           |
| `VPS_SSH_KEY`                | SSH                                           |

Supabase secrets live on VPS in `/srv/olmeda/.env`, not in GitHub Actions (reduce surface area).

## Manual Operations Runbook

### First-time setup

```bash
# On VPS
mkdir -p /srv/olmeda
chmod 700 /srv/olmeda
cat > /srv/olmeda/.env <<EOF
SUPABASE_URL=https://gwgvhhymcsddyigutghm.supabase.co
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
REVALIDATE_TOKEN=$(openssl rand -hex 32)
EOF
chmod 600 /srv/olmeda/.env

# Ensure olmedaNet exists (probably already does)
docker network ls | grep olmedaNet || docker network create -d overlay --attachable olmedaNet
```

### Rollback

```bash
# Roll back to previous tag manually
ssh root@178.156.139.32
cd /srv/olmeda
docker pull ghcr.io/olmedatech/olmeda-site:${PREV_SHA}
docker pull ghcr.io/olmedatech/olmeda-admin:${PREV_SHA}
# Edit olmeda.yaml temporarily to point at :${PREV_SHA}, then:
docker stack deploy -c olmeda.yaml olmeda --with-registry-auth --prune
```

### Revalidate token rotation (ADR-006)

1. Generate new: `openssl rand -hex 32`.
2. Add to `/srv/olmeda/.env` as `REVALIDATE_TOKEN_PREVIOUS=<old>` and update `REVALIDATE_TOKEN=<new>`.
3. Deploy site (now accepts both).
4. Update Supabase Webhook config to send new token.
5. Wait 1 hour without hits on old; remove `REVALIDATE_TOKEN_PREVIOUS`; redeploy.

## Known Risks

- **R1:** Supabase Git integration ≠ `list_migrations`. Always verify schema via direct inspection.
- **R2:** `sharp` em Docker alpine precisa `apk add --no-cache vips`.
- **R3:** `CREATE INDEX CONCURRENTLY` incompatível com Supabase Git integration (transactional). Use dashboard for post-launch indexes.
- **R4:** Cloudflare DNS-only obrigatório para HTTP-01 ACME (no proxy).
- **R5:** pg_cron extension precisa estar habilitada (verificar dashboard antes de Story 4.2).
