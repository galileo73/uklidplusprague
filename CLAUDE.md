# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**Project type:** Commercial cleaning service website for UKLID PLUS PRAHA

**Main goal:** Professional website for a cleaning company serving Prague and surrounding areas

**Business objective:** Generate leads through online presence, showcase services, enable booking inquiries, and establish trust with potential customers

## Architecture

### Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 |
| Build | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| i18n | i18next + react-i18next |
| Testing | Playwright (E2E) |
| Deployment | Netlify (static) |

### Project Structure

```
uklidplusprague/
├── src/
│   ├── assets/           # Static assets (logo, images)
│   ├── components/
│   │   ├── layout/       # Header, Footer, MobileMenu, FloatingWhatsApp
│   │   ├── sections/    # Homepage sections (Hero, Services, Pricing, etc.)
│   │   ├── seo/         # PageSEO component
│   │   └── ui/          # Reusable UI components (Button, Card, etc.)
│   ├── config/          # Business configuration (centralized)
│   │   ├── business.ts  # Company info, contact, social links
│   │   ├── seo.ts       # SEO settings, JSON-LD schemas
│   │   ├── services.ts  # Service definitions
│   │   ├── pricing.ts   # Pricing data
│   │   ├── areas.ts     # Service areas
│   │   └── ...
│   ├── i18n/            # Internationalization
│   │   ├── index.ts     # i18next configuration
│   │   ├── LanguageContext.tsx
│   │   └── locales/     # Translation files (en, cz, ru, ua)
│   ├── pages/           # Route pages (Home, WorkWithUs, Privacy, Terms)
│   ├── types/           # TypeScript interfaces
│   ├── utils/          # Utility functions (whatsapp.ts)
│   ├── App.tsx         # Main app component with routing
│   ├── index.css       # Tailwind imports + custom styles
│   └── main.tsx        # Entry point
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── logo.jpg        # Company logo
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects      # SPA redirects for Netlify
├── tests/e2e/          # Playwright E2E tests
├── docs/               # Documentation and reports
├── netlify.toml        # Netlify configuration
└── package.json
```

## Key Configuration Files

All business identity is centralized in config files:

- **`src/config/business.ts`** - Company name, contact info, phone, email, WhatsApp, social links
- **`src/config/seo.ts`** - SEO settings, meta tags, JSON-LD schemas
- **`src/config/services.ts`** - Service offerings
- **`src/config/pricing.ts`** - Pricing data
- **`src/config/areas.ts`** - Service areas (Prague districts)
- **`src/config/testimonials.ts`** - Client testimonials
- **`src/i18n/locales/`** - All UI text in 4 languages (en, cz, ru, ua)

**Important:** Never hardcode business information in components. Always import from config files.

## Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Testing Workflow

```bash
# Run i18n validation
npm run test:i18n

# Run Playwright E2E tests
npm run test:e2e

# Run Playwright tests with UI
npm run test:e2e:ui

# View Playwright test report
npm run test:e2e:report
```

## Deployment Workflow

### Netlify Configuration

The `netlify.toml` configures:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects: `/* → /index.html`

### Deployment Steps

1. Push to main branch
2. Netlify auto-deploys from GitHub
3. Production URL: https://uklidpluspraha.cz

## Localization Workflow

### Supported Languages

| Code | Language | File |
|------|----------|------|
| `en` | English | `src/i18n/locales/en.ts` |
| `cz` | Czech | `src/i18n/locales/cz.ts` |
| `ru` | Russian | `src/i18n/locales/ru.ts` |
| `ua` | Ukrainian | `src/i18n/locales/ua.ts` |

### Default Language

- HTML default: `lang="en"`
- i18next fallback: `en`
- Language persistence: `sessionStorage` (persists on refresh, clears on tab close)

### Adding/Updating Translations

1. Edit the relevant locale file in `src/i18n/locales/`
2. Run `npm run test:i18n` to validate key consistency
3. All 4 locale files must have matching keys

## Business Information

### Contact (from config)

- **Phone:** +420 721 960 963
- **WhatsApp:** +420 721 960 963
- **Email:** info@uklidpluspraha.cz
- **Instagram:** https://www.instagram.com/uklidplus.praha/
- **Facebook:** `#` (placeholder - page not yet available)

### Notes

- "Founded 2015" removed - not confirmed
- Testimonials are demo content (not real reviews)
- Facebook link uses `#` placeholder until page is created
- Open Graph image temporarily uses logo.jpg (needs proper og-image.jpg: 1200x630px)

## White-Label Architecture

This project is designed to be a template for other cleaning service businesses:

1. **Config-driven content** - All business info in `src/config/`
2. **i18n-ready** - All text in locale files
3. **Theme customizable** - Colors in `src/config/theme.ts`
4. **SEO-ready** - JSON-LD schemas, meta tags
5. **Mobile-first** - Responsive design

### Customizing for New Clients

To adapt for a new cleaning business:

1. Update `src/config/business.ts` - Name, contact, social links
2. Update `src/config/seo.ts` - Site URL, meta descriptions
3. Update `src/i18n/locales/*.ts` - All translated content
4. Replace `public/logo.jpg` - Client logo
5. Create `public/og-image.jpg` - Social sharing image
6. Update `public/robots.txt` and `public/sitemap.xml` - Domain
7. Update `src/config/pricing.ts` - Client pricing
8. Update `src/config/areas.ts` - Service areas

## Important Files

| File | Purpose |
|------|---------|
| `netlify.toml` | Netlify build config + SPA redirects |
| `src/i18n/index.ts` | i18next setup, language persistence |
| `src/i18n/LanguageContext.tsx` | Language provider + useLanguage hook |
| `src/utils/whatsapp.ts` | WhatsApp link generator |
| `src/components/seo/PageSEO.tsx` | Per-page SEO component |
| `tests/e2e/*.spec.ts` | E2E test suites |

## Gitignore

The `.gitignore` excludes:
- `node_modules/`, `dist/`, `build/`
- `.env` files
- `playwright-report/`, `test-results/`, `tests/screenshots/`
- `tests/lighthouse-report.json`
- `coverage/`, `.netlify/`, `.vercel/`
- `.cache/`, `.tmp/`

## Pre-Launch Checklist

- [x] Default language is English (`lang="en"`)
- [x] Language persistence via sessionStorage
- [x] All social links centralized in config
- [x] WhatsApp link uses real number
- [x] Instagram link uses real URL
- [x] Facebook uses `#` placeholder
- [x] Removed unconfirmed "Founded 2015"
- [x] Testimonials marked as demo content
- [ ] Create proper og-image.jpg (1200x630px)
- [ ] Replace logo.jpg with final client logo
- [ ] Create Facebook page and update link

## Business Plan Review Context

The folder `docs/business-plan/` contains the UKLID PLUS PRAHA business plan presentation and validation prompt.

When reviewing this material:
- keep the presentation maximum 3 slides
- validate assumptions, not only wording
- check revenue realism for a Prague cleaning agency
- focus on recurring clients and cleaner recruitment
- consider website, Google Business Profile, Instagram, Facebook groups, WhatsApp, and customer reviews
- avoid long reports unless explicitly requested