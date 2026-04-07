import { createBdd } from 'playwright-bdd';
import { expect, Page } from '@playwright/test';
import { mockSearchRequests } from '../support/api-mock';

async function navigateToIndexIfNeeded(page: Page): Promise<void> {
  if (page.url().includes('/search-requests')) return;
  const companyId = (page as any)._testCompanyId ?? 'abc';
  await page.goto(`/${companyId}/search-requests`);
  await page.waitForSelector('app-search-request-item');
}

const { Given, When, Then } = createBdd();

Given('der Staff Member ist eingeloggt für Company {string}', async ({ page }, companyId: string) => {
  // Auth ist out of scope – companyId wird als State für folgende Steps gespeichert
  (page as any)._testCompanyId = companyId;
});

Given('es existieren Gesuche für Company {string} und Company {string}',
  async ({ page }, companyA: string, companyB: string) => {
    await mockSearchRequests(page, companyA, [
      { companyId: companyA, city: 'Berlin', email: 'anna@example.com' },
      { companyId: companyA, city: 'Hamburg', phone: '01511111111' },
      { companyId: companyA, city: 'München', email: 'hans@example.com' },
    ]);
    await mockSearchRequests(page, companyB, [
      { companyId: companyB, city: 'Frankfurt', email: 'other@example.com' },
    ]);
  }
);

Given('es existiert ein Gesuch mit Stadt {string}, E-Mail {string} und Telefonnummer {string}',
  async ({ page }, city: string, email: string, phone: string) => {
    const companyId = (page as any)._testCompanyId ?? 'abc';
    await mockSearchRequests(page, companyId, [
      { companyId, city, email, phone },
    ]);
  }
);

Given('es existieren Gesuche für die Städte {string} und {string}',
  async ({ page }, cityA: string, cityB: string) => {
    const companyId = (page as any)._testCompanyId ?? 'abc';
    await mockSearchRequests(page, companyId, [
      { companyId, city: cityA, email: 'a@example.com' },
      { companyId, city: cityB, email: 'b@example.com' },
    ]);
  }
);

Given('es existieren mehrere Gesuche mit verschiedenen Kriterien', async ({ page }) => {
  const companyId = (page as any)._testCompanyId ?? 'abc';
  await mockSearchRequests(page, companyId, [
    { companyId, city: 'Berlin', maxPrice: 800, email: 'a@example.com' },
    { companyId, city: 'Berlin', maxPrice: 1500, email: 'b@example.com' },
    { companyId, city: 'Hamburg', maxPrice: 900, email: 'c@example.com' },
  ]);
});

When('der Staff Member die Gesuchskartei öffnet', async ({ page }) => {
  const companyId = (page as any)._testCompanyId ?? 'abc';
  await page.goto(`/${companyId}/search-requests`);
  await page.waitForSelector('app-search-request-item');
});

When('der Staff Member nach Stadt {string} filtert', async ({ page }, city: string) => {
  await navigateToIndexIfNeeded(page);
  await page.getByLabel('Stadt', { exact: true }).fill(city);
});

When('der Staff Member nach Stadt {string} und maximaler Preisvorstellung {string} filtert',
  async ({ page }, city: string, maxPrice: string) => {
    await navigateToIndexIfNeeded(page);
    await page.getByLabel('Stadt', { exact: true }).fill(city);
    await page.getByLabel('Max. Preis (€)').fill(maxPrice);
  }
);

Then('sieht er nur die Gesuche der Company {string}', async ({ page }, _companyId: string) => {
  const items = page.locator('app-search-request-item');
  await expect(items).toHaveCount(3);
});

Then('sieht er Stadt, E-Mail und Telefonnummer des Gesuchs', async ({ page }) => {
  await expect(page.getByText('Berlin').first()).toBeVisible();
  await expect(page.getByText('max@example.com')).toBeVisible();
  await expect(page.getByText('01234')).toBeVisible();
});

Then('sieht er nur Gesuche mit Stadt {string}', async ({ page }, city: string) => {
  const items = page.locator('app-search-request-item');
  const count = await items.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(items.nth(i)).toContainText(city);
  }
});

Then('sieht er nur Gesuche, die beide Kriterien erfüllen', async ({ page }) => {
  const items = page.locator('app-search-request-item');
  const count = await items.count();
  expect(count).toBe(1);
  await expect(items.first()).toContainText('Berlin');
});
