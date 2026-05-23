# Security

> Detalhamento de `docs/fullstack-architecture.md` §15.1.

## Threat Model (high-level)

| Threat                                | Mitigation                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------- |
| Leak de service-role key              | Bundled SOMENTE em `apps/admin`; runtime check no startup; lint rule (P2)  |
| Bypass de RLS via SQL injection       | Supabase SDK parametriza; never construct raw SQL com user input            |
| Webhook spoofing (`/api/revalidate`)  | Constant-time token compare; HMAC + nonce em Phase 2                       |
| XSS via TipTap-rendered HTML          | TipTap sanitiza output; `body_html` escapado quando renderizado            |
| Unauthorized admin access             | Magic-link OTP + `app_users.active` check + RLS                            |
| Brute-force magic-link request        | Supabase Auth rate limit built-in (3/h/email)                              |
| Upload de payload malicioso           | Sharp re-encoda (strip metadata + EXIF); MIME whitelist; size limit 5MB    |
| Secrets em git                        | `.gitignore` strict; `pre-commit` hook scan (Phase 2)                      |
| MITM                                  | HTTPS obrigatório; HSTS via Traefik middleware                              |

## RLS Strategy

- **Default deny.** Toda tabela tem RLS habilitado.
- **Anon (public site):** SELECT only em `posts/pages/services` WHERE `status='published' AND published_at<=now()`. SELECT em `media` (public bucket).
- **Authenticated (admin/editor):** full CRUD em content tables via `current_user_can_write()`.
- **Admin only:** CRUD em `app_users`; SELECT em `audit_log`.
- **Audit log writes:** via SECURITY DEFINER trigger; impossível bypass via app.

## Auth

- **Magic-link OTP** via Supabase Auth.
- Sessão em cookies HttpOnly + Secure + SameSite=Lax.
- Token PKCE flow.
- Session refresh handled by `@supabase/ssr`.
- Default session duration: 7 dias.
- Logout invalida server-side.

## Secrets Management

| Secret                     | Local        | CI                | Production VPS              |
| -------------------------- | ------------ | ----------------- | --------------------------- |
| `SUPABASE_ANON_KEY`        | `.env.local` | GH secret         | `/srv/olmeda/.env`          |
| `SUPABASE_SERVICE_ROLE_KEY`| `.env.local` | Not in GH         | `/srv/olmeda/.env` (0600)   |
| `REVALIDATE_TOKEN`         | `.env.local` | GH secret (opt)   | `/srv/olmeda/.env`          |
| `GH_DESIGN_SYSTEM_TOKEN`   | `.env.local` | GH secret (build) | n/a (build-time only)       |
| `VPS_SSH_KEY`              | not local    | GH secret         | n/a                         |

## CSP Header (both apps)

```
default-src 'self';
img-src 'self' https://*.supabase.co data:;
script-src 'self' 'unsafe-inline';   # Next.js inline scripts; revisit Phase 2 with nonce
style-src 'self' 'unsafe-inline';
connect-src 'self' https://*.supabase.co;
font-src 'self' data:;
frame-ancestors 'none';
form-action 'self';
base-uri 'self';
```

## HSTS

Aplicado via Traefik middleware:
```
traefik.http.middlewares.olmeda-hsts.headers.stsSeconds=31536000
traefik.http.middlewares.olmeda-hsts.headers.stsIncludeSubdomains=true
traefik.http.middlewares.olmeda-hsts.headers.stsPreload=true
```

## Dependency Hygiene

- `pnpm audit` no CI (fail em HIGH+).
- Dependabot weekly.
- `pnpm dedupe` mensal.

## Audit & Compliance

- Audit trail completo (`audit_log`) com 13 meses retention.
- LGPD: dados pessoais limitados a `app_users` (email + name); deleção via owner action.
- Backup strategy garante recovery (ADR-002).

## Incident Response Runbook (skeleton — Phase 2 detalhar)

- Suspected key leak → rotate keys via Supabase Dashboard → redeploy → review audit_log.
- DDoS / abuse → ativar Cloudflare proxy (orange cloud) temporariamente; cert já existente.
- Data corruption → restore from latest backup (ADR-002).
