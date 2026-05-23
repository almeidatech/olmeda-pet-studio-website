# Project Brief: Olmeda Pet Studio Website + CMS

**Status:** Draft (Phase 1.1 — Analyst output)
**Date:** 2026-05-23
**Author:** @analyst (Atlas) — consolidated from `docs/discovery.md` + `docs/proposed-plan.md`
**Mode:** YOLO draft for review

---

## Executive Summary

Olmeda Pet Studio é um negócio de serviços para pets que precisa de uma presença web profissional (`olmedapetstudio.com`) e de uma plataforma de conteúdo gerenciável por não-desenvolvedores. O projeto entrega dois artefatos: (1) **publicar em produção** o site Next.js já em construção (substituindo conteúdo MDX mockado por dados reais) e (2) **construir um CMS dedicado** (`admin.olmedapetstudio.com`) que permita ao time editorial publicar posts, páginas e serviços sem tocar no repositório.

**Mercado alvo:** clientes finais que buscam serviços de pet (público site) + equipe interna não-técnica de marketing/conteúdo (usuários CMS).

**Proposta de valor:** site rápido e bem-desenhado integrado a um CMS sob medida (não-genérico), com ciclo publish→live de segundos via ISR, hospedado em infraestrutura própria (Hetzner VPS + Docker Swarm + Traefik) já compartilhada por outros projetos da casa.

---

## Problem Statement

**Estado atual:**
- Site existe em `github.com/almeidatech/olmeda-pet-studio-website` (Next.js 14, React 18, TypeScript, MDX) — migração HTML→Next.js em curso conforme `MIGRATION_PLAN.md`, com todas as páginas em estado TODO.
- Conteúdo atual em `/src/content/{blog,pages,services}` são **mocks MDX** — não-editáveis por não-devs e não refletem o conteúdo real do negócio.
- Sem ambiente de produção: nenhum deploy ativo no VPS.
- Sem backend de conteúdo: Supabase project criado e validado (`gwgvhhymcsddyigutghm`, sa-east-1) mas sem tabelas de aplicação.
- Sem domínio configurado para o site (DNS Cloudflare existe; A records pendentes).

**Impacto:**
- Negócio sem presença web profissional ativa.
- Time editorial bloqueado por dependência de desenvolvedor para qualquer alteração de conteúdo.
- Crescimento de blog/SEO inviável no modelo MDX-em-repo.

**Por que soluções existentes não bastam:**
- WordPress: heavyweight, segurança/manutenção contínua, fora do stack do time.
- Strapi/Directus genéricos: integração frouxa com o design system próprio, UX admin não otimizada para o caso de uso pequeno-mas-customizado.
- Permanecer com MDX-em-repo: impossível para usuários não-técnicos publicarem.

**Urgência:** discovery completa, Supabase project ativo, infra de produção (VPS + Traefik + GHCR + Supabase Git integration) já validada. Janela aberta para entrega rápida.

---

## Proposed Solution

**Abordagem central:**

Dois apps Next.js dedicados, compartilhando o mesmo Supabase Cloud project, em monorepo Turborepo (`apps/site` + `apps/admin` + `packages/db-types`). Site público consome conteúdo via Supabase JS server-only; admin app autentica via Supabase Auth + RLS e usa service-role internamente. Pipeline de publicação acionada por Postgres webhook → `/api/revalidate` no site (ISR on-demand).

**Diferenciadores:**
- **CMS sob medida** para o design system Olmeda — sem fricção visual.
- **Infra própria reutilizada** — Hetzner VPS + Docker Swarm + Traefik + GHCR já hospedam `aylas-site` e `mundodecici`; padrões battle-tested e custo marginal próximo de zero.
- **Migrations Git-driven** — Supabase Git integration aplica `supabase/migrations/*.sql` automaticamente em ~20s no push, eliminando `supabase db push` manual.
- **Pattern de referência interno** — `nicoletti-cigars` já validou: Supabase+RLS, webhook ISR, role-based access, scheduled publishing.

**Visão alto-nível:**
Site rápido (Next.js standalone, ISR), CMS minimalista mas completo (TipTap WordPress-parity), deploy automatizado via GitHub Actions, publish→live em segundos.

---

## Target Users

### Primary User Segment: Editor de Conteúdo Olmeda (não-técnico)

- **Perfil:** equipe interna de marketing/conteúdo, sem habilidades de Git/Markdown avançado.
- **Comportamento atual:** escreve em Word/Google Docs e pede para o dev publicar.
- **Necessidades:** editor visual (bold/italic/heading/link/image/code/list — "WordPress parity"), preview, scheduled publish, gerenciamento de mídia, sem ter que aprender markdown.
- **Objetivos:** publicar 1+ post/semana de forma autônoma, atualizar páginas estáticas (Sobre, Serviços), agendar campanhas.

