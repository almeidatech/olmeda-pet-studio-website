# Olmeda Agency Website

Official website for Olmeda Agency — featuring services, portfolio, blog, and contact.

## Features

- Built with Next.js and React
- TypeScript for type safety
- Integrated with `@olmeda/design-system` for consistent branding
- SEO optimized
- Blog support
- Responsive design

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building

```bash
npm run build
npm start
```

## Design System

This project uses the `@olmeda/design-system` package for:
- Colors and color tokens
- Spacing scale
- Typography system
- Base components (when available)

Import tokens:
```typescript
import { colors, spacing, typography } from '@olmeda/design-system/tokens';
```

## Project Structure

```
src/
├── pages/           # Page routes
├── components/      # Reusable components
├── styles/          # Global styles
├── lib/             # Utilities and helpers
└── types/           # TypeScript types
```

## License

MIT
