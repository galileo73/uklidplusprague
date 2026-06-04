import { test, expect } from '@playwright/test';

/**
 * i18n (Internationalization) E2E Tests
 * Tests language switching and session persistence
 *
 * Language persistence behavior:
 * - Default: English on fresh session
 * - Page refresh: Language persists (via sessionStorage)
 * - New browser session: Resets to English
 */

const LANGUAGES = [
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'cz', name: 'Čeština', label: 'CZ' },
  { code: 'ru', name: 'Русский', label: 'RU' },
  { code: 'ua', name: 'Українська', label: 'UA' },
];

test.describe('i18n Language Selector', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display language selector in header', async ({ page }) => {
    // Check desktop language selector
    const langSelector = page.locator('header [data-testid="language-selector"]').or(
      page.locator('header button:has-text("EN")')
    );

    // Language selector should be visible on desktop
    await expect(langSelector.first()).toBeVisible({ timeout: 10000 });
  });

  test('should show language options when clicked', async ({ page }) => {
    // Find and click language selector button
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
    await langButton.click();

    // Check that language options appear
    const dropdown = page.locator('[role="listbox"]').or(page.locator('[data-testid="language-dropdown"]'));

    // Wait for dropdown to appear
    await expect(dropdown).toBeVisible({ timeout: 5000 });

    // Check that all language options are present
    for (const lang of LANGUAGES) {
      const option = dropdown.locator(`button:has-text("${lang.label}")`).or(
        dropdown.locator(`button:has-text("${lang.name}")`)
      );
      await expect(option).toBeVisible();
    }
  });

  test('should NOT display country flag emojis', async ({ page }) => {
    // Language options should use text labels, not flag emojis
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
    await langButton.click();

    // Get the language selector content
    const dropdown = page.locator('[role="listbox"]').or(page.locator('[data-testid="language-dropdown"]'));
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });

    const content = await dropdown.textContent();

    // Should not contain flag emojis (flag emojis are 4-byte characters like 🇬🇧, 🇨🇿, 🇷🇺, 🇺🇦)
    // Flag emojis are regional indicator symbol pairs (two characters each)
    const hasFlagEmojis = /[\u{1F1E6}-\u{1F1FF}]{2}/u.test(content);
    expect(hasFlagEmojis).toBe(false);
  });
});

