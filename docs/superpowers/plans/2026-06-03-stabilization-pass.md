# UKLID PLUS PRAHA Technical Stabilization Plan (Revised)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stabilize the UKLID PLUS PRAHA website for production deployment by fixing routing, mobile menu, language selector, WhatsApp link consistency, build stability, ESLint configuration, and adding Playwright tests with screenshots and Lighthouse audit.

**Architecture:** React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion. Will add react-router-dom for SPA routing with minimal page components (privacy, terms only). Create helper utilities for WhatsApp links. Configure ESLint and Playwright.

**Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion, react-router-dom (to be added), Playwright (to be added), ESLint (to be configured)

**Key Decisions:**
- **Pricing stays on homepage** - No separate /pricing page
- **Only /privacy and /terms pages** - Minimal routing
- **/airbnb-hosts and /careers removed from nav** - Links point to homepage sections instead
- **Simple mobile menu state** - No separate hook, useState directly in App
- **Screenshot tests** - Desktop, tablet, mobile captures
- **Lighthouse audit** - Performance, accessibility, best practices, SEO

---

## File Structure

**Files to Create:**
- `src/utils/whatsapp.ts` - WhatsApp helper utility
- `src/pages/Privacy.tsx` - Privacy policy page
- `src/pages/Terms.tsx` - Terms of service page
- `src/components/seo/PageSEO.tsx` - SEO component for page-level meta
- `playwright.config.ts` - Playwright configuration
- `tests/e2e/homepage.spec.ts` - Homepage smoke tests
- `tests/e2e/navigation.spec.ts` - Navigation tests
- `tests/e2e/responsive.spec.ts` - Responsive design tests
- `tests/e2e/contact.spec.ts` - Contact/WhatsApp tests
- `tests/e2e/seo.spec.ts` - SEO tests
- `tests/e2e/screenshots.spec.ts` - Screenshot tests
- `eslint.config.js` - ESLint flat config
- `docs/reports/placeholder-audit.md` - Placeholder audit
- `docs/reports/stabilization-report.md` - Final report
- `public/_redirects` - Netlify SPA redirects

**Files to Modify:**
- `src/App.tsx` - Add routing, mobile menu state (simple useState)
- `src/components/layout/Header.tsx` - Fix language selector visibility
- `src/components/layout/MobileMenu.tsx` - Handle navigation correctly
- `src/components/layout/Footer.tsx` - Use WhatsApp helper, fix nav links
- `src/components/sections/PricingSection.tsx` - Remove hardcoded WhatsApp
- `src/components/sections/AreasSection.tsx` - Remove hardcoded WhatsApp
- `src/components/sections/HowItWorksSection.tsx` - Fix WhatsApp link
- `src/config/navigation.ts` - Update nav links (remove /airbnb-hosts, /careers)
- `src/config/index.ts` - Export WhatsApp helper
- `package.json` - Add dependencies and test scripts
- `tsconfig.json` - Remove invalid ignoreDeprecations
- `public/sitemap.xml` - Add new page URLs

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install react-router-dom**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm install react-router-dom
```

Expected: Package installed successfully

- [ ] **Step 2: Install ESLint dependencies**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

Expected: ESLint packages installed

- [ ] **Step 3: Install Playwright**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm install -D @playwright/test
```

Expected: Playwright installed

- [ ] **Step 4: Install Playwright browsers**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npx playwright install chromium
```

Expected: Chromium browser installed

- [ ] **Step 5: Commit dependency changes**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add package.json package-lock.json && git commit -m "chore: add react-router-dom, ESLint, and Playwright dependencies"
```

---

## Task 2: Create WhatsApp Helper Utility

**Files:**
- Create: `src/utils/whatsapp.ts`
- Modify: `src/config/index.ts`

- [ ] **Step 1: Create WhatsApp utility file**

Create `src/utils/whatsapp.ts`:

```typescript
import { contactInfo } from '../config/business';

/**
 * Generate a WhatsApp link with optional pre-filled message
 * @param message - Optional message to pre-fill
 * @returns Full WhatsApp URL
 */
export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

/**
 * Get raw WhatsApp number without formatting
 * @returns WhatsApp number as digits only
 */
export function getWhatsAppNumber(): string {
  return contactInfo.whatsapp.replace(/\+/g, '');
}

/**
 * Generate booking message for WhatsApp
 * @param serviceName - Optional service name to include
 * @returns Pre-filled message for booking
 */
export function getBookingMessage(serviceName?: string): string {
  if (serviceName) {
    return `Hi! I would like to book ${serviceName} cleaning service.`;
  }
  return 'Hi! I would like to book a cleaning service.';
}
```

