-- Integration test migration for Supabase ↔ GitHub auto-apply.
-- Idempotent and reversible-by-design: creates an empty `app` schema.
-- Safe to leave in place — it becomes the namespace for application tables in 0001_init.

CREATE SCHEMA IF NOT EXISTS app;
COMMENT ON SCHEMA app IS 'Olmeda application schema. Created via Supabase GitHub integration smoke test (2026-05-23).';
