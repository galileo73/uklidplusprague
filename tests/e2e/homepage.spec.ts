import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/UKLID PLUS PRAHA/i);
  });

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('should have visible navigation', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should display services section', async ({ page }) => {
    // Navigate to services section
    await page.goto('/#services');
    await page.waitForTimeout(500);

    // Check that services content is visible (English: "Services" heading)
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();
  });

  test('should have contact information', async ({ page }) => {
    // Check for contact info - phone number or WhatsApp links are present
    // The page has WhatsApp links and phone references in various sections
    const whatsappLink = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');
    const phoneReference = page.locator('text=/\\+420|WhatsApp|Contact/i');

    // Either WhatsApp link or phone reference should be visible
    const hasWhatsApp = await whatsappLink.count() > 0;
    const hasPhoneRef = await phoneReference.count() > 0;

    expect(hasWhatsApp || hasPhoneRef).toBe(true);
  });

  test('should have call-to-action buttons', async ({ page }) => {
    // Check for CTA buttons (English: "Book Now", "Contact", etc.)
    const ctaButtons = page.locator('button, a').filter({ hasText: /book|contact|whatsapp/i });
    await expect(ctaButtons.first()).toBeVisible();
  });
});