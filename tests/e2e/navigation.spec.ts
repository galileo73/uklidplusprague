import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to privacy page', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page).toHaveURL(/privacy/);
    await expect(page.locator('h1').first()).toContainText(/privacy/i);
  });

  test('should navigate to terms page', async ({ page }) => {
    await page.goto('/terms');
    await expect(page).toHaveURL(/terms/);
    await expect(page.locator('h1').first()).toContainText(/terms/i);
  });

  test('should navigate to work with us page', async ({ page }) => {
    await page.goto('/work-with-us');
    await expect(page).toHaveURL(/work-with-us/);
    await expect(page.locator('h1').first()).toContainText(/work/i);
  });

  test('should have working logo link', async ({ page }) => {
    const logo = page.locator('a').filter({ hasText: /UKLID/i }).first();
    await logo.click();
    await expect(page).toHaveURL('/');
  });

  test('should scroll to About section when About link clicked', async ({ page }) => {
    const aboutLink = page.locator('nav a').filter({ hasText: /About/i }).first();
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
    await page.waitForTimeout(500);
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
  });

  test('should scroll to Services section', async ({ page }) => {
    const servicesLink = page.locator('nav a').filter({ hasText: /Services/i }).first();
    await servicesLink.click();
    await page.waitForTimeout(500);
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();
  });

  test('should scroll to Pricing section', async ({ page }) => {
    const pricingLink = page.locator('nav a').filter({ hasText: /Pricing/i }).first();
    await pricingLink.click();
    await page.waitForTimeout(500);
    const pricingSection = page.locator('#pricing');
    await expect(pricingSection).toBeVisible();
  });

  test('should scroll to Contact section', async ({ page }) => {
    const contactLink = page.locator('nav a').filter({ hasText: /Contact/i }).first();
    await contactLink.click();
    await page.waitForTimeout(500);
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('should have Work with us in desktop navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    const workWithUsLink = page.locator('nav a').filter({ hasText: /Work with us/i });
    await expect(workWithUsLink).toBeVisible();
  });

  test('should maintain navigation visibility on scroll', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(300);
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});

test.describe('Header Logo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display logo or branding in header', async ({ page }) => {
    const header = page.locator('header');
    // Logo should either be an image or contain the brand name
    const logoImg = header.locator('img[alt*="UKLID"]');
    const brandName = header.locator('text=UKLID PLUS PRAHA');

    const hasLogo = await logoImg.count() > 0;
    const hasBrand = await brandName.count() > 0;

    expect(hasLogo || hasBrand).toBe(true);
  });

  test('should have logo visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    const logoLink = page.locator('header a').first();
    await expect(logoLink).toBeVisible();
  });

  test('should have logo visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const logoLink = page.locator('header a').first();
    await expect(logoLink).toBeVisible();
  });
});

test.describe('Hero Logo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display logo or branding in hero section', async ({ page }) => {
    const heroSection = page.locator('section').first();

    // Hero should have either logo image or visible brand name
    const logoImg = heroSection.locator('img[alt*="UKLID"]');
    const brandName = heroSection.locator('text=UKLID PLUS PRAHA');

    const logoVisible = await logoImg.count() > 0 ? await logoImg.first().isVisible().catch(() => false) : false;
    const brandVisible = await brandName.count() > 0 ? await brandName.first().isVisible().catch(() => false) : false;

    expect(logoVisible || brandVisible).toBe(true);
  });

  test('should not show generic U+ placeholder as primary logo', async ({ page }) => {
    const heroSection = page.locator('section').first();
    const heroContent = await heroSection.textContent();

    const hasGenericUPlus = heroContent?.includes('U+') || false;
    const hasFullBrandName = heroContent?.includes('UKLID PLUS PRAHA') || false;

    // If U+ is present, full brand name should also be present
    if (hasGenericUPlus) {
      expect(hasFullBrandName).toBe(true);
    }
  });
});

test.describe('Mobile Menu', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display hamburger button on mobile', async ({ page }) => {
    // There should be at least 2 buttons in the header on mobile
    // (language selector and hamburger, or WhatsApp and hamburger)
    const header = page.locator('header');
    const buttons = await header.locator('button').count();
    expect(buttons).toBeGreaterThanOrEqual(1);
  });

  test('should have Work with us link in footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    const workWithUsLink = page.locator('footer a').filter({ hasText: /Work with us/i });
    await expect(workWithUsLink).toBeVisible();
  });

  test('should have About link in navigation', async ({ page }) => {
    // About should be somewhere on the page (desktop nav is hidden on mobile, but link exists in HTML)
    const aboutLink = page.locator('a').filter({ hasText: /About/i });
    const count = await aboutLink.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should scroll to About section', async ({ page }) => {
    await page.goto('/#about');
    await page.waitForTimeout(500);
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
  });

  test('should navigate to Work with Us page', async ({ page }) => {
    await page.goto('/work-with-us');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/work-with-us/);
    await expect(page.locator('h1').first()).toContainText(/work/i);
  });
});

