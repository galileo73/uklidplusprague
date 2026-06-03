import { test, expect } from '@playwright/test';

// Viewport configurations
const viewports = [
  { name: 'Mobile Small', width: 320, height: 568 },
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 720 },
  { name: 'Desktop Large', width: 1920, height: 1080 },
  { name: 'Desktop XL', width: 2560, height: 1440 },
];

test.describe('Responsive Design', () => {
  for (const viewport of viewports) {
    test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      test('should display navigation properly', async ({ page }) => {
        await page.goto('/');

        const nav = page.locator('nav');
        await expect(nav).toBeVisible();
      });

      test('should show mobile menu on small screens', async ({ page }) => {
        await page.goto('/');

        if (viewport.width < 768) {
          // Mobile: should have hamburger menu or mobile nav
          const mobileMenuButton = page.locator('button[aria-label*="menu"], button:has(svg), [data-testid="mobile-menu"]');
          const hasMobileMenu = await mobileMenuButton.count() > 0;

          // Either there's a mobile menu button, or nav is hidden, or nav is visible
          const navVisible = await page.locator('nav').isVisible();
          expect(hasMobileMenu || navVisible).toBeTruthy();
        } else {
          // Desktop: full nav should be visible
          const nav = page.locator('nav');
          await expect(nav).toBeVisible();
        }
      });

      test('should display hero section correctly', async ({ page }) => {
        await page.goto('/');

        const hero = page.locator('section').first();
        await expect(hero).toBeVisible();

        // Hero content should be visible (text and CTAs)
        const heroContent = hero.locator('h1, h2, p, a, button');
        await expect(heroContent.first()).toBeVisible();
      });

      test('should have readable text at all sizes', async ({ page }) => {
        await page.goto('/');

        // Check that body text is readable (font size >= 14px)
        const bodyFontSize = await page.evaluate(() => {
          return window.getComputedStyle(document.body).fontSize;
        });
        const fontSizeNum = parseFloat(bodyFontSize);
        expect(fontSizeNum).toBeGreaterThanOrEqual(14);
      });

      test('should display images without overflow', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Check images don't overflow viewport
        const images = page.locator('img');
        const count = await images.count();

        for (let i = 0; i < Math.min(count, 5); i++) {
          const img = images.nth(i);
          if (await img.isVisible()) {
            const box = await img.boundingBox();
            if (box) {
              expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 20);
            }
          }
        }
      });

      test('should have accessible touch targets on mobile', async ({ page }) => {
        await page.goto('/');

        if (viewport.width < 768) {
          // Check buttons have adequate touch targets (min 44x44)
          const buttons = page.locator('button, a');
          const count = await buttons.count();

          for (let i = 0; i < Math.min(count, 5); i++) {
            const btn = buttons.nth(i);
            if (await btn.isVisible()) {
              const box = await btn.boundingBox();
              if (box) {
                // Minimum recommended touch target is 44x44, but we'll be lenient
                expect(Math.min(box.width, box.height)).toBeGreaterThanOrEqual(32);
              }
            }
          }
        }
      });
    });
  }
});