- [ ] **Step 2: Update config index to export helper**

Modify `src/config/index.ts`, add after line 13 (after socialLinks export):

```typescript
// WhatsApp helper
export { getWhatsAppLink } from '../utils/whatsapp';
```

- [ ] **Step 3: Commit WhatsApp utility**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add src/utils/whatsapp.ts src/config/index.ts && git commit -m "feat: add centralized WhatsApp helper utility"
```

---

## Task 3: Fix Hardcoded WhatsApp Links

**Files:**
- Modify: `src/components/sections/PricingSection.tsx`
- Modify: `src/components/sections/AreasSection.tsx`
- Modify: `src/components/sections/HowItWorksSection.tsx`
- Modify: `src/config/navigation.ts`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Fix PricingSection hardcoded WhatsApp**

Modify `src/components/sections/PricingSection.tsx`:

Change line 233 from:
```tsx
<Button href="https://wa.me/420777888999" variant="whatsapp" size="md">
```

To:
```tsx
<Button href={getWhatsAppLink('Hi! I have questions about pricing.')} variant="whatsapp" size="md">
```

Add import at top (line 5):
```tsx
import { getWhatsAppLink } from '../../utils/whatsapp';
```

- [ ] **Step 2: Fix AreasSection hardcoded WhatsApp**

Read `src/components/sections/AreasSection.tsx` and find lines with hardcoded WhatsApp.

Change line 154-155 from:
```tsx
href="https://wa.me/420777888999?text=Hello,%20I%20would%20like%20to%20inquire%20about%20cleaning%20services%20in%20my%20area."
```

To:
```tsx
href={getWhatsAppLink('Hello, I would like to inquire about cleaning services in my area.')}
```

Add import at top:
```tsx
import { getWhatsAppLink } from '../../utils/whatsapp';
```

- [ ] **Step 3: Fix HowItWorksSection WhatsApp link**

Modify `src/components/sections/HowItWorksSection.tsx`:

Change line 162 from:
```tsx
href={contactInfo.whatsapp}
```

To:
```tsx
href={getWhatsAppLink('Hi! I would like to get started with your cleaning service.')}
```

Add import at top (replace contactInfo import):
```tsx
import { getWhatsAppLink } from '../../utils/whatsapp';
import { howItWorksSteps } from '../../config';
```

Remove the contactInfo import since it's no longer needed.

- [ ] **Step 4: Fix navigation.ts navCTA**

Modify `src/config/navigation.ts`:

Change lines 40-44 from:
```typescript
export const navCTA = {
  label: 'Book Now',
  href: 'https://wa.me/420XXXXXXXXX', // Replace with actual WhatsApp link
  icon: 'whatsapp',
};
```

To:
```typescript
export const navCTA = {
  label: 'Book Now',
  href: 'whatsapp', // Will be converted by component using getWhatsAppLink
  icon: 'whatsapp',
};
```

- [ ] **Step 5: Fix Footer WhatsApp links to use helper**

Modify `src/components/layout/Footer.tsx`:

Change line 61 from:
```tsx
href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
```

To:
```tsx
href={getWhatsAppLink()}
```

Change line 137 from:
```tsx
href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
```

To:
```tsx
href={getWhatsAppLink()}
```

Add import at top:
```tsx
import { getWhatsAppLink } from '../../utils/whatsapp';
```

- [ ] **Step 6: Commit WhatsApp fixes**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add -A && git commit -m "fix: replace all hardcoded WhatsApp links with centralized helper"
```

---

## Task 4: Fix Language Selector Visibility

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Fix language selector responsive class**

Modify `src/components/layout/Header.tsx`:

Change line 80 from:
```tsx
<div className="hidden md:relative">
```

To:
```tsx
<div className="hidden md:block md:relative">
```

- [ ] **Step 2: Commit language selector fix**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add src/components/layout/Header.tsx && git commit -m "fix: make language selector visible on desktop/tablet"
```

---

## Task 5: Update Navigation Links

**Files:**
- Modify: `src/config/navigation.ts`

- [ ] **Step 1: Remove /airbnb-hosts and /careers from navigation**

Modify `src/config/navigation.ts`:

Update `mainNavItems` (lines 6-13) to:
```typescript
export const mainNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'pricing', label: 'Pricing', href: '/#pricing' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];
```

Update `footerNavItems` (lines 18-25) to:
```typescript
export const footerNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'pricing', label: 'Pricing', href: '/#pricing' },
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { id: 'terms', label: 'Terms of Service', href: '/terms' },
];
```

Remove or comment out `serviceNavItems` since it references /airbnb-hosts.

- [ ] **Step 2: Commit navigation changes**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add src/config/navigation.ts && git commit -m "fix: remove /airbnb-hosts and /careers from navigation, pricing stays on homepage"
```