### Secondary User Segment: Visitante do site público

- **Perfil:** dono(a) de pet em SP/região, buscando serviços (banho, tosa, hospedagem etc.).
- **Comportamento atual:** Google/Instagram → landing page → WhatsApp.
- **Necessidades:** carregamento rápido (LCP < 2.5s), informações claras de serviço, conteúdo de blog útil para SEO, formulário/WhatsApp de contato.
- **Objetivos:** entender serviços oferecidos e iniciar contato.

### Tertiary: Admin/Owner

- **Perfil:** Amanda Almeida (dona) — `amandaalmeidda` no GitHub é o upstream do repo.
- **Necessidades:** gerenciar usuários do admin, auditar mudanças (audit log), aprovar conteúdo se necessário.

---

## Goals & Success Metrics

### Business Objectives

- Site `olmedapetstudio.com` em produção (HTTPS, certs Let's Encrypt) até final de Phase 4 (CI/CD).
- Time editorial 100% autônomo para publish em até 2 semanas após go-live do admin.
- Zero dependência de dev para conteúdo após handoff.

### User Success Metrics

- Editor consegue publicar um post novo sem assistência em <10 min.
- Mudança publicada aparece no site em <30s (webhook + ISR).
- Site Lighthouse Performance ≥ 90 em mobile.

### Key Performance Indicators (KPIs)

- **TTFB site público:** < 200ms (servido do VPS, sem proxy CDN extra inicial).
- **Time-to-publish:** push do CMS → live na URL pública em < 30s.
- **Uptime CMS:** ≥ 99.5% (Traefik + Swarm 1-node — limitação aceita pra MVP).
- **Migration safety:** zero downtime do site durante migrations aplicadas via Supabase Git integration.

---

## MVP Scope

### Core Features (Must Have)

- **Migração do site Next.js para consumir Supabase:** substituir leitura de MDX em `/src/content` por queries Supabase JS server-side em `getStaticProps` / `getStaticPaths`; manter fallback MDX em dev via env flag.
- **Schema Supabase inicial:** `app_users` (vinculado a `auth.users` + role enum), `posts`, `pages`, `services`, `media`, `audit_log`, com RLS (read público para `status='published'`, write para admin/editor).
- **Seed:** migrar mocks MDX existentes em `/src/content/{blog,pages,services}` para `posts`/`pages`/`services` como drafts.
- **Admin app (`apps/admin`):** rotas `/login`, `/posts`, `/posts/[id]`, `/pages`, `/services`, `/media`, `/users`; editor TipTap (WordPress parity), media picker, schedule picker, role gating.
- **Auth:** Supabase Auth (email + magic link), RLS + role enum `admin` / `editor` / `viewer`.
- **CI/CD:** Dockerfile multi-stage Next standalone por app; GH Actions matrix `[site, admin]` → push GHCR (`ghcr.io/olmedatech/olmeda-{site,admin}`); deploy SSH → `docker stack deploy`.
- **Infra Swarm:** stack file `infra/swarm/olmeda.yaml` com ambos serviços, labels Traefik (pattern de `aylas-site`), rede `olmedaNet`.
- **Webhook ISR:** Supabase database webhook em UPDATE/INSERT `where status='published'` → site `/api/revalidate?paths=...` (token-gated).
- **Audit log:** registro de toda escrita no CMS (actor, action, entity_type, entity_id, diff).
- **DNS + TLS:** A records `olmedapetstudio.com` + `www` + `admin` → `178.156.139.32`; Cloudflare DNS-only (grey cloud) para HTTP-01 ACME; cert Let's Encrypt via Traefik existente.

### Out of Scope for MVP

- AI-generated drafts / SEO suggestions
- pgvector RAG
- Multi-language / i18n JSONB (confirmar com stakeholder se site é EN-only ou PT-only)
- Form builder / lead capture (delegar a Chatwoot ou n8n já no VPS)
- Analytics dashboard (recomendar Plausible externamente; tabela `events` fica para depois)
- Comments
- Newsletter / email broadcasts
- Multi-tenant (Olmeda é single brand)

### MVP Success Criteria

Editor publica um blog post novo via admin, post aparece na URL pública `olmedapetstudio.com/blog/[slug]` em <30s, sem intervenção de dev. Site responde 200 em HTTPS via Traefik. Pelo menos 3 posts e 5 páginas (home, sobre, serviços, blog index, contato) seeded e renderizando do Supabase.

---

## Post-MVP Vision

### Phase 2 Features

- AI auxiliar de redação (rascunhos sugeridos, melhoria de headlines) — pode usar Anthropic API ou OpenAI; pgvector se for grounded em conteúdo próprio.
- Form builder + lead capture integrado com Chatwoot ou n8n.
- Analytics nativo (`events` table) + dashboard simples no admin.
- Comments via solução self-hosted (Cusdis/Remark42) ou Disqus.

### Long-term Vision

CMS Olmeda como **template reutilizável** para outros sites do mesmo time (mundodecici, etc.). Extrair `apps/admin` para package interno após Olmeda comprovar maturidade.

### Expansion Opportunities

- E-commerce leve (agendamento de serviços, gift cards) via Supabase + Stripe.
- App mobile cliente (React Native) consumindo mesmo Supabase.
- Multi-brand caso Olmeda expanda para franquias (mas evitar prematuro).

---

## Technical Considerations

### Platform Requirements

- **Target Platforms:** Web (site público) responsivo; admin desktop-first (uso interno).
- **Browser/OS Support:** Evergreen browsers (últimas 2 versões Chrome/Edge/Safari/Firefox); mobile Safari/Chrome para site público.
- **Performance Requirements:** Site Lighthouse Performance ≥ 90 mobile; LCP < 2.5s; admin ≤ 3s TTI.

### Technology Preferences

- **Frontend:** Next.js 14 (App Router pendente decisão — atual é Pages Router) + React 18 + TypeScript + design system externo (`amandaalmeidda/olmeda-design-system`).
- **Backend:** Supabase Cloud (Postgres 17, Auth, Storage, Edge Functions) — projeto ativo `gwgvhhymcsddyigutghm` (sa-east-1).
- **Editor:** TipTap (rich text) + export markdown — escopo WordPress-parity.
- **Database:** Postgres 17 (Supabase). Migrations versionadas em `supabase/migrations/*.sql`, auto-aplicadas via Supabase Git integration.
- **Hosting/Infrastructure:** Hetzner VPS (`178.156.139.32`, Debian 13) + Docker Swarm 1-node + Traefik v2.11 + Let's Encrypt; GHCR (`ghcr.io/olmedatech/*`) como registry; GitHub Actions para CI/CD.

### Architecture Considerations

- **Repository Structure:** Monorepo Turborepo — `apps/site`, `apps/admin`, `packages/db-types` (Supabase generated types compartilhados). Mantém repo único como "immutable source of truth".
- **Service Architecture:** Dois serviços Docker independentes em mesma stack Swarm, atrás do mesmo Traefik, em `olmedaNet`. Sem comunicação direta entre apps — ambos vão direto ao Supabase.
- **Integration Requirements:** Supabase Git integration (DDL auto-apply), Postgres webhook → site `/api/revalidate`, Cloudflare DNS (DNS-only inicial para ACME).
- **Security/Compliance:** Service-role key SOMENTE no `apps/admin` (nunca bundled no site); RLS estrita; audit log; secrets via `.env` + GitHub Actions secrets; HTTPS obrigatório.

---

## Constraints & Assumptions

### Constraints

- **Budget:** custo marginal próximo de zero (VPS já existe, Supabase free/Pro tier compartilhado, GHCR free).
- **Timeline:** sem deadline rígido declarado; meta implícita: site em produção + CMS utilizável em poucas semanas de trabalho focado.
- **Resources:** 1 dev (usuário + Claude). Editorial team a definir.
- **Technical:** Swarm 1-node (sem HA verdadeira); Supabase free/Pro tier limita conexões; design system em repo privado (precisa deploy token).

### Key Assumptions

- Supabase Git integration permanece estável (já validado end-to-end em 2026-05-23 — gotcha conhecido: `supabase_migrations.schema_migrations` não é populado, verificar via schema inspection).
- Pattern Traefik + Swarm + GHCR de `aylas-site` é replicável sem modificação substancial.
- Editor TipTap atende "WordPress parity" sem extensões customizadas pesadas no MVP.
- Time editorial existe e está disponível para treinamento pós-go-live.
- Site é EN-only OU PT-only (a confirmar) — sem necessidade de i18n JSONB no MVP.

---

## Risks & Open Questions

### Key Risks

- **Supabase Git integration silent-fail:** integration aplica DDL mas não atualiza `schema_migrations`, então `list_migrations` retorna vazio. **Impacto:** debug confuso; mitigação: verificar via direct schema inspection após cada push.
- **Scope creep do editor CMS:** TipTap pode crescer infinitamente (tables, embeds, custom blocks). **Impacto:** atraso de MVP; mitigação: cap rígido em WordPress parity (bold/italic/heading/link/image/code/list) na Phase 1.
- **Design system repo privado:** GH Actions build precisa deploy token com read em `amandaalmeidda/olmeda-design-system`. **Impacto:** CI quebra sem token; mitigação: setup token + secret antes de Phase 4.
- **Single-node Swarm:** sem HA real; se VPS cair, site cai. **Impacto:** uptime ≤ 99.5%; aceito para MVP, revisitar se necessário.
- **Naming inconsistency:** folder `olmeda-petstudio`, repo `olmeda-pet-studio-website`, package `olmeda-website`. **Impacto:** confusão em scripts/docs; mitigação: documentar em README e `.aiox/config.yaml`; padronizar opcionalmente em refactor monorepo.

### Resolved Decisions (Phase 1.1 elicitation, 2026-05-23)

- ✅ **Monorepo Turborepo** — `apps/site` + `apps/admin` + `packages/db-types`. Refactor do repo atual.
- ✅ **i18n:** EN-only no MVP. Sem JSONB locale; adicionar depois se necessário.
- ✅ **Editor:** TipTap com escopo WordPress-parity rígido (bold/italic/heading/link/image/code/list).
- ✅ **Auth:** Supabase Auth magic-link only. Sem senha/reset flow.
- ✅ **AI no MVP:** Não. Phase 2.
- ✅ **Editores iniciais:** apenas Amanda Almeida (owner). Demais contas via onboarding posterior.

### Open Questions (ainda pendentes)

- Audit log retention policy? (forever / 90d / 1y) — defer para @architect na Phase 1.4.
- Backup strategy do Supabase? (PITR Pro vs. dumps periódicos) — defer para @architect.
- Email do magic link sai do Supabase (sandboxed) ou via SMTP customizado/SES? — defer para @architect/@devops.
- Domain do magic link (`admin.olmedapetstudio.com`) precisa configurar antes do primeiro login.

### Areas Needing Further Research

- TipTap WordPress-parity preset — existe template community ou precisa montar do zero?
- Supabase webhook → Next.js `/api/revalidate` payload format e auth pattern (token vs. signature).
- Pattern de role-gated routes no Next.js Pages Router (vs. App Router middleware).
- Lighthouse benchmark do site atual com mocks MDX como baseline.

---

## Appendices

### A. Research Summary

**Insumos consumidos:**
- `docs/discovery.md` (snapshot 2026-05-23) — repo state, Supabase project ativo, VPS state, Traefik pattern de `aylas-site`, CMS reference de `nicoletti-cigars`.
- `docs/proposed-plan.md` — decisões arquiteturais propostas + 5 fases + out-of-scope + riscos.
- Memory AIOX do projeto — confirma "CMS é app separado em mesmo Supabase, não rota embutida".

**Patterns reutilizados (de `nicoletti-cigars`):**
- Supabase + RLS como camada de authz
- Webhook-driven ISR
- Scheduled publishing via `published_at TIMESTAMPTZ`
- Roles `admin` / `editor` / `viewer`

**Patterns descartados (específicos de Nicoletti):**
- Multi-tenant `tenant_id`
- Two-repo split storefront + CMS

### B. Stakeholder Input

Pendente — alinhamento direto com Amanda Almeida (owner) sobre: editores iniciais, AI features, backup strategy, i18n.

### C. References

- Repo: https://github.com/almeidatech/olmeda-pet-studio-website
- Supabase project: `gwgvhhymcsddyigutghm` (sa-east-1)
- VPS: `root@178.156.139.32` (Hetzner, Debian 13, Docker Swarm 1-node)
- Production domain: `olmedapetstudio.com` (Cloudflare DNS)
- Reference projects: `aylas-site` (Traefik pattern), `mundodecici` (GHCR pattern), `nicoletti-cigars` (CMS pattern)
- Discovery: `docs/discovery.md`
- Proposed plan: `docs/proposed-plan.md`
- AIOX env report: `.aiox/environment-report.json`

---

## Next Steps

### Immediate Actions

1. Review deste brief — confirmar/ajustar Executive Summary, MVP Scope e Open Questions.
2. Resolver Open Questions críticas (i18n? AI no MVP? editores iniciais?) antes de Phase 1.2 (PRD).
3. Confirmar pattern monorepo Turborepo (impacta toda Phase 1.4 architecture).
4. Handoff para @pm → criar `docs/prd.md` a partir deste brief.

### PM Handoff

Este Project Brief provê o contexto completo para **Olmeda Pet Studio Website + CMS**. Próximo passo: ativar `@pm` (Morgan) em 'PRD Generation Mode', revisar este brief e construir `docs/prd.md` seção por seção, gerando épicos e stories de alto nível para a Phase 1.4 (architecture) consumir.

— Atlas, investigando a verdade 🔎
