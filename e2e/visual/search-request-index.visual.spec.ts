import { test, expect } from '@playwright/test';
import { mockSearchRequests } from '../support/api-mock';

const MOCK_REQUESTS = [
  { companyId: 'abc', city: 'Berlin', district: 'Mitte', minRooms: 2, maxRooms: 4, maxPrice: 1200, email: 'anna@example.com' },
  { companyId: 'abc', city: 'Hamburg', maxPrice: 900, phone: '01511111111' },
  { companyId: 'abc', city: 'Berlin', minRooms: 3, email: 'hans@example.com', phone: '01709876543' },
];

test.describe('Search Request Index – Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await mockSearchRequests(page, 'abc', MOCK_REQUESTS);
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
