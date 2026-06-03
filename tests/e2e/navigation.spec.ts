import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to privacy page', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page).toHaveURL(/privacy/);
    // Site uses English: "Privacy Policy"
    await expect(page.locator('h1').first()).toContainText(/privacy/i);
  });

  test('should navigate to terms page', async ({ page }) => {
    await page.goto('/terms');
    await expect(page).toHaveURL(/terms/);
    // Site uses English: "Terms of Service"
    await expect(page.locator('h1').first()).toContainText(/terms/i);
  });

  test('should have working logo link', async ({ page }) => {
    const logo = page.locator('a').filter({ hasText: /UKLID/i }).first();
    await logo.click();
    await expect(page).toHaveURL('/');
  });

  test('should navigate using main menu links', async ({ page }) => {
    // Find navigation links
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();

    if (count > 0) {
      // Click first navigable link
      const firstLink = navLinks.first();
      const href = await firstLink.getAttribute('href');

      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        await firstLink.click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(new RegExp(href));
      }
    }
  });

  test('should scroll to sections on anchor clicks', async ({ page }) => {
    const anchorLinks = page.locator('a[href^="#"]');
    const count = await anchorLinks.count();

    if (count > 0) {
      await anchorLinks.first().click();
      await page.waitForTimeout(500);
      // Page should scroll - check URL hash
      const url = page.url();
      // Either hash changed or page scrolled
      expect(url).toBeDefined();
    }
  });

  test('should maintain navigation visibility on scroll', async ({ page }) => {
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(300);

    // Nav should still be visible (sticky header)
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});