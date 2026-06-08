import { test, expect } from '@playwright/test';

/**
 * E2E tests for critical pre-launch bug fixes
 *
 * BUG 1: Translation validation
 * BUG 2: WhatsApp links
 * BUG 3: Google Reviews
 * BUG 4: Recurring plans
 */

test.describe('Translation Validation', () => {
  test('should not display raw i18n keys in UI', async ({ page }) => {
    await page.goto('/');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Get all visible text content
    const bodyText = await page.locator('body').textContent();

    // Check that no raw translation keys are visible
    // These prefixes indicate untranslated keys
    const rawKeyPatterns = [
      /recurring\.\w+\.\w+\.\d+/,
      /pricing\.\w+\.\d+/,
      /hero\.\w+/,
      /nav\.\w+/,
      /reviews\.\w+\.\w+\.\d+/,
      /faq\.\w+\.\d+/,
      /services\.\w+\.\w+\.\d+/,
    ];

    for (const pattern of rawKeyPatterns) {
      expect(bodyText).not.toMatch(pattern);
    }
  });

  test('recurring plan features should show translated text', async ({ page }) => {
    await page.goto('/');

    // Scroll to recurring section
    await page.locator('#recurring').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Check that all feature items contain readable text (not raw keys)
    const features = page.locator('#recurring ul li span');
    const count = await features.count();

    for (let i = 0; i < count; i++) {
      const text = await features.nth(i).textContent();
      // Should not start with "recurring."
      expect(text).not.toMatch(/^recurring\./);
      // Should have actual content
      expect(text?.length).toBeGreaterThan(2);
    }
  });
});