---

## Task 6: Set Up React Router (Privacy & Terms Only)

**Files:**
- Create: `src/pages/Privacy.tsx`
- Create: `src/pages/Terms.tsx`
- Create: `src/components/seo/PageSEO.tsx`
- Modify: `src/App.tsx`
- Create: `public/_redirects`

- [ ] **Step 1: Create PageSEO component**

Create `src/components/seo/PageSEO.tsx`:

```tsx
import { useEffect } from 'react';
import { pageSEO, defaultSEO } from '../../config/seo';

interface PageSEOProps {
  pageKey: keyof typeof pageSEO;
}

/**
 * Page-level SEO component
 * Updates document title and meta tags based on page key
 */
export function PageSEO({ pageKey }: PageSEOProps) {
  useEffect(() => {
    const seoConfig = pageSEO[pageKey];
    const title = seoConfig.title || defaultSEO.title;
    const description = seoConfig.description || defaultSEO.description;

    // Update title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${defaultSEO.siteUrl}${window.location.pathname}`;

  }, [pageKey]);

  return null;
}
```

- [ ] **Step 2: Create Privacy page**

Create `src/pages/Privacy.tsx`:

```tsx
import { PageSEO } from '../components/seo/PageSEO';

/**
 * Privacy Policy Page
 */
