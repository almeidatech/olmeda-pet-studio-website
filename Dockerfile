# syntax=docker/dockerfile:1.7
# Olmeda site — Next.js 14 standalone, deployed to Docker Swarm (single-node) + Traefik.
# Build:  DOCKER_BUILDKIT=1 GH_TOKEN=<pat> docker build --secret id=gh_token,env=GH_TOKEN -t olmeda-site:<sha> .

FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat git
WORKDIR /app
COPY package.json package-lock.json* ./
# GH_TOKEN via BuildKit secret (NEVER printed in logs, never written to image layers).
RUN --mount=type=secret,id=gh_token,required=false \
    if [ -s /run/secrets/gh_token ]; then \
      TOKEN=$(cat /run/secrets/gh_token); \
      git config --global url."https://${TOKEN}@github.com/".insteadOf "https://github.com/"; \
    fi && \
    npm install --no-audit --no-fund --ignore-scripts && \
    git config --global --remove-section url."https://${TOKEN:-x}@github.com/" 2>/dev/null || true

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG GIT_SHA=unknown
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_SITE_URL=https://pet.alcgestao.com.br
ENV GIT_SHA=$GIT_SHA \
    NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL \
    NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_TELEMETRY_DISABLED=1
# postinstall script copies design-system assets; run now that node_modules is in place
RUN node scripts/setup-assets.js || true
RUN npm run build

FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat tini wget
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs && chown -R nextjs:nextjs /app
USER nextjs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:3000/api/health || exit 1
ENTRYPOINT ["/sbin/tini","--"]
CMD ["node","server.js"]
