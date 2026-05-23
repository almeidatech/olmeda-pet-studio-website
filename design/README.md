# Olmeda Pet Studio — Static Design Templates

This folder contains your **pure HTML/CSS design** — the source of truth for how the site should look and function.

## Structure

```
design/
├── index.html                 # Homepage
├── about.html                 # About page
├── contact.html               # Contact page
├── careers.html               # Careers page
├── process.html               # Process page
├── assets/
│   ├── css/site.css          # Complete design stylesheet
│   ├── fonts/                # Typography files
│   ├── js/                   # Static scripts (navigation, etc)
│   └── images/               # Design images, logos, icons
├── blog/
│   ├── index.html            # Blog listing
│   └── *.html                # Individual blog posts
├── services/
│   ├── index.html            # Services overview
│   ├── google-positioning.html
│   ├── review-generation.html
│   ├── paid-advertising.html
│   ├── web-design-seo.html
│   ├── veterinary-clinics.html
│   └── dog-daycares.html
├── resources/
│   ├── free-audit.html
│   ├── growth-guide.html
│   ├── google-positioning-guide.html
│   └── review-strategy.html
├── locations/
│   ├── austin.html
│   ├── miami.html
│   └── texas.html
├── legal/
│   ├── privacy.html
│   └── terms.html
├── work/
│   └── *.html                # Case studies
└── uploads/                  # Design assets, images, videos
```

## How to View

### Option 1: Local Static Server (Simple)
```bash
cd design/
npx http-server -p 8000 -o
```
Then visit `http://localhost:8000`

### Option 2: Python Static Server
```bash
cd design/
python -m http.server 8000
```
Then visit `http://localhost:8000`

### Option 3: Node.js Built-in (from project root)
```bash
npm run serve:design
```
Then visit `http://localhost:8000`

## For Your Developer

This is your **reference for what the design should look like**. Use this to:

1. **See exactly how the design works** — Navigation, animations, layouts, spacing
2. **Reference CSS structure** — `assets/css/site.css` contains all design tokens
3. **Match responsive behavior** — See how pages adapt on mobile
4. **Copy HTML structure** — Use as a guide when building React components

## Design vs Implementation

- **`/design`** — Your pure HTML/CSS (what it should look like)
- **`/src`** — React/Next.js implementation (how it works dynamically)

The developer converts your static HTML into React components while keeping your design intent intact.

---

**Last Updated:** May 23, 2026