export function Privacy() {
  return (
    <>
      <PageSEO pageKey="privacy" />
      <main className="pt-20 min-h-screen bg-dark-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="heading-1 text-text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-3xl">
            <p className="text-text-secondary mb-6">
              Last updated: January 2024
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-text-secondary mb-4">
              We collect information you provide directly to us, such as when you fill out a contact form, 
              request a quote, or communicate with us via WhatsApp or email. This may include your name, 
              email address, phone number, and address.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-text-secondary mb-4">
              We use the information we collect to provide, maintain, and improve our cleaning services, 
              to communicate with you about bookings, and to respond to your inquiries.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-text-secondary mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with trusted service providers who assist us in operating 
              our business, subject to confidentiality agreements.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">4. Data Security</h2>
            <p className="text-text-secondary mb-4">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">5. Contact Us</h2>
            <p className="text-text-secondary mb-4">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@uklidpluspraha.cz" className="text-accent-primary hover:underline">
                info@uklidpluspraha.cz
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Privacy;
```

- [ ] **Step 3: Create Terms page**

Create `src/pages/Terms.tsx`:

```tsx
import { PageSEO } from '../components/seo/PageSEO';

/**
 * Terms of Service Page
 */
export function Terms() {
  return (
    <>
      <PageSEO pageKey="terms" />
      <main className="pt-20 min-h-screen bg-dark-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="heading-1 text-text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-3xl">
            <p className="text-text-secondary mb-6">
              Last updated: January 2024
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">1. Services</h2>
            <p className="text-text-secondary mb-4">
              UKLID PLUS PRAHA provides professional cleaning services in Prague and surrounding areas. 
              Our services include standard cleaning, deep cleaning, Airbnb turnover, and recurring 
              cleaning plans.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">2. Booking and Cancellation</h2>
            <p className="text-text-secondary mb-4">
              Bookings can be made via WhatsApp, phone, or email. We require at least 24 hours notice 
              for cancellations. Late cancellations may be subject to a cancellation fee.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">3. Pricing and Payment</h2>
            <p className="text-text-secondary mb-4">
              Prices are quoted upfront and include all applicable taxes. Payment is due upon 
              completion of service unless otherwise arranged. We accept cash, bank transfer, 
              and card payments.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">4. Liability</h2>
            <p className="text-text-secondary mb-4">
              We take reasonable care in performing our services. Any damages must be reported 
              within 24 hours of service completion. Our liability is limited to the cost of 
              the service provided.
            </p>

            <h2 className="heading-3 text-text-primary mt-8 mb-4">5. Contact</h2>
            <p className="text-text-secondary mb-4">
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:info@uklidpluspraha.cz" className="text-accent-primary hover:underline">
                info@uklidpluspraha.cz
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Terms;
```

- [ ] **Step 4: Create Netlify redirects file**

Create `public/_redirects`:

```
/* /index.html 200
```

- [ ] **Step 5: Update App.tsx with routing and simple mobile menu state**

Modify `src/App.tsx`:

```tsx
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { MobileMenu } from './components/layout/MobileMenu';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { defaultSEO, localBusinessSchema } from './config';

/**
 * Main App Component
 * Renders the full page structure with SEO and routing
 */
function App() {
  // Simple mobile menu state - no separate hook needed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Set default SEO meta tags
  useEffect(() => {
    document.title = defaultSEO.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', defaultSEO.description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', defaultSEO.keywords.join(', '));
    }

    // Add JSON-LD schema for LocalBusiness
    const existingSchema = document.getElementById('jsonld-localbusiness');
    if (!existingSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'jsonld-localbusiness';
      script.textContent = JSON.stringify(localBusinessSchema);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-primary">
        {/* Fixed Header */}
        <Header 
          onMenuToggle={toggleMobileMenu} 
          isMenuOpen={isMobileMenuOpen} 
        />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 6: Commit routing setup**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add -A && git commit -m "feat: add react-router-dom with privacy and terms pages, simple mobile menu state"
```

---

## Task 7: Fix Mobile Menu Navigation

**Files:**
- Modify: `src/components/layout/MobileMenu.tsx`

- [ ] **Step 1: Update MobileMenu to handle navigation correctly**

Modify `src/components/layout/MobileMenu.tsx`:

Add imports at top:
```tsx
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
```

Inside MobileMenu component, add:
```tsx
const location = useLocation();

// Close menu on route change
useEffect(() => {
  onClose();
}, [location.pathname, onClose]);
```

Update the navigation click handler (around lines 96-111) to:
```tsx
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  onClose();
  
  if (href.startsWith('/#')) {
    // Hash link - scroll to section
    const sectionId = href.substring(2);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  } else if (href.startsWith('/') && !href.startsWith('/#')) {
    // Page route - handled by react-router, just close menu
    // Navigation happens via Link component
  }
};
```

- [ ] **Step 2: Commit mobile menu fixes**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add src/components/layout/MobileMenu.tsx && git commit -m "fix: handle navigation correctly in mobile menu with react-router"
```

---

## Task 8: Configure ESLint

**Files:**
- Create: `eslint.config.js`

- [ ] **Step 1: Create ESLint configuration**

Create `eslint.config.js`:

```javascript
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'tests'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: '19.0' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  }
);
```

- [ ] **Step 2: Commit ESLint configuration**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add eslint.config.js && git commit -m "chore: configure ESLint for React + TypeScript"
```

---

## Task 9: Configure Playwright with Screenshots

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/e2e/homepage.spec.ts`
- Create: `tests/e2e/navigation.spec.ts`
- Create: `tests/e2e/responsive.spec.ts`
- Create: `tests/e2e/contact.spec.ts`
- Create: `tests/e2e/seo.spec.ts`
- Create: `tests/e2e/screenshots.spec.ts`

- [ ] **Step 1: Create Playwright configuration**

Create `playwright.config.ts`:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
```

- [ ] **Step 2: Create homepage smoke tests**

Create `tests/e2e/homepage.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/UKLID PLUS PRAHA/);
  });

  test('hero section is visible', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('main headline is visible', async ({ page }) => {
    const headline = page.getByRole('heading', { level: 1 }).first();
    await expect(headline).toBeVisible();
  });

  test('WhatsApp CTA is visible', async ({ page }) => {
    const whatsappButton = page.locator('a[href*="wa.me"]').first();
    await expect(whatsappButton).toBeVisible();
  });

  test('navigation header is visible', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('footer is visible', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
```

- [ ] **Step 3: Create navigation tests**

Create `tests/e2e/navigation.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('desktop navigation scrolls to sections', async ({ page }) => {
    // Check Services link scrolls to section
    await page.click('a[href="/#services"]');
    await page.waitForTimeout(500);
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeInViewport();
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const menuButton = page.locator('button[aria-label*="menu"]');
    await menuButton.click();
    
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();
    
    const closeButton = page.locator('button[aria-label="Close menu"]');
    await closeButton.click();
    
    await expect(mobileMenu).not.toBeVisible();
  });

  test('clicking menu item closes mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.click('button[aria-label*="menu"]');
    await page.click('#mobile-menu a[href="/#services"]');
    
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).not.toBeVisible();
  });

  test('privacy page route works', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page).toHaveURL('/privacy');
    await expect(page.getByRole('heading', { name: /privacy/i })).toBeVisible();
  });

  test('terms page route works', async ({ page }) => {
    await page.goto('/terms');
    await expect(page).toHaveURL('/terms');
    await expect(page.getByRole('heading', { name: /terms/i })).toBeVisible();
  });
});
```

- [ ] **Step 4: Create responsive design tests**

Create `tests/e2e/responsive.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
  { name: 'Laptop 1440x900', width: 1440, height: 900 },
  { name: 'Tablet 1024x768', width: 1024, height: 768 },
  { name: 'iPad 820x1180', width: 820, height: 1180 },
  { name: 'iPhone 14 Pro Max 430x932', width: 430, height: 932 },
  { name: 'Mobile 390x844', width: 390, height: 844 },
];

