# UKLID PLUS PRAHA Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium cleaning agency website for UKLID PLUS PRAHA - a trust-building, conversion-support platform optimized for WhatsApp/Messenger conversion, expat focus, and recurring cleaning plans.

**Architecture:** Configuration-first React application with all business content isolated in config files, enabling white-label adaptation. Single-page layout with 17 sections, responsive across all devices, local SEO optimized.

**Tech Stack:** React 18 + Vite + Tailwind CSS + TypeScript + Framer Motion + Netlify

---

## Project Structure

```
uklidplusprague/
├── public/
│   ├── uklidplus-logo.png
│   ├── favicon.ico
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── config/
│   ├── data/
│   ├── hooks/
│   ├── i18n/
│   ├── lib/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── netlify.toml
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

---

## Final Homepage Structure (17 Sections)

```
1. Hero Section (#hero)
2. Why UKLID PLUS Statement (#why-uklid)
3. Differentiators Section (#why-us)
4. How It Works Section (#how-it-works)
5. Trusted by Expats Section (#expats)
6. Services Section (#services)
7. Recurring Plans Section (#recurring)
8. Pricing Section (#pricing)
9. Airbnb Host Section (#airbnb)
10. Before & After Gallery (#gallery)
11. Google Reviews Section (#reviews)
12. Testimonials Section (#testimonials)
13. FAQ Section (#faq)
14. Service Areas Section (#areas)
15. Contact Section (#contact)
16. Footer
17. Floating WhatsApp Button
```

---

## Phase 1: Project Setup and Foundation

### Task 1: Initialize Vite Project with TypeScript

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `index.html`

- [ ] **Step 1: Create Vite React TypeScript project**

```bash
npm create vite@latest . -- --template react-ts
```

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion
npm install @types/node
```

- [ ] **Step 3: Initialize Tailwind CSS**

```bash
npx tailwindcss init -p
```

- [ ] **Step 4: Update vite.config.ts with path aliases**

- [ ] **Step 5: Update tsconfig.json with path aliases**

- [ ] **Step 6: Commit project setup**

---

### Task 2: Configure Tailwind with Custom Theme

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`

- [ ] **Step 1: Create tailwind.config.ts with custom colors, fonts, animations**

- [ ] **Step 2: Update src/index.css with base styles and component classes**

- [ ] **Step 3: Add Inter font to index.html**

- [ ] **Step 4: Commit Tailwind configuration**

---

### Task 3: Create Folder Structure and Types

**Files:**
- Create: `src/types/index.ts`
- Create: All project directories

- [ ] **Step 1: Create directory structure**

- [ ] **Step 2: Create TypeScript types**

- [ ] **Step 3: Commit folder structure and types**

---

## Phase 2: Configuration Files

### Task 4: Create All Configuration Files

**Files:**
- Create: `src/config/business.ts`
- Create: `src/config/services.ts`
- Create: `src/config/pricing.ts`
- Create: `src/config/differentiators.ts`
- Create: `src/config/howItWorks.ts`
- Create: `src/config/whyUklid.ts`
- Create: `src/config/gallery.ts`
- Create: `src/config/navigation.ts`
- Create: `src/config/theme.ts`
- Create: `src/config/seo.ts`
- Create: `src/config/testimonials.ts`
- Create: `src/config/areas.ts`
- Create: `src/config/reviews.ts`
- Create: `src/data/faq.ts`

- [ ] **Step 1: Create business configuration**

- [ ] **Step 2: Create services configuration**

- [ ] **Step 3: Create pricing configuration**

- [ ] **Step 4: Create differentiators configuration**

- [ ] **Step 5: Create how it works configuration**

- [ ] **Step 6: Create why UKLID configuration**

- [ ] **Step 7: Create gallery configuration**

- [ ] **Step 8: Create navigation configuration**

- [ ] **Step 9: Create SEO configuration with JSON-LD**

- [ ] **Step 10: Create testimonials configuration**

- [ ] **Step 11: Create service areas configuration**

- [ ] **Step 12: Create reviews configuration**

- [ ] **Step 13: Create FAQ data**

- [ ] **Step 14: Commit all configuration files**

---

## Phase 3: UI Components

### Task 5: Create Base UI Components

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Accordion.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Tabs.tsx`
- Create: `src/components/ui/Typography.tsx`

- [ ] **Step 1: Create Button component with variants (primary, secondary, whatsapp, outline)**

- [ ] **Step 2: Create Card component with hover and glow effects**

- [ ] **Step 3: Create Accordion component with Framer Motion**

- [ ] **Step 4: Create Badge component**

- [ ] **Step 5: Create Tabs component for pricing section**

- [ ] **Step 6: Create Typography component**

- [ ] **Step 7: Commit UI components**

---

## Phase 4: Layout Components

### Task 6: Create Layout Components

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/MobileMenu.tsx`
- Create: `src/components/layout/FloatingWhatsApp.tsx`

- [ ] **Step 1: Create Header with navigation and language selector**

- [ ] **Step 2: Create MobileMenu with Framer Motion animations**

- [ ] **Step 3: Create Footer with navigation, contact, languages**

- [ ] **Step 4: Create FloatingWhatsApp button**

- [ ] **Step 5: Commit layout components**

---

## Phase 5: Section Components

### Task 7: Create Hero Section

**Files:**
- Create: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Create HeroSection with logo, headline, taglines, CTAs**

- [ ] **Step 2: Add Framer Motion entrance animations**

- [ ] **Step 3: Add scroll indicator**

- [ ] **Step 4: Commit hero section**

---

### Task 8: Create Why UKLID Section

**Files:**
- Create: `src/components/sections/WhyUklidSection.tsx`

- [ ] **Step 1: Create WhyUklidSection with 4 key points**

- [ ] **Step 2: Commit why UKLID section**

---

### Task 9: Create Differentiators Section

**Files:**
- Create: `src/components/sections/DifferentiatorsSection.tsx`

- [ ] **Step 1: Create DifferentiatorsSection with 7 differentiator cards**

- [ ] **Step 2: Add hover effects and icons**

- [ ] **Step 3: Commit differentiators section**

---

### Task 10: Create How It Works Section

**Files:**
- Create: `src/components/sections/HowItWorksSection.tsx`

- [ ] **Step 1: Create HowItWorksSection with 5 steps**

- [ ] **Step 2: Add numbered steps with icons**

- [ ] **Step 3: Commit how it works section**

---

### Task 11: Create Expats Section

**Files:**
- Create: `src/components/sections/ExpatsSection.tsx`

- [ ] **Step 1: Create ExpatsSection with checklist and visual**

- [ ] **Step 2: Add WhatsApp CTA**

- [ ] **Step 3: Commit expats section**

---

### Task 12: Create Services Section

**Files:**
- Create: `src/components/sections/ServicesSection.tsx`

- [ ] **Step 1: Create ServicesSection with 6 service cards**

- [ ] **Step 2: Add icons and CTAs for each service**

- [ ] **Step 3: Commit services section**

---

### Task 13: Create Recurring Plans Section

**Files:**
- Create: `src/components/sections/RecurringSection.tsx`

- [ ] **Step 1: Create RecurringSection with 3 plan cards**

- [ ] **Step 2: Highlight Premium plan**

- [ ] **Step 3: Commit recurring plans section**

---

### Task 14: Create Pricing Section

**Files:**
- Create: `src/components/sections/PricingSection.tsx`

- [ ] **Step 1: Create PricingSection with tabs (Standard, Deep, Addons)**

- [ ] **Step 2: Create pricing table component**

- [ ] **Step 3: Add special offers cards**

- [ ] **Step 4: Commit pricing section**

---

### Task 15: Create Airbnb Section

**Files:**
- Create: `src/components/sections/AirbnbSection.tsx`

- [ ] **Step 1: Create AirbnbSection with checklist and visual**

- [ ] **Step 2: Add host-focused messaging**

- [ ] **Step 3: Add WhatsApp CTA**

- [ ] **Step 4: Commit Airbnb section**

---

### Task 16: Create Gallery Section

**Files:**
- Create: `src/components/sections/GallerySection.tsx`

- [ ] **Step 1: Create GallerySection with before/after images**

- [ ] **Step 2: Add category filters**

- [ ] **Step 3: Add lightbox for image viewing**

- [ ] **Step 4: Commit gallery section**

---

### Task 17: Create Reviews Section

**Files:**
- Create: `src/components/sections/ReviewsSection.tsx`

- [ ] **Step 1: Create ReviewsSection with Google rating and featured reviews**

- [ ] **Step 2: Add review growth program note**

- [ ] **Step 3: Add link to Google reviews**

- [ ] **Step 4: Commit reviews section**

---

### Task 18: Create Testimonials Section

**Files:**
- Create: `src/components/sections/TestimonialsSection.tsx`

- [ ] **Step 1: Create TestimonialsSection with testimonial cards**

- [ ] **Step 2: Add star ratings**

- [ ] **Step 3: Commit testimonials section**

---

### Task 19: Create FAQ Section

**Files:**
- Create: `src/components/sections/FAQSection.tsx`

- [ ] **Step 1: Create FAQSection with Accordion component**

- [ ] **Step 2: Add all FAQ items**

- [ ] **Step 3: Commit FAQ section**

---

### Task 20: Create Service Areas Section

**Files:**
- Create: `src/components/sections/AreasSection.tsx`

- [ ] **Step 1: Create AreasSection with area cards**

- [ ] **Step 2: Add neighborhoods for each area**

- [ ] **Step 3: Add "Other Prague districts on request" note**

- [ ] **Step 4: Commit areas section**

---

### Task 21: Create Contact Section

**Files:**
- Create: `src/components/sections/ContactSection.tsx`

- [ ] **Step 1: Create ContactSection with WhatsApp primary, Messenger secondary, form tertiary**

- [ ] **Step 2: Add contact form with Netlify Forms integration**

- [ ] **Step 3: Add service area and language info**

- [ ] **Step 4: Commit contact section**

---

## Phase 6: Page Assembly

### Task 22: Create Home Page

**Files:**
- Create: `src/pages/Home.tsx`

- [ ] **Step 1: Create Home page importing all sections**

- [ ] **Step 2: Assemble sections in order**

- [ ] **Step 3: Commit home page**

---

### Task 23: Create App Entry Point

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

- [ ] **Step 1: Create App.tsx with Header, Home, Footer, FloatingWhatsApp**

- [ ] **Step 2: Add SEO component with meta tags and JSON-LD**

- [ ] **Step 3: Commit app entry**

---

## Phase 7: SEO and Public Files

### Task 24: Create Public Files

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `public/favicon.ico` (placeholder)

- [ ] **Step 1: Create robots.txt**

- [ ] **Step 2: Create sitemap.xml**

- [ ] **Step 3: Add favicon placeholder**

- [ ] **Step 4: Commit public files**

---

## Phase 8: Deployment Configuration

### Task 25: Create Netlify Configuration

**Files:**
- Create: `netlify.toml`

- [ ] **Step 1: Create netlify.toml with build settings and redirects**

- [ ] **Step 2: Commit Netlify configuration**

---

### Task 26: Create README

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create README with setup instructions and deployment guide**

- [ ] **Step 2: Commit README**

---

## Phase 9: Build and Test

### Task 27: Build and Validate

- [ ] **Step 1: Run npm run build**

- [ ] **Step 2: Fix any build errors**

- [ ] **Step 3: Test responsive design**

- [ ] **Step 4: Test all sections**

- [ ] **Step 5: Validate SEO meta tags**

- [ ] **Step 6: Final commit**

---

## Spec Coverage Checklist

| Requirement | Task |
|-------------|------|
| Hero with premium messaging | Task 7 |
| Why UKLID statement | Task 8 |
| Differentiators | Task 9 |
| How It Works | Task 10 |
| Trusted by Expats | Task 11 |
| Services | Task 12 |
| Recurring Plans | Task 13 |
| Pricing with tabs | Task 14 |
| Airbnb Host section | Task 15 |
| Before & After Gallery | Task 16 |
| Google Reviews | Task 17 |
| Testimonials | Task 18 |
| FAQ | Task 19 |
| Service Areas | Task 20 |
| Contact with form | Task 21 |
| Responsive design | All sections |
| SEO + JSON-LD | Task 23, 24 |
| Netlify deployment | Task 25 |
| Language selector | Task 6 |
| WhatsApp primary CTA | All sections |
| Configuration-first | Phase 2 |
| TypeScript | All tasks |
| Tailwind CSS | Task 2 |
| Framer Motion | All sections |

---

## Priority Order

1. Trust (Differentiators, Expats section, Reviews, Testimonials)
2. Premium Positioning (Hero, Why UKLID, Gallery)
3. WhatsApp Conversion (Floating button, all CTAs)
4. Expat Focus (Language selector, Expats section, multilingual prep)
5. Recurring Plans (Dedicated section with emphasis)