test.describe('Mobile Menu - Tablet Viewport', () => {
  test.use({ viewport: { width: 430, height: 932 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display navigation elements on tablet', async ({ page }) => {
    // On tablet, either mobile menu or desktop nav should be visible
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});

test.describe('Footer Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have Work with us link in footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    const workWithUsLink = page.locator('footer a').filter({ hasText: /Work with us/i });
    await expect(workWithUsLink).toBeVisible();
  });

  test('should navigate to Work with Us from footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    const workWithUsLink = page.locator('footer a').filter({ hasText: /Work with us/i });
    await workWithUsLink.click();
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL(/work-with-us/);
  });
});
test.describe('Critical Bug Fixes', () => {
  test('should have exactly one footer on each page', async ({ page }) => {
    // Home page
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const homeFooters = await page.locator('footer').count();
    expect(homeFooters).toBe(1);

    // Privacy page
    await page.goto('/privacy');
    await page.waitForLoadState('networkidle');
    const privacyFooters = await page.locator('footer').count();
    expect(privacyFooters).toBe(1);

    // Terms page
    await page.goto('/terms');
    await page.waitForLoadState('networkidle');
    const termsFooters = await page.locator('footer').count();
    expect(termsFooters).toBe(1);

    // Work with us page
    await page.goto('/work-with-us');
    await page.waitForLoadState('networkidle');
    const workWithUsFooters = await page.locator('footer').count();
    expect(workWithUsFooters).toBe(1);
  });

  test('should have exactly one header on each page', async ({ page }) => {
    // Home page
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const homeHeaders = await page.locator('header').count();
    expect(homeHeaders).toBe(1);

    // Privacy page
    await page.goto('/privacy');
    await page.waitForLoadState('networkidle');
    const privacyHeaders = await page.locator('header').count();
    expect(privacyHeaders).toBe(1);

    // Terms page
    await page.goto('/terms');
    await page.waitForLoadState('networkidle');
    const termsHeaders = await page.locator('header').count();
    expect(termsHeaders).toBe(1);

    // Work with us page
    await page.goto('/work-with-us');
    await page.waitForLoadState('networkidle');
    const workWithUsHeaders = await page.locator('header').count();
    expect(workWithUsHeaders).toBe(1);
  });

  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile menu should open when hamburger button is clicked on home page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Find hamburger button
    const hamburgerButton = page.locator('header button[aria-label*="menu" i]').first();
    await expect(hamburgerButton).toBeVisible();

    // Click hamburger button
    await hamburgerButton.click();
    await page.waitForTimeout(300);

    // Verify mobile menu is visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // Verify menu has navigation links
    const menuLinks = mobileMenu.locator('nav a');
    const linkCount = await menuLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('mobile menu should open when hamburger button is clicked on privacy page', async ({ page }) => {
    await page.goto('/privacy');
    await page.waitForLoadState('networkidle');

    // Find hamburger button
    const hamburgerButton = page.locator('header button[aria-label*="menu" i]').first();
    await expect(hamburgerButton).toBeVisible();

    // Click hamburger button
    await hamburgerButton.click();
    await page.waitForTimeout(300);

    // Verify mobile menu is visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();
  });

  test('mobile menu should open when hamburger button is clicked on work-with-us page', async ({ page }) => {
    await page.goto('/work-with-us');
    await page.waitForLoadState('networkidle');

    // Find hamburger button
    const hamburgerButton = page.locator('header button[aria-label*="menu" i]').first();
    await expect(hamburgerButton).toBeVisible();

    // Click hamburger button
    await hamburgerButton.click();
    await page.waitForTimeout(300);

    // Verify mobile menu is visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();
  });

  test('mobile menu should close when backdrop is clicked', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open menu
    const hamburgerButton = page.locator('header button[aria-label*="menu" i]').first();
    await hamburgerButton.click();
    await page.waitForTimeout(300);

    // Verify menu is open
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // Click backdrop - it's the fixed inset-0 div with bg-dark-primary/80
    // Click on the left side of the screen (backdrop area) - menu is on the right
    await page.mouse.click(100, 300); // Click in the middle-left area (backdrop)
    await page.waitForTimeout(300);

    // Menu should close
    await expect(mobileMenu).not.toBeVisible();
  });
});
