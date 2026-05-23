# Epic 4 — Admin CRUD, Editor & Publish Flow

**Goal:** Implementar CRUD de Posts/Pages/Services com TipTap, media library com Supabase Storage upload, audit log populado, webhook ISR, OG/sitemap, smoke checklist. Ao final, owner publica post novo via admin, post aparece em `https://olmedapetstudio.com/blog/[slug]` em <30s.

**Prerequisites:** Epic 3 completo. Owner logando no admin em prod, vendo listas read-only.

**Reference:** `docs/prd.md` §6 Epic 4.

---

## Story 4.1 — TipTap Editor (WordPress Parity)

**Acceptance Criteria:**
1. Componente `<RichEditor value onChange />` em `apps/admin/src/components/Editor/`.
2. Extensions: starter-kit, link, image, code-block. **Sem** tables/embeds/callouts.
3. Toolbar: bold, italic, H2, H3, link (modal), image (open MediaPicker), code-inline, code-block, ul/ol.
4. Output salvo como `body_md` (via `tiptap-markdown` ou `turndown`) **e** `body_html` (`getHTML()`).
5. Paste rich externo é sanitizado/plain-text only.
6. Word count + estimated reading time abaixo do editor.
7. Auto-save draft a cada 30s (badge "Saved 12s ago").
8. Sem co-edição/realtime no MVP.

**Architecture refs:** `docs/fullstack-architecture.md` §6.2.

---

## Story 4.2 — Post CRUD

**Acceptance Criteria:**
1. Botão "New post" em `/posts` → cria draft → navega `/posts/[id]`.
2. Form em `/posts/[id]`: title, slug (auto-gen editable), excerpt, category, tags, cover_image (MediaPicker), body (RichEditor), status, published_at.
3. Save dispara UPDATE optimistic UI; erro mostra toast vermelho + revert.
4. Slug uniqueness validado client + server (RLS retorna erro).
5. Delete = soft delete (status='archived'); confirmação modal. Hard delete só via SQL.
6. "Publish now" → status='published', published_at=now().
7. "Schedule" exige published_at futuro + status='scheduled'.
8. Promoção `scheduled → published` via pg_cron schedule `* * * * *` (ADR-004). SQL job em `supabase/migrations/00000000000002_cron.sql`. UPDATE dispara webhook ISR via cadeia padrão.

**Architecture refs:** `docs/architecture/adrs.md#adr-004`.

**⚠️ Pre-requisite:** pg_cron extension habilitada no Supabase project (R5).

---

## Story 4.3 — Pages + Services CRUD

**Acceptance Criteria:**
1. `/pages/[id]` espelha `/posts/[id]` minus category/tags, plus `meta JSONB` key-value editor.
2. `/services/[id]` espelha `/posts/[id]` minus body category/tags, plus `price_tier`, `icon`, `order_index`.
3. Re-ordering em `/services`: drag-drop opcional MVP — pode ser input number manual.
4. Mesmo padrão de save/delete/publish/schedule.

---

## Story 4.4 — Media Library

**Acceptance Criteria:**
1. `/media` lista grid com thumbs, filename, size, dims, uploaded_by, created_at.
2. Botão "Upload" abre file picker; aceita PNG/JPG/WEBP até 5MB raw.
3. Upload envia para Supabase Storage bucket `media`; processa via `sharp` (resize ≤1920, WEBP q82) em `apps/admin/src/pages/api/upload.ts`.
4. Cria row em `media` table após upload OK.
5. Click em item → modal com URL pública, alt text editor, delete.
6. `<MediaPicker onSelect />` reutilizável invocado de RichEditor e form cover_image.
7. Bucket policy: leitura anon pública, write authenticated com role admin/editor.

**Architecture refs:** `docs/architecture/adrs.md#adr-005`.

---

## Story 4.5 — Audit Log Population

**Acceptance Criteria:**
1. Trigger SQL `fn_audit_log()` em `posts`/`pages`/`services`/`media`/`app_users` capturando INSERT/UPDATE/DELETE (criado em Story 1.2).
2. Trigger usa SECURITY DEFINER + `auth.uid()` para `actor_id`.
3. `diff JSONB` armazena `{ before, after }` (apenas em UPDATE/DELETE; só `after` em INSERT).
4. `/audit` (admin-only) lista log com filtros por actor, entity_type, date range.
5. Performance: index em `(entity_type, entity_id, created_at DESC)` e `(actor_id, created_at DESC)`.
6. Retention: 13 meses, partition mensal (ADR-001). Cleanup cron Phase 2.

---

## Story 4.6 — Webhook ISR

**Acceptance Criteria:**
1. Endpoint `apps/site/src/pages/api/revalidate.ts` aceita POST com header `x-revalidate-token` (constant-time compare vs `process.env.REVALIDATE_TOKEN`).
2. Body JSON: `{ paths: string[] }`. Para cada path chama `res.revalidate(path)`.
3. Retorna 200 com paths revalidated; 401 se token inválido; 400 se body inválido; 500 se revalidate falhou (retorna paths que falharam).
4. Supabase Database Webhook criado via dashboard manualmente (Supabase Git integration NÃO cobre webhook config — gotcha). Trigger em `INSERT`/`UPDATE` em `posts`/`pages`/`services` `WHERE status='published'`. Procedure em `docs/guides/webhook-setup.md`; config versionada em `.aiox/runbook/webhook-config.yaml`.
5. Payload do webhook derivado da row + slug; chama endpoint com paths apropriados (ex: `[/blog/${slug}, /blog, /sitemap.xml]`).
6. Latência publish→live ≤30s p95 em smoke manual.
7. Documentação `docs/guides/webhook-isr.md` cobre setup, debug, troubleshoot.

**Architecture refs:** `docs/fullstack-architecture.md` §5.1, §8.1, §15.1.

---

## Story 4.7 — Sitemap + OG Images

**Acceptance Criteria:**
1. `apps/site/src/pages/sitemap.xml.ts` gera sitemap das queries Supabase (slugs published).
2. `/sitemap.xml` incluído no webhook revalidate path em Story 4.6.
3. `apps/site/src/pages/api/og/[type]/[slug].tsx` gera OG via `@vercel/og` ou Satori usando title + cover.
4. `<head>` de cada post/page inclui meta `og:image`.
5. Image dimensions 1200x630.
6. Cache `Cache-Control: public, max-age=31536000, immutable` (URL inclui hash ou versão).

---

## Story 4.8 — Smoke Checklist + Onboarding Doc

**Acceptance Criteria:**
1. `docs/qa/smoke-checklist.md` cobre: login admin, create post draft, publish post, verify in <30s no site, schedule post +5min, verify auto-promote, upload image, edit page, archive post, audit log entry visible.
2. `docs/guides/editor-onboarding.md` em PT-BR com screenshots, passo-a-passo para owner publicar primeiro post.
3. Tempo aferido em sessão real do owner: publica post em ≤10 min (NFR9 validation).
4. Documentos commitados.
