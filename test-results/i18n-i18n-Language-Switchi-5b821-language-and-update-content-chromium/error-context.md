# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: i18n.spec.ts >> i18n Language Switching >> should switch language and update content
- Location: tests\e2e\i18n.spec.ts:69:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * i18n (Internationalization) E2E Tests
  5   |  * Tests language switching, persistence, and content translation
  6   |  */
  7   | 
  8   | const LANGUAGES = [
  9   |   { code: 'en', name: 'English', label: 'EN' },
  10  |   { code: 'cz', name: 'Čeština', label: 'CZ' },
  11  |   { code: 'ru', name: 'Русский', label: 'RU' },
  12  |   { code: 'ua', name: 'Українська', label: 'UA' },
  13  | ];
  14  | 
  15  | test.describe('i18n Language Selector', () => {
  16  |   test.beforeEach(async ({ page }) => {
  17  |     await page.goto('/');
  18  |   });
  19  | 
  20  |   test('should display language selector in header', async ({ page }) => {
  21  |     // Check desktop language selector
  22  |     const langSelector = page.locator('header [data-testid="language-selector"]').or(
  23  |       page.locator('header button:has-text("EN")')
  24  |     );
  25  | 
  26  |     // Language selector should be visible on desktop
  27  |     await expect(langSelector.first()).toBeVisible({ timeout: 10000 });
  28  |   });
  29  | 
  30  |   test('should show language options when clicked', async ({ page }) => {
  31  |     // Find and click language selector button
  32  |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  33  |     await langButton.click();
  34  | 
  35  |     // Check that language options appear
  36  |     const dropdown = page.locator('[role="menu"]').or(page.locator('[data-testid="language-dropdown"]'));
  37  | 
  38  |     // Wait for dropdown to appear
  39  |     await expect(dropdown).toBeVisible({ timeout: 5000 });
  40  | 
  41  |     // Check that all language options are present
  42  |     for (const lang of LANGUAGES) {
  43  |       const option = dropdown.locator(`button:has-text("${lang.label}")`).or(
  44  |         dropdown.locator(`button:has-text("${lang.name}")`)
  45  |       );
  46  |       await expect(option).toBeVisible();
  47  |     }
  48  |   });
  49  | 
  50  |   test('should NOT display country flag emojis', async ({ page }) => {
  51  |     // Language options should use text labels, not flag emojis
  52  |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  53  |     await langButton.click();
  54  | 
  55  |     // Get the language selector content
  56  |     const dropdown = page.locator('[role="menu"]').or(page.locator('[data-testid="language-dropdown"]'));
  57  |     await dropdown.waitFor({ state: 'visible', timeout: 5000 });
  58  | 
  59  |     const content = await dropdown.textContent();
  60  | 
  61  |     // Should not contain flag emojis (flag emojis are 4-byte characters like 🇬🇧, 🇨🇿, 🇷🇺, 🇺🇦)
  62  |     // Flag emojis are regional indicator symbol pairs (two characters each)
  63  |     const hasFlagEmojis = /[\u{1F1E6}-\u{1F1FF}]{2}/u.test(content);
  64  |     expect(hasFlagEmojis).toBe(false);
  65  |   });
  66  | });
  67  | 
  68  | test.describe('i18n Language Switching', () => {
  69  |   test('should switch language and update content', async ({ page }) => {
> 70  |     await page.goto('/');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  71  | 
  72  |     // Get initial heading (assuming English is default)
  73  |     const heroHeading = page.locator('h1').first();
  74  |     const initialText = await heroHeading.textContent();
  75  | 
  76  |     // Switch to Czech
  77  |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
  78  |     await langButton.click();
  79  | 
  80  |     const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
  81  |     await czOption.first().click();
  82  | 
  83  |     // Wait for content to update
  84  |     await page.waitForTimeout(500);
  85  | 
  86  |     // Verify the heading changed
  87  |     const newText = await heroHeading.textContent();
  88  | 
  89  |     // If the initial was English and we switched to Czech, the text should be different
  90  |     // Unless both languages have the same content (which shouldn't happen)
  91  |     if (initialText !== newText) {
  92  |       expect(newText).not.toBe(initialText);
  93  |     }
  94  |   });
  95  | 
  96  |   test('should persist language choice across page reload', async ({ page }) => {
  97  |     await page.goto('/');
  98  | 
  99  |     // Switch to Russian
  100 |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  101 |     await langButton.click();
  102 | 
  103 |     const ruOption = page.locator('button:has-text("RU")').or(page.locator('button:has-text("Русский")'));
  104 |     await ruOption.first().click();
  105 | 
  106 |     // Wait for language to change
  107 |     await page.waitForTimeout(500);
  108 | 
  109 |     // Reload page
  110 |     await page.reload();
  111 | 
  112 |     // Language should still be Russian
  113 |     const langButtonAfter = page.locator('header button').filter({ hasText: 'RU' });
  114 |     await expect(langButtonAfter.first()).toBeVisible({ timeout: 10000 });
  115 |   });
  116 | 
  117 |   test('should persist language in localStorage', async ({ page }) => {
  118 |     await page.goto('/');
  119 | 
  120 |     // Set language via localStorage
  121 |     await page.evaluate(() => {
  122 |       localStorage.setItem('i18nextLng', 'cz');
  123 |     });
  124 | 
  125 |     // Reload page
  126 |     await page.reload();
  127 | 
  128 |     // Check that Czech content is displayed
  129 |     const czButton = page.locator('header button').filter({ hasText: 'CZ' });
  130 |     await expect(czButton.first()).toBeVisible({ timeout: 10000 });
  131 |   });
  132 | });
  133 | 
  134 | test.describe('i18n Content Translation', () => {
  135 |   test.beforeEach(async ({ page }) => {
  136 |     await page.goto('/');
  137 |   });
  138 | 
  139 |   test('should translate navigation menu', async ({ page }) => {
  140 |     // Switch to Ukrainian
  141 |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^UA$/ }).first();
  142 |     await langButton.click();
  143 | 
  144 |     const uaOption = page.locator('button:has-text("UA")').or(page.locator('button:has-text("Українська")'));
  145 |     await uaOption.first().click();
  146 | 
  147 |     await page.waitForTimeout(500);
  148 | 
  149 |     // Check that navigation items are translated
  150 |     // "Services" should become "Послуги" in Ukrainian
  151 |     const navItem = page.locator('nav a:has-text("Послуги")').or(page.locator('nav a:has-text("Services")'));
  152 |     await expect(navItem.first()).toBeVisible();
  153 |   });
  154 | 
  155 |   test('should translate hero section heading', async ({ page }) => {
  156 |     // Get hero heading in English
  157 |     const heroHeading = page.locator('h1').first();
  158 | 
  159 |     // Check that it contains text (any language)
  160 |     await expect(heroHeading).not.toBeEmpty();
  161 | 
  162 |     // The heading should have some content
  163 |     const headingText = await heroHeading.textContent();
  164 |     expect(headingText?.length).toBeGreaterThan(3);
  165 |   });
  166 | 
  167 |   test('should translate services section', async ({ page }) => {
  168 |     // Scroll to services section
  169 |     await page.locator('#services').scrollIntoViewIfNeeded();
  170 | 
```