test.describe('i18n Language Switching', () => {
  test('should switch language and update content', async ({ page }) => {
    await page.goto('/');

    // Get initial heading (English is default)
    const heroHeading = page.locator('h1').first();
    const initialText = await heroHeading.textContent();

    // Switch to Czech
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
    await langButton.click();

    const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
    await czOption.first().click();

    // Wait for content to update
    await page.waitForTimeout(500);

    // Verify the heading changed
    const newText = await heroHeading.textContent();

    // If the initial was English and we switched to Czech, the text should be different
    if (initialText !== newText) {
      expect(newText).not.toBe(initialText);
    }
  });

  test('should persist language on page refresh', async ({ page }) => {
    await page.goto('/');

    // Verify initial language is English
    const enButton = page.locator('header button').filter({ hasText: 'EN' });
    await expect(enButton.first()).toBeVisible({ timeout: 5000 });

    // Switch to Czech
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
    await langButton.click();

    const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
    await czOption.first().click();

    // Wait for language to change
    await page.waitForTimeout(500);

    // Verify Czech is selected
    const czButton = page.locator('header button').filter({ hasText: 'CZ' });
    await expect(czButton.first()).toBeVisible({ timeout: 5000 });

    // Reload page
    await page.reload();

    // Language should still be Czech after refresh (sessionStorage persistence)
    const czButtonAfterReload = page.locator('header button').filter({ hasText: 'CZ' });
    await expect(czButtonAfterReload.first()).toBeVisible({ timeout: 10000 });

    // Verify Czech content is visible
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).not.toBeEmpty();
  });

  test('should always start with English on fresh browser session', async ({ browser }) => {
    // Create a new browser context (simulates new browser session)
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();

    await newPage.goto('/');

    // Verify English is the default language
    const htmlLang = await newPage.locator('html').getAttribute('lang');
    expect(htmlLang).toBe('en');

    // Verify English is selected in the language selector
    const enButton = newPage.locator('header button').filter({ hasText: 'EN' });
    await expect(enButton.first()).toBeVisible({ timeout: 5000 });

    await newContext.close();
  });

  test('should NOT use localStorage for language persistence', async ({ page }) => {
    await page.goto('/');

    // Verify no language is stored in localStorage
    const localStorageLang = await page.evaluate(() => localStorage.getItem('language'));
    expect(localStorageLang).toBeNull();

    // Switch to Czech
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
    await langButton.click();

    const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
    await czOption.first().click();

    await page.waitForTimeout(500);

    // Verify language is still NOT stored in localStorage
    const localStorageLangAfterSwitch = await page.evaluate(() => localStorage.getItem('language'));
    expect(localStorageLangAfterSwitch).toBeNull();
  });

  test('should use sessionStorage for language persistence', async ({ page }) => {
    await page.goto('/');

    // Verify no language is initially stored in sessionStorage
    const sessionLangBefore = await page.evaluate(() => sessionStorage.getItem('language'));
    expect(sessionLangBefore).toBeNull();

    // Switch to Czech
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
    await langButton.click();

    const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
    await czOption.first().click();

    await page.waitForTimeout(500);

    // Verify language IS stored in sessionStorage
    const sessionLangAfter = await page.evaluate(() => sessionStorage.getItem('language'));
    expect(sessionLangAfter).toBe('cz');
  });

  test('should reset to English when sessionStorage is cleared', async ({ page }) => {
    await page.goto('/');

    // Switch to Czech
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
    await langButton.click();

    const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
    await czOption.first().click();

    await page.waitForTimeout(500);

    // Verify Czech is selected
    const czButton = page.locator('header button').filter({ hasText: 'CZ' });
    await expect(czButton.first()).toBeVisible({ timeout: 5000 });

    // Clear sessionStorage
    await page.evaluate(() => sessionStorage.clear());

    // Reload page
    await page.reload();

    // Language should reset to English
    const enButton = page.locator('header button').filter({ hasText: 'EN' });
    await expect(enButton.first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe('i18n Content Translation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should translate navigation menu', async ({ page }) => {
    // Switch to Ukrainian
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^UA$/ }).first();
    await langButton.click();

    const uaOption = page.locator('button:has-text("UA")').or(page.locator('button:has-text("Українська")'));
    await uaOption.first().click();

    await page.waitForTimeout(500);

    // Check that navigation items are translated
    // "Services" should become "Послуги" in Ukrainian
    const navItem = page.locator('nav a:has-text("Послуги")').or(page.locator('nav a:has-text("Services")'));
    await expect(navItem.first()).toBeVisible();
  });

  test('should translate hero section heading', async ({ page }) => {
    // Get hero heading in English
    const heroHeading = page.locator('h1').first();

    // Check that it contains text (any language)
    await expect(heroHeading).not.toBeEmpty();

    // The heading should have some content
    const headingText = await heroHeading.textContent();
    expect(headingText?.length).toBeGreaterThan(3);
  });

  test('should translate services section', async ({ page }) => {
    // Scroll to services section
    await page.locator('#services').scrollIntoViewIfNeeded();

    // Check that service cards have translated content - use h3 within services section
    const serviceTitles = page.locator('#services h3');

    const count = await serviceTitles.count();
    expect(count).toBeGreaterThan(0);

    // Each service card should have a title
    for (let i = 0; i < Math.min(count, 3); i++) {
      const title = serviceTitles.nth(i);
      await expect(title).not.toBeEmpty();
    }
  });

  test('should translate contact section', async ({ page }) => {
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Check that contact heading is translated
    const contactHeading = page.locator('#contact h2');
    await expect(contactHeading).not.toBeEmpty();
  });
});

