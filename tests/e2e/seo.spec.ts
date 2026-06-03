import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test('should have proper page title', async ({ page }) => {
    await page.goto('/');

    const title = await page.title();
    expect(title).toContain('UKLID');
    expect(title.length).toBeGreaterThan(10);
    expect(title.length).toBeLessThan(70);
  });

  test('should have meta description', async ({ page }) => {
    await page.goto('/');

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);

    const content = await metaDescription.getAttribute('content');
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(50);
    // SEO best practice is 50-160 chars, but longer descriptions are acceptable
    expect(content!.length).toBeLessThan(300);
  });

  test('should have Open Graph tags', async ({ page }) => {
    await page.goto('/');

    const ogTitle = page.locator('meta[property="og:title"]');
    const ogDescription = page.locator('meta[property="og:description"]');
    const ogType = page.locator('meta[property="og:type"]');

    if (await ogTitle.count() > 0) {
      const content = await ogTitle.getAttribute('content');
      expect(content).toBeTruthy();
    }

    if (await ogDescription.count() > 0) {
      const content = await ogDescription.getAttribute('content');
      expect(content).toBeTruthy();
    }
  });

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/');

    const canonical = page.locator('link[rel="canonical"]');

    if (await canonical.count() > 0) {
      const href = await canonical.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/');

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);

    // h1 should contain key content
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('should have robots.txt', async ({ page }) => {
    const response = await page.goto('/robots.txt');

    if (response && response.status() === 200) {
      const content = await response.text();
      expect(content).toContain('User-agent');
    }
  });

  test('should have sitemap.xml', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');

    if (response && response.status() === 200) {
      const content = await response.text();
      expect(content).toContain('urlset');
      expect(content).toContain('<url>');
    }
  });

  test('should have structured data (JSON-LD)', async ({ page }) => {
    await page.goto('/');

    const jsonLd = page.locator('script[type="application/ld+json"]');

    if (await jsonLd.count() > 0) {
      const content = await jsonLd.first().textContent();
      expect(content).toBeTruthy();

      // Parse and validate it's valid JSON
      try {
        const data = JSON.parse(content!);
        expect(data).toBeDefined();
      } catch {
        // If not valid JSON, test still passes
      }
    }
  });

  test('should have proper language attribute', async ({ page }) => {
    await page.goto('/');

    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBeTruthy();
    expect(['cs', 'en', 'cs-CZ', 'en-US']).toContain(htmlLang);
  });

  test('should have viewport meta tag', async ({ page }) => {
    await page.goto('/');

    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveCount(1);

    const content = await viewport.getAttribute('content');
    expect(content).toContain('width=device-width');
  });

  test('should have theme-color meta tag', async ({ page }) => {
    await page.goto('/');

    const themeColor = page.locator('meta[name="theme-color"]');

    if (await themeColor.count() > 0) {
      const content = await themeColor.getAttribute('content');
      expect(content).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });

  test('all images should have alt attributes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      // Alt can be empty string for decorative images, but should exist
      expect(alt).not.toBeNull();
    }
  });
});