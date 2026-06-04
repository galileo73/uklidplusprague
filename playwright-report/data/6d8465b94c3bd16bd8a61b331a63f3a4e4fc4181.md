# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> Contact and WhatsApp >> should have WhatsApp link
- Location: tests\e2e\contact.spec.ts:8:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href*="wa.me"], a[href*="whatsapp"]').first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href*="wa.me"], a[href*="whatsapp"]').first()
    - waiting for" http://localhost:5173/" navigation to finish...
    - navigated to "http://localhost:5173/"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Contact and WhatsApp', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |   });
  7  | 
  8  |   test('should have WhatsApp link', async ({ page }) => {
  9  |     // Find WhatsApp link
  10 |     const whatsappLink = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');
  11 | 
  12 |     if (await whatsappLink.count() > 0) {
> 13 |       await expect(whatsappLink.first()).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
  14 |       const href = await whatsappLink.first().getAttribute('href');
  15 |       expect(href).toContain('wa.me');
  16 |     }
  17 |   });
  18 | 
  19 |   test('should have phone number link', async ({ page }) => {
  20 |     // Find phone link
  21 |     const phoneLink = page.locator('a[href^="tel:"]');
  22 | 
  23 |     if (await phoneLink.count() > 0) {
  24 |       await expect(phoneLink.first()).toBeVisible();
  25 |       const href = await phoneLink.first().getAttribute('href');
  26 |       expect(href).toContain('tel:');
  27 |     }
  28 |   });
  29 | 
  30 |   test('should have email contact', async ({ page }) => {
  31 |     // Find email link
  32 |     const emailLink = page.locator('a[href^="mailto:"]');
  33 | 
  34 |     if (await emailLink.count() > 0) {
  35 |       const href = await emailLink.first().getAttribute('href');
  36 |       expect(href).toContain('mailto:');
  37 |     }
  38 |   });
  39 | 
  40 |   test('should display contact section', async ({ page }) => {
  41 |     // Scroll to contact or find contact section
  42 |     const contactSection = page.locator('section').filter({
  43 |       hasText: /kontakt|contact/i
  44 |     });
  45 | 
  46 |     if (await contactSection.count() > 0) {
  47 |       await expect(contactSection.first()).toBeVisible();
  48 |     }
  49 |   });
  50 | 
  51 |   test('WhatsApp button should have correct phone format', async ({ page }) => {
  52 |     const whatsappLink = page.locator('a[href*="wa.me"]');
  53 | 
  54 |     if (await whatsappLink.count() > 0) {
  55 |       const href = await whatsappLink.first().getAttribute('href');
  56 |       // Should contain phone number in international format
  57 |       expect(href).toMatch(/wa\.me\/\d+/);
  58 |     }
  59 |   });
  60 | 
  61 |   test('should have working contact form if present', async ({ page }) => {
  62 |     await page.goto('/contact');
  63 | 
  64 |     const form = page.locator('form');
  65 | 
  66 |     if (await form.count() > 0) {
  67 |       // Check form has required fields
  68 |       const nameInput = form.locator('input[name*="name"], input[placeholder*="jmén"], input[placeholder*="name"]');
  69 |       const emailInput = form.locator('input[type="email"], input[name*="email"], input[placeholder*="email"]');
  70 |       const submitButton = form.locator('button[type="submit"]');
  71 | 
  72 |       if (await nameInput.count() > 0) {
  73 |         await expect(nameInput.first()).toBeVisible();
  74 |       }
  75 |       if (await emailInput.count() > 0) {
  76 |         await expect(emailInput.first()).toBeVisible();
  77 |       }
  78 |       if (await submitButton.count() > 0) {
  79 |         await expect(submitButton).toBeVisible();
  80 |       }
  81 |     }
  82 |   });
  83 | 
  84 |   test('contact information should be visible in footer', async ({ page }) => {
  85 |     // Scroll to bottom
  86 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  87 |     await page.waitForTimeout(300);
  88 | 
  89 |     // Footer should contain contact info
  90 |     const footer = page.locator('footer');
  91 |     await expect(footer).toBeVisible();
  92 | 
  93 |     // Should have some contact information
  94 |     const contactInfo = footer.locator('text=/\\+420|@|Praha/i');
  95 |     if (await contactInfo.count() > 0) {
  96 |       await expect(contactInfo.first()).toBeVisible();
  97 |     }
  98 |   });
  99 | });
```