test.describe('WhatsApp Links Validation', () => {
  test('WhatsApp link should have correct format', async ({ page }) => {
    await page.goto('/');

    // Find all WhatsApp links
    const whatsappLinks = page.locator('a[href*="wa.me"]');
    const count = await whatsappLinks.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await whatsappLinks.nth(i).getAttribute('href');

      // Should start with https://wa.me/
      expect(href).toMatch(/^https:\/\/wa\.me\//);

      // Should contain the correct number (no spaces, no +)
      expect(href).toContain('420721960963');

      // Should NOT contain spaces or + in the number part
      const numberMatch = href?.match(/wa\.me\/(\d+)/);
      expect(numberMatch).toBeTruthy();
      const number = numberMatch?.[1];
      expect(number).not.toContain(' ');
      expect(number).not.toContain('+');
      expect(number).not.toContain('-');
    }
  });

  test('WhatsApp links should open externally', async ({ page }) => {
    await page.goto('/');

    // Check that WhatsApp links have target="_blank"
    const whatsappLinks = page.locator('a[href*="wa.me"]');
    const count = await whatsappLinks.count();

    for (let i = 0; i < count; i++) {
      const target = await whatsappLinks.nth(i).getAttribute('target');
      const rel = await whatsappLinks.nth(i).getAttribute('rel');

      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('Floating WhatsApp button should have correct link', async ({ page }) => {
    await page.goto('/');

    // Find the floating WhatsApp button
    const floatingButton = page.locator('a[aria-label="Chat with us on WhatsApp"]');
    await expect(floatingButton).toBeVisible();

    const href = await floatingButton.getAttribute('href');
    expect(href).toMatch(/^https:\/\/wa\.me\/420721960963/);
  });

  test('Hero WhatsApp button should have correct link', async ({ page }) => {
    await page.goto('/');

    // Find the hero WhatsApp button
    const heroButton = page.locator('section').first().locator('a[href*="wa.me"]').first();
    await expect(heroButton).toBeVisible();

    const href = await heroButton.getAttribute('href');
    expect(href).toMatch(/^https:\/\/wa\.me\/420721960963/);
  });

  test('Footer WhatsApp link should have correct link', async ({ page }) => {
    await page.goto('/');

    // Find the footer WhatsApp link
    const footerWhatsApp = page.locator('footer a[href*="wa.me"]');
    await expect(footerWhatsApp).toBeVisible();

    const href = await footerWhatsApp.getAttribute('href');
    expect(href).toMatch(/^https:\/\/wa\.me\/420721960963/);
  });
});

test.describe('Google Reviews Validation', () => {
  test('Google Reviews buttons should be visible', async ({ page }) => {
    await page.goto('/');

    // Scroll to reviews section
    await page.locator('#reviews').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Check both CTA buttons are visible
    const seeAllButton = page.locator('#reviews').getByRole('link', { name: 'See All Reviews', exact: true });
    const leaveReviewButton = page.locator('#reviews').getByRole('link', { name: 'Leave a Review', exact: true });

    await expect(seeAllButton).toBeVisible();
    await expect(leaveReviewButton).toBeVisible();
  });

  test('Google Reviews buttons should not redirect to homepage when disabled', async ({ page }) => {
    await page.goto('/');

    // Scroll to reviews section
    await page.locator('#reviews').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Get the See All Reviews CTA button (the big one, not the small link)
    const seeAllButton = page.locator('#reviews').getByRole('link', { name: 'See All Reviews', exact: true });
    const href = await seeAllButton.getAttribute('href');

    // Should be '#' when disabled
    expect(href).toBe('#');
  });

  test('Clicking disabled Google Reviews button should show toast message', async ({ page }) => {
    await page.goto('/');

    // Scroll to reviews section
    await page.locator('#reviews').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Click the See All Reviews CTA button
    const seeAllButton = page.locator('#reviews').getByRole('link', { name: 'See All Reviews', exact: true });
    await seeAllButton.click();

    // Should show toast message
    const toast = page.locator('text=Google Reviews will be available after launch');
    await expect(toast).toBeVisible({ timeout: 2000 });

    // Toast should disappear after a few seconds
    await page.waitForTimeout(3500);
    await expect(toast).not.toBeVisible();
  });

  test('Leave Review button should show toast when disabled', async ({ page }) => {
    await page.goto('/');

    // Scroll to reviews section
    await page.locator('#reviews').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Click the Leave a Review button
    const leaveReviewButton = page.locator('#reviews').getByRole('link', { name: 'Leave a Review', exact: true });
    await leaveReviewButton.click();

    // Should show toast message
    const toast = page.locator('text=Google Reviews will be available after launch');
    await expect(toast).toBeVisible({ timeout: 2000 });
  });
});

test.describe('Recurring Plans Validation', () => {
  test('Essential Care plan should show all features', async ({ page }) => {
    await page.goto('/');

    // Scroll to recurring section
    await page.locator('#recurring').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Find Essential Care card
    const essentialCard = page.locator('#recurring').getByText('Essential Care').locator('..');

    // Should have 6 features
    const features = essentialCard.locator('ul li');
    await expect(features).toHaveCount(6);

    // All features should have text
    for (let i = 0; i < 6; i++) {
      const text = await features.nth(i).textContent();
      expect(text).toBeTruthy();
      expect(text?.length).toBeGreaterThan(5);
      expect(text).not.toMatch(/^recurring\./);
    }
  });

  test('Premium Home plan should show all features', async ({ page }) => {
    await page.goto('/');

    // Scroll to recurring section
    await page.locator('#recurring').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Find Premium Home card
    const premiumCard = page.locator('#recurring').getByText('Premium Home').locator('..');

    // Should have 7 features
    const features = premiumCard.locator('ul li');
    await expect(features).toHaveCount(7);

    // All features should have text
    for (let i = 0; i < 7; i++) {
      const text = await features.nth(i).textContent();
      expect(text).toBeTruthy();
      expect(text?.length).toBeGreaterThan(5);
      expect(text).not.toMatch(/^recurring\./);
    }
  });

  test('VIP Service plan should show all features', async ({ page }) => {
    await page.goto('/');

    // Scroll to recurring section
    await page.locator('#recurring').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Find VIP Service card
    const vipCard = page.locator('#recurring').getByText('VIP Service').locator('..');

    // Should have 7 features
    const features = vipCard.locator('ul li');
    await expect(features).toHaveCount(7);

    // All features should have text
    for (let i = 0; i < 7; i++) {
      const text = await features.nth(i).textContent();
      expect(text).toBeTruthy();
      expect(text?.length).toBeGreaterThan(5);
      expect(text).not.toMatch(/^recurring\./);
    }
  });

  test('Recurring plan WhatsApp buttons should have correct format', async ({ page }) => {
    await page.goto('/');

    // Scroll to recurring section
    await page.locator('#recurring').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Find all WhatsApp buttons in recurring section
    const buttons = page.locator('#recurring a[href*="wa.me"]');
    const count = await buttons.count();

    expect(count).toBe(3); // One for each plan

    for (let i = 0; i < count; i++) {
      const href = await buttons.nth(i).getAttribute('href');
      expect(href).toMatch(/^https:\/\/wa\.me\/420721960963/);
    }
  });
});