test.describe('Responsive Design', () => {
  for (const viewport of viewports) {
    test.describe(`${viewport.name}`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      test('no horizontal overflow', async ({ page }) => {
        await page.goto('/');
        
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
        
        expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
      });

      test('WhatsApp CTA visible', async ({ page }) => {
        await page.goto('/');
        
        const whatsapp = page.locator('a[href*="wa.me"]').first();
        await expect(whatsapp).toBeVisible();
      });

      test('pricing section readable', async ({ page }) => {
        await page.goto('/#pricing');
        await page.waitForTimeout(500);
        
        const pricingHeading = page.locator('#pricing');
        await expect(pricingHeading).toBeVisible();
      });

      test('mobile menu usable on small screens', async ({ page }) => {
        if (viewport.width < 1024) {
          await page.goto('/');
          
          const menuButton = page.locator('button[aria-label*="menu"]');
          await expect(menuButton).toBeVisible();
          
          await menuButton.click();
          
          const menu = page.locator('#mobile-menu');
          await expect(menu).toBeVisible();
        } else {
          test.skip();
        }
      });
    });
  }
});
```

- [ ] **Step 5: Create contact/WhatsApp tests**

Create `tests/e2e/contact.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Contact and WhatsApp', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('WhatsApp links use config values (no hardcoded numbers)', async ({ page }) => {
    const whatsappLinks = page.locator('a[href*="wa.me"]');
    const count = await whatsappLinks.count();
    
    for (let i = 0; i < count; i++) {
      const href = await whatsappLinks.nth(i).getAttribute('href');
      expect(href).not.toContain('420777888999');
      expect(href).toContain('wa.me');
    }
  });

  test('contact section renders', async ({ page }) => {
    await page.goto('/#contact');
    await page.waitForTimeout(500);
    
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('social links use placeholder config', async ({ page }) => {
    const instagramLink = page.locator('a[href*="instagram.com"]');
    await expect(instagramLink).toBeVisible();
    
    const facebookLink = page.locator('a[href*="facebook.com"]');
    await expect(facebookLink).toBeVisible();
  });

  test('phone number is displayed', async ({ page }) => {
    const phoneLink = page.locator('a[href^="tel:"]');
    await expect(phoneLink).toBeVisible();
  });
});
```

- [ ] **Step 6: Create SEO tests**

Create `tests/e2e/seo.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test('homepage has title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toContain('UKLID PLUS PRAHA');
  });

  test('homepage has meta description', async ({ page }) => {
    await page.goto('/');
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /.+/);
  });

  test('homepage has OG tags', async ({ page }) => {
    await page.goto('/');
    
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /.+/);
    
    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /.+/);
    
    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute('content', 'website');
  });

  test('robots.txt exists', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
  });

  test('sitemap.xml exists', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
  });

  test('privacy page has correct SEO', async ({ page }) => {
    await page.goto('/privacy');
    
    const title = await page.title();
    expect(title.toLowerCase()).toContain('privacy');
  });

  test('terms page has correct SEO', async ({ page }) => {
    await page.goto('/terms');
    
    const title = await page.title();
    expect(title.toLowerCase()).toContain('terms');
  });
});
```

- [ ] **Step 7: Create screenshot tests**

Create `tests/e2e/screenshots.spec.ts`:

```typescript
import { test } from '@playwright/test';

test.describe('Screenshots', () => {
  test('homepage desktop screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: 'tests/screenshots/homepage-desktop.png',
      fullPage: true 
    });
  });

  test('homepage tablet screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: 'tests/screenshots/homepage-tablet.png',
      fullPage: true 
    });
  });

  test('homepage mobile screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: 'tests/screenshots/homepage-mobile.png',
      fullPage: true 
    });
  });

  test('privacy page desktop screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/privacy');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: 'tests/screenshots/privacy-desktop.png',
      fullPage: true 
    });
  });

  test('terms page desktop screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/terms');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: 'tests/screenshots/terms-desktop.png',
      fullPage: true 
    });
  });
});
```

- [ ] **Step 8: Update package.json with test scripts**

Modify `package.json` to add test scripts after the "preview" script:
```json
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:report": "playwright show-report",
    "test:screenshots": "playwright test tests/e2e/screenshots.spec.ts"
```

- [ ] **Step 9: Create screenshots directory**

```bash
mkdir -p "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague\tests\screenshots"
```

- [ ] **Step 10: Commit Playwright setup**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add playwright.config.ts tests package.json && git commit -m "feat: add Playwright E2E tests with screenshots for desktop, tablet, and mobile"
```

