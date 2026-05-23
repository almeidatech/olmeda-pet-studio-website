# Content System — Developer Implementation Guide

This guide explains how to implement the markdown-based content system for Olmeda Pet Studio website.

## Overview

**Content Structure:**
- Markdown files with YAML frontmatter in `/src/content/`
- Three content types: blog posts, static pages, service descriptions
- No database needed — file-based content system
- Full SEO support through metadata and server-side rendering

**Tech Stack:**
- `gray-matter` — Parse YAML frontmatter from markdown
- `next-mdx-remote` — Render markdown/MDX to React components
- Next.js 14 — SSR/SSG for SEO
- TypeScript — Type safety

## Architecture

```
src/
├── content/
│   ├── blog/              # Blog posts (dated, chronological)
│   ├── pages/             # Static pages (About, Contact, etc.)
│   ├── services/          # Service descriptions
│   ├── README.md          # Content guidelines for writers
│   └── DEVELOPER_GUIDE.md # This file
├── lib/
│   ├── content.ts         # Content loader utilities
│   └── types.ts           # TypeScript interfaces
├── pages/
│   ├── blog/
│   │   ├── index.tsx      # Blog listing
│   │   └── [slug].tsx     # Individual blog post
│   ├── [slug].tsx         # Dynamic pages
│   └── services/
│       ├── index.tsx      # Services listing
│       └── [slug].tsx     # Individual service page
└── styles/
    └── globals.css        # Includes markdown styles
```

## Implementation Steps

### Step 1: Create Content Utilities (`lib/content.ts`)

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Types for content
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  published: boolean;
  description: string;
  author: string;
  image: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export interface Page {
  slug: string;
  title: string;
  description: string;
  content: string;
  lastUpdated: string;
  image?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  content: string;
  price: string;
  duration: string;
  guarantee: boolean;
  guaranteeText?: string;
  image?: string;
  keywords: string[];
}

// Get all blog posts
export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  
  const posts = files.map(file => {
    const slug = file.replace('.md', '').split('-').slice(3).join('-');
    const fullPath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      content,
      ...data,
    } as BlogPost;
  });
  
  // Sort by date, newest first
  return posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single blog post
export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Get all static pages
export function getPages(): Page[] {
  const pagesDir = path.join(process.cwd(), 'src/content/pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const slug = file.replace('.md', '');
    const fullPath = path.join(pagesDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      content,
      ...data,
    } as Page;
  });
}

// Get single page
export function getPage(slug: string): Page | null {
  const pages = getPages();
  return pages.find(page => page.slug === slug) || null;
}

// Get all services
export function getServices(): Service[] {
  const servicesDir = path.join(process.cwd(), 'src/content/services');
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const slug = file.replace('.md', '');
    const fullPath = path.join(servicesDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      content,
      ...data,
    } as Service;
  });
}

// Get single service
export function getService(slug: string): Service | null {
  const services = getServices();
  return services.find(service => service.slug === slug) || null;
}

// Get blog slugs for static generation
export function getBlogSlugs(): string[] {
  return getBlogPosts().map(post => post.slug);
}

// Get page slugs for static generation
export function getPageSlugs(): string[] {
  return getPages().map(page => page.slug);
}

// Get service slugs for static generation
export function getServiceSlugs(): string[] {
  return getServices().map(service => service.slug);
}
```

### Step 2: Create Blog Post Page (`pages/blog/[slug].tsx`)

```typescript
import { useMDXComponent } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogSlugs } from '@/lib/content';
import Head from 'next/head';
import Image from 'next/image';

// MDX components (customize as needed)
const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold my-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold my-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold my-3 mt-6" {...props} />,
  p: (props: any) => <p className="my-4 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-orange hover:underline" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside my-4" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-orange pl-4 italic my-4" {...props} />,
  code: (props: any) => <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm" {...props} />,
  pre: (props: any) => <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto my-4" {...props} />,
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Olmeda Pet Studio`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      image: post.image,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }
  
  const Component = useMDXComponent(post.content);
  
  return (
    <>
      <Head>
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <article className="max-w-3xl mx-auto py-12 px-4">
        {/* Header */}
        <header className="mb-8">
          <div className="text-orange mb-2">{post.category}</div>
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>By {post.author}</span>
            <span>•</span>
            <time>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>
        
        {/* Featured Image */}
        {post.image && (
          <div className="mb-8 -mx-4">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <Component components={mdxComponents} />
        </div>
        
        {/* Tags */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </>
  );
}
```

### Step 3: Create Blog Listing Page (`pages/blog/index.tsx`)

