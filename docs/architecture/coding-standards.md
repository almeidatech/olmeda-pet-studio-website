# Coding Standards

## Language & Type Safety

- **TypeScript strict** em ambos apps. `tsconfig.json` flags:
  ```json
  { "strict": true, "noUncheckedIndexedAccess": true, "noImplicitOverride": true, "exactOptionalPropertyTypes": true }
  ```
- **No `any`** salvo casos justificados em comentário inline `// eslint-disable-next-line @typescript-eslint/no-explicit-any`.
- **No `as` assertions** sem comentário explicando porque é seguro.
- Prefer `unknown` + narrowing sobre `any`.

## Linting & Formatting

- **ESLint** preset `next/core-web-vitals` + `eslint-plugin-jsx-a11y` em ambos apps.
- **Prettier** padrão; line length 100 col.
- **No unused imports** (`eslint-plugin-unused-imports`).
- CI gate: `pnpm lint && pnpm typecheck` deve passar para PR mergir.

## File Naming

- React components: `PascalCase.tsx`.
- Hooks: `useCamelCase.ts`.
- Utilities/lib: `kebab-case.ts`.
- Test files: `*.test.ts(x)` co-located com source.
- Pages: respeitar convenção Next.js Pages Router.

## Server/Client Boundary

- Arquivos `*.server.ts` / `pages/api/*` podem importar `SUPABASE_SERVICE_ROLE_KEY`.
- Client components / arquivos `*.browser.ts` NUNCA importam service-role.
- `apps/site` **inteiro** é proibido de tocar service-role (lint rule custom Phase 2; runtime check no startup do site falha se var presente).

## Error Handling

- API routes retornam `{ error: { code: string, message: string, details?: unknown } }` em failure com HTTP status apropriado.
- Client trata erros com toast (`<Toast variant="error" />`).
- **NUNCA** retornar stack traces ao client.
- `console.error` para logs server-side (capturados por Docker `json-file` driver). pino JSON Phase 2.

## Async Patterns

- Use `async/await`, evite `.then` chains.
- Errors via `try/catch` na boundary (API route, server prop, event handler).
- Use SWR para client-side fetching com revalidation:
  ```ts
  const { data, error, mutate } = useSWR('/api/posts', fetcher);
  ```

## React Patterns

- Functional components only. No class components.
- Hooks no topo do componente; sem hooks condicionais.
- Memoize com `useMemo`/`useCallback` apenas quando profile mostrar custo.
- Forms via `react-hook-form`; validation via `zod`.

## CSS

- CSS Modules para componentes próprios (`*.module.css`).
- Tokens (cores, type, spacing) vêm do design system Olmeda — **NUNCA hardcode hex/px**.
- Sem Tailwind no MVP.

## Imports Ordering (auto via Prettier+eslint-plugin-import)

1. React / Next built-ins
2. External packages
3. `@olmeda/*` workspace
4. Relative imports (`../`, `./`)
5. Type imports last, prefixados `type`

## Commits & Branches

- **Conventional Commits:** `feat(scope): description`, `fix(scope): description`, `chore`, `docs`, `refactor`, `test`.
- **Branches:** `feat/<story-id>-<slug>`, `fix/<issue>`, `chore/<task>`.
- 1 story = 1 PR.

## Testing

- Unit: Vitest. Coverage não enforced no MVP, mas funções puras críticas (slugify, markdown→html, RLS helpers) devem ter teste.
- Integration: `supabase start` local + Vitest. Tests em `/tests/integration/`.
- E2E: smoke checklist manual; Playwright Phase 2.

## Accessibility

- `eslint-plugin-jsx-a11y` configurado strict.
- Components com `aria-*` quando necessário.
- Site público alvo WCAG AA mandatório; admin best-effort.

## Performance

- Bundle size: admin route bundle target <300KB gzip.
- Dynamic import (`next/dynamic`) para components pesados (TipTap, charts).
- Lazy load images (`next/image`).

## Security

- **Never commit secrets.** `.env` gitignored.
- Service-role key SOMENTE em `apps/admin`.
- Constant-time compare para tokens (`crypto.timingSafeEqual`).
- CSP header strict configurado em ambos apps.

## Linting Custom Rules (Phase 2 wishlist)

- Block `process.env.SUPABASE_SERVICE_ROLE_KEY` em `apps/site/**`.
- Block client-side imports de `*.server.ts`.
- Enforce `Database` typed Supabase client em vez de untyped.