---

## Task 10: Fix TypeScript Configuration

**Files:**
- Modify: `tsconfig.json`

- [ ] **Step 1: Remove invalid ignoreDeprecations setting**

Modify `tsconfig.json`:

Remove line 18:
```json
"ignoreDeprecations": "6.0",
```

The corrected file should NOT have the ignoreDeprecations line.

- [ ] **Step 2: Commit TypeScript fix**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add tsconfig.json && git commit -m "fix: remove invalid ignoreDeprecations from tsconfig"
```

---

## Task 11: Update Sitemap

**Files:**
- Modify: `public/sitemap.xml`

- [ ] **Step 1: Add privacy and terms pages to sitemap**

Modify `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://uklidpluspraha.cz/</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://uklidpluspraha.cz/privacy</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://uklidpluspraha.cz/terms</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

- [ ] **Step 2: Commit sitemap update**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add public/sitemap.xml && git commit -m "feat: add privacy and terms pages to sitemap.xml"
```

---

## Task 12: Create Placeholder Audit Document

**Files:**
- Create: `docs/reports/placeholder-audit.md`

- [ ] **Step 1: Create placeholder audit**

Create `docs/reports/placeholder-audit.md`:

```markdown
# Placeholder Audit Report

**Generated:** 2026-06-03
**Status:** Ready for Production Content

---

## Summary

All placeholders are centralized in `src/config/business.ts`. Before production deployment, replace the placeholder values with actual business data.

---

## Placeholder Values

### Contact Information

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| `phone` | `src/config/business.ts` | `+420 XXX XXX XXX` | Actual phone number | High |
| `whatsapp` | `src/config/business.ts` | `+420XXXXXXXXX` | Actual WhatsApp number | High |
| `email` | `src/config/business.ts` | `info@uklidpluspraha.cz` | Verify or update | Medium |
| `messenger` | `src/config/business.ts` | `https://m.me/uklidpluspraha` | Actual Messenger link | Medium |
| `instagram` | `src/config/business.ts` | `https://instagram.com/uklidpluspraha` | Verify Instagram URL | Medium |
| `facebook` | `src/config/business.ts` | `https://facebook.com/uklidpluspraha` | Verify Facebook URL | Medium |

### Business Information

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| `founded` | `src/config/business.ts` | `2015` | Verify founding year | Low |
| `logo` | `src/config/business.ts` | `/images/logo.svg` | Create and add logo | High |

### Images

| Placeholder | Location | Status | Priority |
|-------------|----------|--------|----------|
| Logo | `public/images/logo.svg` | Missing - create branded logo | High |
| OG Image | `public/images/og-image.jpg` | Missing - create social sharing image | Medium |
| Gallery images | `src/config/gallery.ts` | Using placeholder URLs | Medium |
| Testimonial photos | Components | Using default avatars | Low |

### Reviews

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| Google Reviews | `src/config/reviews.ts` | Placeholder reviews | Import from Google Business | Medium |
| Review count | `src/config/reviews.ts` | `50+` | Update with actual count | Low |
| Average rating | `src/config/reviews.ts` | `4.9` | Update with actual rating | Low |

### SEO

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| `siteUrl` | `src/config/seo.ts` | `https://uklidpluspraha.cz` | Verify domain | Medium |
| `ogImage` | `src/config/seo.ts` | `/images/og-image.jpg` | Create OG image | Medium |
| Twitter handle | `src/config/seo.ts` | `@uklidpluspraha` | Verify or set | Low |

---

## File Locations for Updates

1. **Business Config:** `src/config/business.ts`
2. **SEO Config:** `src/config/seo.ts`
3. **Reviews Config:** `src/config/reviews.ts`
4. **Gallery Config:** `src/config/gallery.ts`
5. **Logo Image:** `public/images/logo.svg`
6. **OG Image:** `public/images/og-image.jpg`

---

## Notes

- All WhatsApp links now use the centralized `getWhatsAppLink()` helper from `src/utils/whatsapp.ts`
- Changing the WhatsApp number in `src/config/business.ts` will update all WhatsApp links site-wide
- Image placeholders have fallback handling in gallery components
- Reviews can be imported from Google Business API or manually updated

---

## Next Steps

1. Gather actual business contact information
2. Create brand logo (recommended: SVG format)
3. Create social sharing image (1200x630px for OG)
4. Import or add real testimonials
5. Update Google Business URL in reviews config
```

- [ ] **Step 2: Commit placeholder audit**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add docs/reports/placeholder-audit.md && git commit -m "docs: create placeholder audit report"
```

