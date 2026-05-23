# Olmeda Pet Studio Website

A modern Next.js website for Olmeda Pet Studio, featuring blog content management with MDX, responsive design, and SEO optimization.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Overview

- **Framework:** Next.js 14 with React 18 and TypeScript
- **Content Management:** MDX (Markdown + JSX) for blog posts
- **Design System:** Shared design tokens via `@olmeda/design-system` package
- **SEO:** Static Site Generation (SSG) for optimal Google indexing
- **Styling:** CSS with design tokens (colors, spacing, typography)

## Website Navigation

### Pages

- **Homepage** — [http://localhost:3000/](http://localhost:3000/) — Hero section, service overview, CTA
- **Blog Index** — [http://localhost:3000/blog](http://localhost:3000/blog) — All articles, category filters, search
- **Blog Post** — [http://localhost:3000/blog/{slug}](http://localhost:3000/blog/marketing-strategies) — Individual article with metadata and sidebar

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

## Blog System

### Adding a New Blog Post

1. **Create MDX file** in `content/blog/`:

```bash
content/blog/your-post-title.mdx
```

2. **Add frontmatter metadata** (YAML at the top):

```mdx
---
title: "Your Post Title"
description: "Brief summary of the post"
date: "2026-05-22"
category: "Marketing"
tags: ["tag1", "tag2"]
image: "dog-yorkie"
readTime: "5 min read"
---

Your content starts here...
```

3. **Write content in Markdown + JSX**:

```mdx
---
title: "Growing Your Pet Business"
description: "Strategies for client acquisition and retention"
date: "2026-05-22"
category: "Marketing"
tags: ["growth", "client-acquisition"]
image: "dog-yorkie"
readTime: "5 min read"
---

## Introduction

Start with a compelling hook...

### Subheading

- Bullet point 1
- Bullet point 2
- Bullet point 3

More content here...
```

4. **The post automatically appears** on `/blog` and at `/blog/your-post-title`

### Blog Post Structure

Each blog post has:

- **Metadata in frontmatter:**
  - `title` — Post title (appears as page heading)
  - `description` — Short summary (appears in blog listing and SEO)
  - `date` — Publication date (YYYY-MM-DD format)
  - `category` — Content category (Marketing, Operations, Client Experience, Growth)
  - `tags` — Array of tag strings (for filtering/organization)
  - `image` — Image class reference (e.g., "dog-yorkie")
  - `readTime` — Estimated read duration (e.g., "5 min read")

- **Content in Markdown:**
  - H2 headers (`##`) for sections
  - Paragraphs, bullet lists, links
  - Custom components (CTAs, callouts)
  - JSX blocks for interactive content

### Featured Image

Image classes map to CSS background images. Common classes:

- `dog-yorkie` — Yorkie dog photo
- `dog-and-cat` — Dog and cat together
- `dog-grooming` — Grooming service
- `vet-check` — Veterinary visit

These are defined in your global CSS with background images.

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

1. **Run the dev server** — `npm run dev`
2. **Visit the homepage** — [http://localhost:3000](http://localhost:3000)
3. **Explore the blog** — [http://localhost:3000/blog](http://localhost:3000/blog)
4. **Add a new post** — Create `content/blog/your-post.mdx`
5. **Deploy** — See SETUP.md for production deployment

---

**Last updated:** May 23, 2026  
**Repository:** [github.com/amandaalmeidda/olmeda-website](https://github.com/amandaalmeidda/olmeda-website)  
**Design System:** [github.com/amandaalmeidda/olmeda-design-system](https://github.com/amandaalmeidda/olmeda-design-system)
