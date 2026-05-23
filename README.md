# Olmeda Pet Studio Website

A modern Next.js website for Olmeda Pet Studio, featuring blog content management with MDX, responsive design, and SEO optimization.

---

## 🎨 Design vs Implementation

This project separates **design** from **implementation**:

| Folder | Purpose | Who? |
|--------|---------|------|
| **`/design`** | Pure HTML/CSS static templates — source of truth for how the site should look | Designer/Amanda |
| **`/src`** | React/Next.js implementation — dynamic, data-driven production code | Developer |

### View Both Versions

**Design (Static HTML):**
```bash
npm run serve:design
# Opens http://localhost:8000 — pure HTML/CSS with no JavaScript
```

**Implementation (React/Next.js):**
```bash
npm run dev
# Opens http://localhost:3000+ — full Next.js app with dynamic features
```

**Why this matters:** Your developer references `/design` to see exactly what you designed, then converts it to React components while preserving your design intent.

---

## Quick Start (For Developers)

```bash
npm install
npm run dev
```

Opens on http://localhost:3000 or higher if ports are in use (check terminal output for actual URL)

---

## Project Overview

- **Framework:** Next.js 14 with React 18 and TypeScript
- **Content Management:** MDX (Markdown + JSX) for blog posts
- **Design System:** Shared design tokens via `@olmeda/design-system` package
- **SEO:** Static Site Generation (SSG) for optimal Google indexing
- **Styling:** CSS with design tokens (colors, spacing, typography)

## Website Structure

### Pages

- **Homepage** — `/` — Hero section, service overview, CTA
- **Blog Index** — `/blog` — All articles, category filters, search
- **Blog Post** — `/blog/{slug}` — Individual article with metadata and sidebar
- **Service Pages** — `/services/{slug}` — Service descriptions with pricing and guarantees
- **Static Pages** — `/{slug}` — About, Contact, and other pages

### Navigation Flow

```
Homepage
    ↓
    └─ Blog
         ├─ All Articles
         ├─ Category Filters (Marketing, Operations, etc.)
         ├─ Search
         └─ Individual Posts (click card)
```

---

## Content Management System

### Adding Content (Blog Posts, Pages, Services)

**All content is markdown-based.** See `/src/content/README.md` for complete guidelines.

### Quick Start

1. **Create a markdown file** in the appropriate directory:
   - Blog posts: `/src/content/blog/YYYY-MM-DD-slug-title.md`
   - Pages: `/src/content/pages/page-name.md`
   - Services: `/src/content/services/service-name.md`

2. **Add YAML frontmatter** with metadata:

```markdown
---
title: "Your Title Here"
slug: your-slug
date: 2026-05-23
description: "Short description for SEO (155-160 characters)"
category: "SEO" (blog posts only)
tags: ["tag1", "tag2"]
---

# Your Content

Write in markdown. Headers, lists, links, images all supported.
```

3. **The content automatically appears** on your site:
   - `/blog/your-slug` for blog posts
   - `/services/service-slug` for services
   - `/{slug}` for pages

**For detailed guidelines**, see `/src/content/README.md`

### Metadata Fields

**For Blog Posts:**
- `title` — Post title (40-60 chars for SEO)
- `slug` — URL identifier (kebab-case)
- `date` — Publication date (YYYY-MM-DD)
- `description` — SEO description (155-160 chars)
- `author` — Author name
- `category` — Topic category
- `tags` — Array of topic tags
- `image` — Image URL (optional)
- `readTime` — Estimated read time (e.g., "5 min read")
- `published` — Boolean (true to publish)

**For Pages & Services:**
- `title` — Page/service title
- `slug` — URL identifier
- `description` — SEO description
- `image` — Featured image URL (optional)
- `lastUpdated` — Last modification date

---

## File Structure

