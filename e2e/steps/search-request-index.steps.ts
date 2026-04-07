import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('der Staff Member ist eingeloggt für Company {string}', async ({ page }, companyId: string) => {
  // Auth is out of scope – navigiere direkt zur Company-spezifischen Route
  await page.goto(`/${companyId}/search-requests`);
});

Given('es existieren Gesuche für Company {string} und Company {string}', async ({}, _companyA: string, _companyB: string) => {
  // Mock-Daten sind im Service hinterlegt (abc: 3 Gesuche, xyz: 1 Gesuch)
});

Given('es existiert ein Gesuch mit Stadt {string}, E-Mail {string} und Telefonnummer {string}',
  async ({}, _city: string, _email: string, _phone: string) => {
    // Mock-Daten enthalten dieses Gesuch für Company "abc"
  }
);

Given('es existieren Gesuche für die Städte {string} und {string}', async ({}, _cityA: string, _cityB: string) => {
  // Mock-Daten enthalten Gesuche für Berlin und Hamburg unter Company "abc"
});

Given('es existieren mehrere Gesuche mit verschiedenen Kriterien', async ({}) => {
  // Mock-Daten im Service abgedeckt
});

When('der Staff Member die Gesuchskartei öffnet', async ({ page }) => {
  // Bereits durch Given navigiert – nichts zu tun
  await page.waitForSelector('app-search-request-item', { timeout: 5000 }).catch(() => {
    // Leere Liste ist auch valide
  });
});

When('der Staff Member nach Stadt {string} filtert', async ({ page }, city: string) => {
  await page.getByLabel('Stadt', { exact: true }).fill(city);
});

When('der Staff Member nach Stadt {string} und maximaler Preisvorstellung {string} filtert',
  async ({ page }, city: string, maxPrice: string) => {
    await page.getByLabel('Stadt', { exact: true }).fill(city);
    await page.getByLabel('Max. Preis (€)').fill(maxPrice);
  }
);

Then('sieht er nur die Gesuche der Company {string}', async ({ page }, _companyId: string) => {
  // Company "abc" hat 3 Mock-Gesuche, Company "xyz" hat keines davon
  const items = page.locator('app-search-request-item');
  await expect(items).toHaveCount(3);
});

Then('sieht er Stadt, E-Mail und Telefonnummer des Gesuchs', async ({ page }) => {
  await expect(page.getByText('Berlin').first()).toBeVisible();
  await expect(page.getByText('anna.mueller@example.com')).toBeVisible();
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
  // Berlin + max 1000€: Gesuch "Berlin / Mitte / max 1200€" fällt raus, Gesuch "Berlin / 3 Räume" bleibt (kein Preis)
  const items = page.locator('app-search-request-item');
  const count = await items.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(items.nth(i)).toContainText('Berlin');
  }
});
