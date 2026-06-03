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
    // Scroll to services section
    await page.locator('text=Služby').first().click();
    await page.waitForTimeout(500);

    // Check that services content is visible
    const servicesSection = page.locator('section').filter({ hasText: /čistění|úklid/i });
    await expect(servicesSection.first()).toBeVisible();
  });

  test('should have contact information', async ({ page }) => {
    // Check for contact info in the page
    const contactInfo = page.locator('text=/\\+420|@|Praha/i');
    await expect(contactInfo.first()).toBeVisible();
  });

  test('should have call-to-action buttons', async ({ page }) => {
    const ctaButtons = page.locator('button, a').filter({ hasText: /kontakt|objedn|poptáv/i });
    await expect(ctaButtons.first()).toBeVisible();
  });
});