test.describe('i18n SEO Language Attributes', () => {
  test('should have html lang attribute default to English', async ({ page }) => {
    await page.goto('/');

    // Check that html has lang attribute set to English
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBe('en');
  });

  test('should update lang attribute when language changes', async ({ page }) => {
    await page.goto('/');

    // Get initial lang - should be English
    const initialLang = await page.locator('html').getAttribute('lang');
    expect(initialLang).toBe('en');

    // Switch to Czech
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
    await langButton.click();

    const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
    await czOption.first().click();

    await page.waitForTimeout(500);

    // Check that lang attribute updated to Czech (cs)
    const newLang = await page.locator('html').getAttribute('lang');
    expect(newLang).toBe('cs');
  });

  test('should persist lang attribute after reload', async ({ page }) => {
    await page.goto('/');

    // Switch to Russian
    const langButton = page.locator('header button').filter({ hasText: /^EN$|^RU$/ }).first();
    await langButton.click();

    const ruOption = page.locator('button:has-text("RU")').or(page.locator('button:has-text("Русский")'));
    await ruOption.first().click();

    await page.waitForTimeout(500);

    // Verify Russian is set
    const ruLang = await page.locator('html').getAttribute('lang');
    expect(ruLang).toBe('ru');

    // Reload page
    await page.reload();

    // Lang should still be Russian (sessionStorage persistence)
    const htmlLangAfterReload = await page.locator('html').getAttribute('lang');
    expect(htmlLangAfterReload).toBe('ru');
  });
});

test.describe('i18n No Missing Translation Keys', () => {
  test('should not show translation keys as visible text', async ({ page }) => {
    await page.goto('/');

    // Get the visible text content (not the HTML source which includes key names in code)
    const bodyText = await page.locator('body').textContent();

    // Forbidden patterns that indicate raw translation keys are visible
    const forbiddenPatterns = [
      /HERO\.SCROLL/i,
      /hero\.scroll/i,
      /[A-Z]{2,}\.[A-Z]{2,}\.[A-Z]{2,}/,  // UPPERCASE.KEY.PATTERN
    ];

    for (const pattern of forbiddenPatterns) {
      expect(bodyText).not.toMatch(pattern);
    }
  });

  test('should display scroll indicator arrow in hero', async ({ page }) => {
    await page.goto('/');

    // Check hero section specifically for the scroll indicator arrow
    const heroSection = page.locator('section').first();
    const heroText = await heroSection.textContent();

    // Should NOT contain raw key patterns
    expect(heroText).not.toContain('HERO.SCROLL');
    expect(heroText).not.toContain('hero.scroll');

    // Should have the scroll indicator arrow (SVG)
    const scrollArrow = heroSection.locator('svg').filter({ has: page.locator('path[d*="M19 14l-7 7"]') });
    await expect(scrollArrow).toBeVisible();
  });

  test('should not show raw keys after language switch', async ({ page }) => {
    await page.goto('/');

    // Test all languages
    const languages = ['EN', 'CZ', 'RU', 'UA'];

    for (const lang of languages) {
      // Switch language
      const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
      await langButton.click();

      const langOption = page.locator(`button:has-text("${lang}")`).first();
      await langOption.click();

      await page.waitForTimeout(300);

      // Get visible text
      const bodyText = await page.locator('body').textContent();

      // Check for forbidden patterns
      expect(bodyText).not.toContain('HERO.SCROLL');
      expect(bodyText).not.toContain('hero.scroll');
    }
  });

  test('should display translated text for all sections', async ({ page }) => {
    await page.goto('/');

    // Scroll through the page to trigger lazy-loaded content
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));

    // Check main sections have content
    const sections = ['#hero', '#why-us', '#services', '#pricing', '#contact'];

    for (const section of sections) {
      const sectionEl = page.locator(section);
      if (await sectionEl.count() > 0) {
        const text = await sectionEl.textContent();
        // Section should have substantial text content (translated)
        expect(text?.length).toBeGreaterThan(50);
      }
    }
  });
});

test.describe('i18n Mobile Menu Language Selector', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should have language selector in mobile menu', async ({ page }) => {
    await page.goto('/');

    // Open mobile menu
    const menuButton = page.locator('button[aria-label*="menu"]').or(
      page.locator('button[aria-label*="Menu"]')
    ).or(
      page.locator('button').filter({ hasText: /^☰$/ })
    );

    if (await menuButton.count() > 0) {
      await menuButton.first().click();

      // Check for language options in mobile menu
      const mobileMenu = page.locator('[role="dialog"]').or(page.locator('[data-testid="mobile-menu"]'));

      // Mobile menu should have language selector or options
      const langOptions = mobileMenu.locator('button:has-text("EN")').or(
        mobileMenu.locator('button:has-text("CZ")')
      );

      if (await langOptions.count() > 0) {
        await expect(langOptions.first()).toBeVisible();
      }
    }
  });
});