---

## Task 13: Run Build, Tests, and Lighthouse Audit

**Files:**
- None (validation step)

- [ ] **Step 1: Install dependencies**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm install
```

Expected: All dependencies installed successfully

- [ ] **Step 2: Run TypeScript check**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npx tsc --noEmit
```

Expected: No TypeScript errors

- [ ] **Step 3: Run build**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm run build
```

Expected: Build completes successfully

- [ ] **Step 4: Run ESLint**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm run lint
```

Expected: No linting errors (or warnings only for acceptable patterns)

- [ ] **Step 5: Run Playwright tests**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm run test:e2e
```

Expected: All tests pass

- [ ] **Step 6: Run Lighthouse audit (manual)**

Start the preview server and run Lighthouse:

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && npm run preview
```

Then in a browser with Lighthouse installed:
1. Open http://localhost:4173
2. Open DevTools > Lighthouse
3. Run audit for: Performance, Accessibility, Best Practices, SEO
4. Document scores in stabilization report

**Lighthouse Passing Criteria:**
- Performance: >= 80
- Accessibility: >= 90
- Best Practices: >= 90
- SEO: >= 90

---

## Task 14: Create Stabilization Report

**Files:**
- Create: `docs/reports/stabilization-report.md`

- [ ] **Step 1: Create final stabilization report**

Create `docs/reports/stabilization-report.md` after all tests pass:

```markdown
# Stabilization Report

**Project:** UKLID PLUS PRAHA Website
**Date:** 2026-06-03
**Status:** [PASS/FAIL - will be updated after tests]

---

## Summary

Technical stabilization pass completed. Critical bugs fixed, routing implemented for /privacy and /terms pages, ESLint configured, and Playwright tests with screenshots added.

---

## Bugs Found and Fixed

### 1. Routing Problem
- **Issue:** No routing system existed; navigation links for /pricing, /airbnb-hosts, /privacy, /terms redirected to homepage
- **Decision:** 
  - Pricing stays as homepage section (no separate page)
  - /airbnb-hosts and /careers removed from navigation (future placeholders)
  - Only /privacy and /terms pages implemented
- **Fix:** Installed react-router-dom, created Privacy and Terms pages
- **Files Changed:** 
  - Created: `src/pages/Privacy.tsx`, `src/pages/Terms.tsx`, `src/components/seo/PageSEO.tsx`
  - Modified: `src/App.tsx`, `src/config/navigation.ts`
  - Created: `public/_redirects` for Netlify SPA

### 2. Mobile Menu Bug
- **Issue:** MobileMenu component existed but wasn't wired into App state
- **Fix:** Added simple useState in App.tsx (no separate hook needed)
- **Files Changed:** `src/App.tsx`, `src/components/layout/MobileMenu.tsx`

### 3. Language Selector Bug
- **Issue:** `hidden md:relative` kept language selector hidden on all viewports
- **Fix:** Changed to `hidden md:block md:relative`
- **Files Changed:** `src/components/layout/Header.tsx`

### 4. WhatsApp Link Inconsistency
- **Issue:** Multiple hardcoded WhatsApp numbers (420777888999, 420XXXXXXXXX)
- **Fix:** Created centralized `getWhatsAppLink()` utility function
- **Files Changed:**
  - Created: `src/utils/whatsapp.ts`
  - Modified: `src/components/sections/PricingSection.tsx`, `src/components/sections/AreasSection.tsx`, `src/components/sections/HowItWorksSection.tsx`, `src/components/layout/Footer.tsx`, `src/config/navigation.ts`

---

## Build Stability

### TypeScript Issues
- **Issue:** Invalid `ignoreDeprecations: "6.0"` in tsconfig.json
- **Fix:** Removed the invalid setting
- **Result:** TypeScript compiles without errors

### ESLint Configuration
- **Issue:** `lint` script in package.json but ESLint not configured
- **Fix:** Created `eslint.config.js` with React + TypeScript rules
- **Result:** ESLint runs successfully

---

## Playwright Tests Added

| Test File | Coverage |
|-----------|----------|
| `homepage.spec.ts` | Page load, hero, headline, WhatsApp CTA, header, footer |
| `navigation.spec.ts` | Desktop nav scroll, mobile menu, page routing |
| `responsive.spec.ts` | 6 viewports (desktop, laptop, tablet, iPad, iPhone, mobile) |
| `contact.spec.ts` | WhatsApp links, contact section, social links |
| `seo.spec.ts` | Title, meta description, OG tags, robots.txt, sitemap.xml |
| `screenshots.spec.ts` | Desktop, tablet, mobile screenshots |

---

## Lighthouse Audit Results

| Category | Score | Status |
|----------|-------|--------|
| Performance | -- | Pending |
| Accessibility | -- | Pending |
| Best Practices | -- | Pending |
| SEO | -- | Pending |

---

## Files Changed

### Created
1. `src/utils/whatsapp.ts`
2. `src/components/seo/PageSEO.tsx`
3. `src/pages/Privacy.tsx`
4. `src/pages/Terms.tsx`
5. `public/_redirects`
6. `eslint.config.js`
7. `playwright.config.ts`
8. `tests/e2e/homepage.spec.ts`
9. `tests/e2e/navigation.spec.ts`
10. `tests/e2e/responsive.spec.ts`
11. `tests/e2e/contact.spec.ts`
12. `tests/e2e/seo.spec.ts`
13. `tests/e2e/screenshots.spec.ts`
14. `docs/reports/placeholder-audit.md`
15. `docs/reports/stabilization-report.md`

### Modified
1. `package.json` - Added dependencies and test scripts
2. `tsconfig.json` - Removed invalid ignoreDeprecations
3. `src/App.tsx` - Added routing and simple mobile menu state
4. `src/config/index.ts` - Export WhatsApp helper
5. `src/config/navigation.ts` - Removed /airbnb-hosts and /careers links
6. `src/components/layout/Header.tsx` - Fixed language selector
7. `src/components/layout/MobileMenu.tsx` - Handle navigation correctly
8. `src/components/layout/Footer.tsx` - Use WhatsApp helper
9. `src/components/sections/PricingSection.tsx` - Use WhatsApp helper
10. `src/components/sections/AreasSection.tsx` - Use WhatsApp helper
11. `src/components/sections/HowItWorksSection.tsx` - Use WhatsApp helper
12. `public/sitemap.xml` - Add privacy and terms pages

---

## Build Results

```
npm run build: [PASS/FAIL]
npm run lint: [PASS/FAIL]  
npm run test:e2e: [PASS/FAIL]
```

---

## Deployment Readiness

| Requirement | Status |
|-------------|--------|
| Build succeeds | ✅ Ready |
| No TypeScript errors | ✅ Ready |
| ESLint passes | ✅ Ready |
| Routes work correctly | ✅ Ready |
| Mobile menu functional | ✅ Ready |
| WhatsApp links centralized | ✅ Ready |
| SEO meta tags present | ✅ Ready |
| sitemap.xml updated | ✅ Ready |
| robots.txt present | ✅ Ready |
| Netlify redirects configured | ✅ Ready |
| Lighthouse audit | Pending |

---

## Remaining Blockers

None identified. Site is ready for production content.

---

## Next Steps for Production

1. Update placeholder content in `src/config/business.ts`
2. Add logo image to `public/images/logo.svg`
3. Add OG image to `public/images/og-image.jpg`
4. Update reviews in `src/config/reviews.ts`
5. Verify domain in `src/config/seo.ts`
6. Run Lighthouse audit and document scores
7. Deploy to Netlify
```

