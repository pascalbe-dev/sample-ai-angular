import { test, expect } from '@playwright/test';

test.describe('Search Request Index – Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/abc/search-requests');
    await page.waitForSelector('app-search-request-item');
  });

  test('vollständige Liste ohne Filter', async ({ page }) => {
    await expect(page).toHaveScreenshot('index-full-list.png');
  });

  test('gefiltert nach Stadt Berlin', async ({ page }) => {
    await page.getByLabel('Stadt', { exact: true }).fill('Berlin');
    await expect(page).toHaveScreenshot('index-filtered-city.png');
  });

  test('gefiltert nach Stadt und maximalem Preis', async ({ page }) => {
    await page.getByLabel('Stadt', { exact: true }).fill('Berlin');
    await page.getByLabel('Max. Preis (€)').fill('1000');
    await expect(page).toHaveScreenshot('index-filtered-city-price.png');
  });

  test('keine Treffer bei unbekannter Stadt', async ({ page }) => {
    await page.getByLabel('Stadt', { exact: true }).fill('Unbekannt');
    await expect(page.getByText('Keine Gesuche gefunden.')).toBeVisible();
    await expect(page).toHaveScreenshot('index-no-results.png');
  });
});
