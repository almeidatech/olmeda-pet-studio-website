# Olmeda Pet Studio Website — Setup Guide

This project is a Next.js 14 website for Olmeda Pet Studio, built with React 18, TypeScript, and MDX for blog content management.

## Architecture

The project uses a **dual-repository structure**:

- **olmeda-website** (this repo) — Next.js application, pages, components, content
- **olmeda-design-system** (separate repo) — Shared design tokens, colors, typography, spacing (used across website + agency automations)

The website imports design tokens from the design-system via npm:
```json
"@olmeda/design-system": "github:amandaalmeidda/olmeda-design-system#master"
```

## Prerequisites

- Node.js 18+
- Git
- GitHub access (for pulling design-system from private repo)

## Installation

### 1. Clone both repositories

```bash
# Clone the website
git clone https://github.com/amandaalmeidda/olmeda-website
cd olmeda-website

# Clone the design-system (in a sibling directory)
cd ..
git clone https://github.com/amandaalmeidda/olmeda-design-system
```

### 2. Install dependencies

```bash
cd olmeda-website
npm install
```

The design-system will be automatically installed from the GitHub reference in `package.json`.

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
olmeda-website/
├── src/
│   ├── pages/              # Next.js pages (routing)
│   │   ├── index.tsx       # Homepage
│   │   ├── blog/
│   │   │   ├── index.tsx   # Blog listing page
│   │   │   └── [slug].tsx  # Dynamic blog post pages
│   ├── layouts/            # Reusable layout components
│   │   ├── PageLayout.tsx
│   │   └── BlogLayout.tsx
│   ├── components/         # React components
│   ├── styles/             # Global CSS
│   └── lib/                # Utilities
│       └── mdx.ts          # MDX file parsing and frontmatter handling
├── content/
│   └── blog/               # MDX blog posts with frontmatter metadata
├── public/
│   ├── fonts/              # Typography (Inter, Playfair Display)
│   ├── images/             # Images and uploads
│   ├── video/              # Video assets
│   ├── css/                # Additional stylesheets
│   └── logos/              # Brand logos and icons
└── package.json            # Dependencies (includes design-system reference)
```

## Key Technologies

- **Next.js 14** — React framework with SSG/SSR capabilities
- **React 18** — UI library
- **TypeScript** — Type safety
- **MDX** — Markdown + JSX for blog content
- **Design System** (separate repo) — Tokens, colors, typography

## Development

### Available Scripts

```bash
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type checking
```

### Adding Blog Posts

Blog posts are MDX files in `content/blog/` with frontmatter metadata:

```mdx
---
title: "Post Title"
description: "Short description"
date: "2026-05-22"
category: "Marketing"
tags: ["tag1", "tag2"]
image: "dog-yorkie"
readTime: "5 min read"
---

Your content here...
```

Posts automatically appear on `/blog` and at dynamic routes like `/blog/post-slug`.

### Design System Integration

Design tokens (colors, spacing, typography) are imported from `@olmeda/design-system`:

```typescript
// In CSS
@import url('@olmeda/design-system/tokens');

// Use CSS variables
background-color: var(--color-primary);
padding: var(--spacing-lg);
font-family: var(--font-heading);
```

### SEO

All pages use Next.js `Head` component for metadata. Blog posts are pre-rendered at build time (SSG) for optimal Google indexing.

## Deployment

The site uses Static Site Generation (SSG) with Incremental Static Regeneration (ISR):

```bash
npm run build
npm run start
```

All content is pre-rendered to HTML at build time, making it fully indexable by search engines without JavaScript execution.

## Troubleshooting

**Q: Design-system not installing?**
- Ensure you have GitHub access to the private design-system repo
- Check that your GitHub credentials are configured: `git config user.email` and `git config user.name`

**Q: MDX files not showing up?**
- Ensure `.mdx` files are in `content/blog/` directory
- Restart the development server: `npm run dev`

**Q: Styles not applying?**
- Clear Next.js cache: `rm -rf .next`
- Restart dev server

## Support

For questions about the design system (colors, typography, tokens), refer to the separate `olmeda-design-system` repository documentation.

---

**Last updated:** May 23, 2026
