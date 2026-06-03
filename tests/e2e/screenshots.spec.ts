import { test, expect } from '@playwright/test';
import { promises as fs } from 'fs';
import path from 'path';

// Screenshot directory
const screenshotDir = path.join(__dirname, '..', 'screenshots');

// Ensure screenshot directory exists
test.beforeAll(async () => {
  try {
    await fs.mkdir(screenshotDir, { recursive: true });
  } catch {
    // Directory might already exist
  }
});

test.describe('Screenshots', () => {
  test('Desktop screenshot (1280x720)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Wait for animations

    await page.screenshot({
      path: path.join(screenshotDir, 'homepage-desktop-1280x720.png'),
      fullPage: true,
    });

    // Verify file was created
    const fileExists = await fs.access(path.join(screenshotDir, 'homepage-desktop-1280x720.png')).then(() => true).catch(() => false);
    expect(fileExists).toBeTruthy();
  });

  test('Desktop large screenshot (1920x1080)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(screenshotDir, 'homepage-desktop-large-1920x1080.png'),
      fullPage: true,
    });

    const fileExists = await fs.access(path.join(screenshotDir, 'homepage-desktop-large-1920x1080.png')).then(() => true).catch(() => false);
    expect(fileExists).toBeTruthy();
  });

  test('Tablet screenshot (768x1024)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(screenshotDir, 'homepage-tablet-768x1024.png'),
      fullPage: true,
    });

    const fileExists = await fs.access(path.join(screenshotDir, 'homepage-tablet-768x1024.png')).then(() => true).catch(() => false);
    expect(fileExists).toBeTruthy();
  });

  test('Mobile screenshot (375x667)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(screenshotDir, 'homepage-mobile-375x667.png'),
      fullPage: true,
    });

    const fileExists = await fs.access(path.join(screenshotDir, 'homepage-mobile-375x667.png')).then(() => true).catch(() => false);
    expect(fileExists).toBeTruthy();
  });

  test('Mobile small screenshot (320x568)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(screenshotDir, 'homepage-mobile-small-320x568.png'),
      fullPage: true,
    });

    const fileExists = await fs.access(path.join(screenshotDir, 'homepage-mobile-small-320x568.png')).then(() => true).catch(() => false);
    expect(fileExists).toBeTruthy();
  });

  test('Privacy page screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/privacy');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    await page.screenshot({
      path: path.join(screenshotDir, 'privacy-page-desktop.png'),
      fullPage: true,
    });

    const fileExists = await fs.access(path.join(screenshotDir, 'privacy-page-desktop.png')).then(() => true).catch(() => false);
    expect(fileExists).toBeTruthy();
  });

  test('Terms page screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/terms');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    await page.screenshot({
      path: path.join(screenshotDir, 'terms-page-desktop.png'),
      fullPage: true,
    });

    const fileExists = await fs.access(path.join(screenshotDir, 'terms-page-desktop.png')).then(() => true).catch(() => false);
    expect(fileExists).toBeTruthy();
  });
});