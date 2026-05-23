# Content Management Structure

This directory contains all markdown-based content for the Olmeda Pet Studio website. The structure is designed for easy content management and SEO optimization.

## Directory Organization

```
src/content/
├── blog/           # Blog posts (publishable articles)
├── pages/          # Static pages (About, Contact, etc.)
├── services/       # Service descriptions
└── README.md       # This file
```

## Content Format

All content files use **Markdown with YAML frontmatter**. The frontmatter contains metadata for SEO and rendering.

### Blog Posts (`/blog/*.md`)

**File naming:** `YYYY-MM-DD-slug-title.md`

Example: `2026-05-23-google-ranking-tips.md`

```markdown
---
title: "5 Google Ranking Tips for Pet Grooming Businesses"
slug: google-ranking-tips
date: 2026-05-23
published: true
author: "Amanda Almeida"
description: "Learn the top 5 strategies to improve your pet grooming business's Google ranking and attract more local customers."
image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
readTime: "5 min read"
category: "SEO"
tags: ["Google Ranking", "Local SEO", "Pet Business"]
---

# Your Blog Post Title

Write your blog post content here in markdown format.

## You can use markdown headers

- Lists
- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

```code blocks```

> Blockquotes

---

## Key Sections

1. **Problem/Hook** — Start with what readers care about
2. **Solution** — Provide actionable steps
3. **CTA** — End with a call-to-action (book free audit, etc.)
```

### Static Pages (`/pages/*.md`)

**File naming:** `page-name.md` (no date prefix)

Example: `about.md`, `services-overview.md`

```markdown
---
title: "About Olmeda Pet Studio"
slug: about
description: "Learn about Olmeda's mission to help pet businesses grow through proven marketing strategies."
image: "https://..."
lastUpdated: "2026-05-23"
---

# About Olmeda Pet Studio

Your page content here...
```

### Service Descriptions (`/services/*.md`)

**File naming:** `service-name.md`

Example: `google-positioning.md`, `review-generation.md`

```markdown
---
title: "Google Positioning for Pet Businesses"
slug: google-positioning
description: "Get your pet business on the first page of Google with our proven positioning strategy. Learn how we help you dominate local search."
keywords: ["Google positioning", "local SEO", "pet business"]
price: "$Starting at $5,000/month"
duration: "4 months"
guarantee: true
---

# Google Positioning Service

Service details...
```

## Frontmatter Fields Reference

### Required Fields (all content)
- `title` (string) — Page/post title (40-60 chars for SEO)
- `slug` (string) — URL-friendly identifier (no spaces, lowercase)
- `description` (string) — Meta description (155-160 chars for Google)

### Blog-Specific Fields
- `date` (YYYY-MM-DD) — Publication date
- `published` (boolean) — Draft or published?
- `author` (string) — Author name
- `image` (string) — Feature image URL
- `readTime` (string) — Estimated read time (e.g., "5 min read")
- `category` (string) — Content category
- `tags` (array) — Tags for filtering/search

### Page/Service Fields
- `lastUpdated` (YYYY-MM-DD) — Last modification date
- `image` (string) — Feature/header image
- `keywords` (array) — SEO keywords

## Guidelines for Content Writers

### SEO Best Practices

1. **Title:** 40-60 characters, include main keyword
   - ✅ "Google Ranking Guide for Pet Grooming Businesses"
   - ❌ "Blog Post"

2. **Description:** 155-160 characters, compelling, includes CTA hint
   - ✅ "Learn 5 proven strategies to improve your pet business's Google ranking. Olmeda's guide includes actionable steps and real case studies."
   - ❌ "This is about Google ranking"

3. **Slug:** lowercase, hyphens, no special chars
   - ✅ "google-ranking-tips"
   - ❌ "Google Ranking Tips!"

4. **Headings:** Use H2 and H3 (H1 is the title)
   - Don't skip heading levels (H2 → H3 → H4)
   - Include keywords naturally in headings

5. **Content:** 800-2000 words for blog posts
   - First paragraph hooks the reader
   - Short paragraphs (2-4 sentences)
   - Subheadings every 200-300 words
   - Include internal links to other pages/posts

6. **Images:** 
   - Use descriptive file names
   - Include alt text in markdown: `![Alt text](image-url)`
   - Optimize for web (< 200KB when possible)

7. **Call-to-Action:** Every post should end with one
   - "Book your free audit" → link to /resources/free-audit
   - "Read the full guide" → link to relevant page
   - "Chat with our team" → link to contact form

## Example Structure

```
src/content/
├── blog/
│   ├── 2026-05-01-first-blog-post.md
│   ├── 2026-05-15-google-tips.md
│   └── 2026-05-23-review-strategy.md
├── pages/
│   ├── about.md
│   ├── process.md
│   └── contact.md
├── services/
│   ├── google-positioning.md
│   ├── review-generation.md
│   ├── paid-advertising.md
│   └── web-design-seo.md
└── README.md
```

## For Developers

### How to Render Content

The content structure expects the following implementation:

1. **Read markdown files** from the respective directories
2. **Parse YAML frontmatter** (use `gray-matter` - already in dependencies)
3. **Convert markdown to HTML** (use `next-mdx-remote` - already configured)
4. **Generate meta tags** from frontmatter (title, description, og:image)
5. **Create dynamic routes** for blog posts (`/blog/[slug]`) and pages (`/[slug]`)

### Available Libraries

Already installed in `package.json`:
- `gray-matter` — Parse YAML frontmatter from markdown
- `@next/mdx` — MDX support
- `next-mdx-remote` — Render MDX/markdown to HTML
- `@mdx-js/react` — MDX React components

### Suggested Next Steps

1. Create a content loader utility (`/lib/content-loader.ts`)
2. Implement blog listing page (`/blog`)
3. Implement blog post template (`/blog/[slug]`)
4. Implement dynamic page router
5. Add content search/filtering functionality

## Content Checklist

Before publishing content:

- [ ] Title is 40-60 characters
- [ ] Description is 155-160 characters
- [ ] Slug is lowercase, hyphenated
- [ ] Keywords/tags are relevant
- [ ] Content is 800+ words (blog posts)
- [ ] Includes at least 2-3 internal links
- [ ] Has a clear CTA at the end
- [ ] Images are optimized
- [ ] No broken links
- [ ] Frontmatter is valid YAML
- [ ] Published field is set to `true`

---

**Last Updated:** 2026-05-23  
**Maintained By:** Development Team
