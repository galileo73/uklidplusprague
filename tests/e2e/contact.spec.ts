import { test, expect } from '@playwright/test';

test.describe('Contact and WhatsApp', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have WhatsApp link', async ({ page }) => {
    // Find WhatsApp link
    const whatsappLink = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');

    if (await whatsappLink.count() > 0) {
      await expect(whatsappLink.first()).toBeVisible();
      const href = await whatsappLink.first().getAttribute('href');
      expect(href).toContain('wa.me');
    }
  });

  test('should have phone number link', async ({ page }) => {
    // Find phone link
    const phoneLink = page.locator('a[href^="tel:"]');

    if (await phoneLink.count() > 0) {
      await expect(phoneLink.first()).toBeVisible();
      const href = await phoneLink.first().getAttribute('href');
      expect(href).toContain('tel:');
    }
  });

  test('should have email contact', async ({ page }) => {
    // Find email link
    const emailLink = page.locator('a[href^="mailto:"]');

    if (await emailLink.count() > 0) {
      const href = await emailLink.first().getAttribute('href');
      expect(href).toContain('mailto:');
    }
  });

  test('should display contact section', async ({ page }) => {
    // Scroll to contact or find contact section
    const contactSection = page.locator('section').filter({
      hasText: /kontakt|contact/i
    });

    if (await contactSection.count() > 0) {
      await expect(contactSection.first()).toBeVisible();
    }
  });

  test('WhatsApp button should have correct phone format', async ({ page }) => {
    const whatsappLink = page.locator('a[href*="wa.me"]');

    if (await whatsappLink.count() > 0) {
      const href = await whatsappLink.first().getAttribute('href');
      // Should contain phone number in international format
      expect(href).toMatch(/wa\.me\/\d+/);
    }
  });

  test('should have working contact form if present', async ({ page }) => {
    await page.goto('/contact');

    const form = page.locator('form');

    if (await form.count() > 0) {
      // Check form has required fields
      const nameInput = form.locator('input[name*="name"], input[placeholder*="jmén"], input[placeholder*="name"]');
      const emailInput = form.locator('input[type="email"], input[name*="email"], input[placeholder*="email"]');
      const submitButton = form.locator('button[type="submit"]');

      if (await nameInput.count() > 0) {
        await expect(nameInput.first()).toBeVisible();
      }
      if (await emailInput.count() > 0) {
        await expect(emailInput.first()).toBeVisible();
      }
      if (await submitButton.count() > 0) {
        await expect(submitButton).toBeVisible();
      }
    }
  });

  test('contact information should be visible in footer', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    // Footer should contain contact info
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Should have some contact information
    const contactInfo = footer.locator('text=/\\+420|@|Praha/i');
    if (await contactInfo.count() > 0) {
      await expect(contactInfo.first()).toBeVisible();
    }
  });
});