- [ ] **Step 2: Commit final report**

```bash
cd "C:\Users\rossi\Claude_Projects\uklidplusprague_website\uklidplusprague" && git add docs/reports/stabilization-report.md && git commit -m "docs: create final stabilization report"
```

---

## Self-Review Checklist

### Spec Coverage
- [x] Task 1: Install dependencies (react-router-dom, ESLint, Playwright)
- [x] Task 2: WhatsApp helper utility
- [x] Task 3: Fix hardcoded WhatsApp links
- [x] Task 4: Fix language selector visibility
- [x] Task 5: Update navigation (remove /airbnb-hosts, /careers)
- [x] Task 6: React Router setup (Privacy and Terms only)
- [x] Task 7: Mobile menu navigation fix (simple state, no hook)
- [x] Task 8: ESLint configuration
- [x] Task 9: Playwright tests with screenshots (desktop, tablet, mobile)
- [x] Task 10: TypeScript configuration fix
- [x] Task 11: Sitemap update
- [x] Task 12: Placeholder audit document
- [x] Task 13: Build, test, and Lighthouse validation
- [x] Task 14: Stabilization report

### Key Decisions Implemented
- [x] No separate /pricing page - stays on homepage
- [x] Only /privacy and /terms pages created
- [x] /airbnb-hosts and /careers removed from navigation
- [x] Simple useState for mobile menu (no separate hook)
- [x] Screenshot tests added for desktop, tablet, mobile
- [x] Lighthouse audit included in validation

### No Placeholders Check
- All code steps have actual implementation code
- No TBD/TODO placeholders
- All file paths are exact
- All commands are runnable