```typescript
import { getBlogPosts } from '@/lib/content';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Olmeda Pet Studio',
  description: 'Growth tips, SEO strategies, and advice for pet businesses',
};

export default function BlogPage() {
  const posts = getBlogPosts();
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Growth strategies, SEO tips, and insights for pet business owners
      </p>
      
      <div className="grid gap-8">
        {posts.map(post => (
          <article
            key={post.slug}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <Link href={`/blog/${post.slug}`} className="flex gap-6 p-6">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={120}
                  className="rounded object-cover w-48 h-30"
                />
              )}
              
              <div className="flex-1">
                <div className="text-orange text-sm font-semibold mb-1">
                  {post.category}
                </div>
                <h2 className="text-2xl font-bold mb-2 hover:text-orange">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
```

### Step 4: Create Dynamic Pages (`pages/[slug].tsx`)

```typescript
import { useMDXComponent } from 'next-mdx-remote/rsc';
import { getPage, getPageSlugs } from '@/lib/content';

const mdxComponents = {
  // Same as blog post MDX components above
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getPageSlugs();
  return slugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  const page = getPage(params.slug);
  
  if (!page) {
    return { title: 'Page Not Found' };
  }
  
  return {
    title: `${page.title} | Olmeda Pet Studio`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      image: page.image,
    },
  };
}

export default function Page({ params }: PageProps) {
  const page = getPage(params.slug);
  
  if (!page) {
    return <div>Page not found</div>;
  }
  
  const Component = useMDXComponent(page.content);
  
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
      <div className="prose prose-lg max-w-none">
        <Component components={mdxComponents} />
      </div>
    </article>
  );
}
```

### Step 5: Create Service Pages (`pages/services/[slug].tsx`)

Similar to dynamic pages, but with service-specific layout and styling.

## Static Generation & ISR

For best performance, use **Static Site Generation (SSG)** with **Incremental Static Regeneration (ISR)**:

```typescript
export const revalidate = 3600; // Revalidate every hour
```

This ensures:
- Pages are pre-built at deploy time (fast loading)
- Pages rebuild every hour (fresh content)
- New content is available within 60 minutes of adding file

## Content Workflow

### For Adding a Blog Post

1. **Create file:** `src/content/blog/YYYY-MM-DD-slug-title.md`
2. **Add frontmatter:** (title, date, author, description, etc.)
3. **Write content:** Markdown with headings, images, links
4. **Set published:** `published: true`
5. **Git commit:** `git add . && git commit -m "blog: add new post"`
6. **Deploy:** Push to main → Next.js rebuilds automatically
7. **Live:** Page available at `/blog/slug`

### For Updating an Existing Page

1. **Edit file:** `src/content/pages/about.md` (or any page)
2. **Update lastUpdated:** `lastUpdated: "2026-05-23"`
3. **Git commit:** `git add . && git commit -m "docs: update about page"`
4. **Deploy:** Page rebuilds within 1 hour (ISR)

## SEO Optimization

The content system provides:

✅ **Server-Side Rendering (SSR)** — Google sees full HTML
✅ **Meta Tags** — Title, description from frontmatter
✅ **Open Graph** — Social media preview cards
✅ **Structured Data** — (optional: add Schema.org JSON-LD)
✅ **Sitemap** — Auto-generated from content

### Add Structured Data (Optional)

For blog posts, add JSON-LD in the page head:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: post.image,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
      },
    }),
  }}
/>
```

## Markdown Features Supported

- **Headings:** `# H1`, `## H2`, `### H3`, etc.
- **Emphasis:** `**bold**`, `*italic*`, `***bold italic***`
- **Links:** `[text](url)`
- **Images:** `![alt](url)`
- **Lists:** `- item`, `1. item`
- **Code:** `` `inline` ``, ` ```language code block``` `
- **Blockquotes:** `> quote`
- **Horizontal rule:** `---`
- **Tables:** `| col1 | col2 |`

## Performance Tips

1. **Optimize images:** Use Unsplash, Pexels, or optimized webP
2. **Lazy load images:** Next.js Image component handles this
3. **Short paragraphs:** Better readability and SEO
4. **Internal links:** Link to other blog posts and pages
5. **Update frequently:** Fresh content signals = better ranking

## Monitoring & Maintenance

- Check `getBlogPosts()` return value monthly
- Monitor page load times
- Track Google Search Console ranking improvements
- Periodically update old posts (change `lastUpdated`)

---

## Questions?

See `/src/content/README.md` for content guidelines.
