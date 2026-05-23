# Olmeda Website — HTML to Next.js Migration Plan

## Status: IN PROGRESS

### Assets & CSS ✓
- [x] Copied `/public/assets/` (CSS, fonts, icons, images)
- [x] Copied `/public/uploads/` (images)
- [x] site.css available at `/public/assets/css/site.css`
- [x] Fonts: Inter + Playfair Display (variable fonts)
- [x] Logo assets: SVG + PNG versions

### Pages to Convert

| Page | Status | Files | Notes |
|------|--------|-------|-------|
| Home | TODO | `index.tsx` | Hero + services preview + testimonials |
| About | TODO | `about.tsx` | Team, mission, values |
| Services | TODO | `services/index.tsx` | Service grid + category pages |
| Service Details | TODO | `services/[slug].tsx` | Google Positioning, Review Gen, etc |
| Blog | TODO | `blog/index.tsx` | Blog listing + search |
| Blog Post | TODO | `blog/[slug].tsx` | Individual blog posts with metadata |
| Resources | TODO | `resources/index.tsx` | Free audit, guides, etc |
| Contact | TODO | `contact.tsx` | Contact form + CTA |
| Locations | TODO | `locations/[city].tsx` | Austin, Miami, Texas pages |
| Careers | TODO | `careers.tsx` | Job listings + company culture |
| Legal | TODO | `legal/[page].tsx` | Privacy, Terms |

### Files to Reference
```
HTML Source: C:\Users\hello\Downloads\Olmeda-Website-Extract\
  ├── index.html              (home)
  ├── about.html              (about page)
  ├── services/
  │   ├── index.html          (services listing)
  │   ├── google-positioning.html
  │   ├── review-generation.html
  │   ├── paid-advertising.html
  │   ├── web-design-seo.html
  │   ├── dog-daycares.html
  │   └── veterinary-clinics.html
  ├── blog/
  │   ├── index.html          (blog listing)
  │   └── marketing-strategies.html
  ├── resources/              (guides, audits, etc)
  ├── locations/              (austin, miami, texas)
  ├── contact.html
  ├── careers.html
  ├── legal/                  (privacy, terms)
  └── assets/css/site.css     (✓ already copied)
```

### Implementation Strategy

1. **Keep CSS as-is** — All styling uses existing site.css via `/public/assets/`
2. **Copy HTML content** — Extract content from HTML into TSX components
3. **Create layout wrapper** — Base layout with header, footer, nav
4. **Build page components** — TSX files for each page
5. **Add Next.js metadata** — SEO tags for each page
6. **Verify links** — Update internal links to use Next.js routing

### Key Content Sections by Page

#### Home (index.tsx)
- Hero section (video compare, CTA buttons)
- Services preview grid
- Trust/social proof
- Process overview
- Blog preview
- Testimonials
- Final CTA

#### About (about.tsx)
- Page hero with mission
- Team/company metrics
- Journey/values (5-step process)
- Culture/beliefs
- Testimonials
- CTA

#### Services (services/index.tsx)
- Service grid layout
- Category filters
- Service card previews
- CTA buttons

#### Service Detail Pages (services/[slug].tsx)
- Service hero
- Benefits grid
- Process steps
- Case studies/results
- Pricing/packages
- CTA to free audit

#### Blog (blog/index.tsx)
- Blog post grid
- Search/filter
- Categories
- Featured posts

#### Blog Post (blog/[slug].tsx)
- Article content
- Author info
- Meta data
- Related posts
- CTA

### SEO Implementation

Each page includes:
```typescript
<Head>
  <title>{pageTitle}</title>
  <meta name="description" content="{pageDescription}" />
  <meta name="og:title" content="{pageTitle}" />
  <meta name="og:description" content="{pageDescription}" />
  <meta name="og:image" content="{ogImage}" />
  <link rel="canonical" href="{canonicalUrl}" />
</Head>
```

### Color System (from CSS)
```
Primary: --orange: #FF6A1A
Primary Dark: --orange-dk: #E85E0F
Secondary: --navy: #0B1F3A
Accent: --blue: #3B82F6
Backgrounds: --white, --off-white, --gray-50
```

### Next Steps

1. Start with `src/pages/index.tsx` (home page)
2. Extract and convert HTML → TSX for each section
3. Import styles via global CSS (already available)
4. Create layout wrapper (`src/components/Layout.tsx`)
5. Build remaining pages
6. Test all links and routing
7. Verify SEO metadata

---

## Timeline

- Pages 1-3 (Home, About, Services): 30 minutes
- Pages 4-6 (Service details, Blog, Resources): 45 minutes
- Pages 7-9 (Contact, Locations, Legal/Careers): 30 minutes
- Testing & Link verification: 15 minutes

**Total: ~2 hours for complete migration**

---

*HTML source preserved at: C:\Users\hello\Downloads\Olmeda-Website-Extract\*
*All assets copied to: C:\Projects\olmeda\olmeda-website\public\*