```
olmeda-website/
├── src/
│   ├── pages/              # Next.js pages (routing)
│   │   ├── index.tsx       # Homepage
│   │   └── blog/
│   │       ├── index.tsx   # Blog listing page
│   │       └── [slug].tsx  # Dynamic blog post page
│   ├── layouts/            # Reusable layouts
│   │   ├── PageLayout.tsx  # Main page layout
│   │   └── BlogLayout.tsx  # Blog post layout
│   ├── components/         # React components
│   ├── styles/             # Global CSS and design tokens
│   └── lib/
│       └── mdx.ts          # MDX parsing utilities
├── content/
│   └── blog/               # MDX blog posts
│       ├── post-1.mdx
│       ├── post-2.mdx
│       └── post-3.mdx
├── public/
│   ├── fonts/              # Typography (from design-system)
│   ├── logos/              # Brand assets (from design-system)
│   ├── images/             # Site images and uploads
│   └── css/                # Additional stylesheets
├── scripts/
│   └── setup-assets.js     # Auto-copies fonts/logos from design-system
├── SETUP.md                # Detailed developer setup guide
├── package.json            # Dependencies
└── README.md               # This file
```

---

## Design System Integration

All design tokens (colors, spacing, typography) come from `@olmeda/design-system`:

### Using CSS Variables

In your CSS files:

```css
/* Colors */
background-color: var(--orange);
color: var(--fg-1);
border-color: var(--gray-100);

/* Spacing */
padding: var(--spacing-lg);
margin: var(--spacing-md);

/* Typography */
font-family: var(--font-body);
font-size: var(--text-lg);
font-weight: var(--fw-bold);
```

### Common Variables

- **Colors:** `--orange`, `--white`, `--off-white`, `--gray-100`, `--fg-1`, `--fg-2`, `--fg-3`
- **Spacing:** `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`
- **Typography:** `--font-body`, `--font-heading`, `--text-sm`, `--text-base`, `--text-lg`
- **Shadows:** `--sh-sm`, `--sh-md`

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint TypeScript and JSX
npm run lint

# Format code
npm run format
```

---

## Asset Setup

The website automatically copies fonts and logos from the design-system when you run `npm install`:

```bash
npm install
# → Runs postinstall hook: node scripts/setup-assets.js
# → Copies fonts and logos to public/fonts/ and public/logos/
```

If assets are missing, you can manually run:

```bash
node scripts/setup-assets.js
```

---

## SEO & Google Indexing

**Is the website SEO-friendly?** Yes — Google can read it.

- All pages are **pre-rendered to HTML** at build time (Static Site Generation)
- Google receives complete HTML with all content before any JavaScript
- No JavaScript execution needed for search engines to index the site
- Blog posts are automatically indexed with metadata (title, description, date, category)

---

## Troubleshooting

**Q: Dev server won't start?**  
Clear the cache and restart:
```bash
rm -rf .next
npm run dev
```

**Q: Blog posts not showing up?**  
- Ensure `.mdx` files are in `content/blog/`
- Restart dev server: `npm run dev`
- Check filename uses kebab-case (e.g., `my-post-title.mdx`)

**Q: Styles not applying or design tokens missing?**  
- Check that `@olmeda/design-system` is installed: `npm ls @olmeda/design-system`
- If missing, run: `npm install`
- Clear cache: `rm -rf .next && npm run dev`

**Q: Fonts or logos not showing?**  
- Run asset setup: `node scripts/setup-assets.js`
- Check that `public/fonts/` and `public/logos/` directories exist
- Verify design-system package is in `node_modules/@olmeda/design-system/`

---

## For Developers

- **Setup Guide:** See [SETUP.md](./SETUP.md) for detailed environment setup and architecture documentation
- **TypeScript:** No `any` types — use proper type definitions
- **Components:** Always define prop interfaces for React components
- **Imports:** Use absolute imports from `@/` (e.g., `@/components/Card`)
- **Commits:** Use conventional commits (feat:, fix:, docs:, etc.)

---

## Next Steps

1. **Setup** — Install dependencies: `npm install`
2. **Development** — Run the dev server: `npm run dev` (check terminal output for the actual URL, e.g., localhost:3000-3006)
3. **Content** — Create markdown files in `/src/content/blog`, `/src/content/pages`, `/src/content/services`
4. **Build** — Run `npm run build` to create production-ready site
5. **Deploy** — See SETUP.md for production deployment instructions

---

**Last updated:** May 23, 2026  
**Repository:** [github.com/amandaalmeidda/olmeda-website](https://github.com/amandaalmeidda/olmeda-website)  
**Design System:** [github.com/amandaalmeidda/olmeda-design-system](https://github.com/amandaalmeidda/olmeda-design-system)
