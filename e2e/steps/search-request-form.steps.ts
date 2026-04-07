import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { mockSearchRequests } from '../support/api-mock';

const { Given, When, Then } = createBdd();

Given('der Lead befindet sich auf der Gesuch-Seite der Company {string}', async ({ page }, companyId: string) => {
  await mockSearchRequests(page, companyId, []);
  await page.goto(`/${companyId}/search-request/new`);
});

When('der Lead die Stadt {string} eingibt', async ({ page }, city: string) => {
  await page.getByLabel('Stadt *').fill(city);
});

When('der Lead die E-Mail {string} eingibt', async ({ page }, email: string) => {
  await page.getByLabel('E-Mail-Adresse').fill(email);
});

When('der Lead die Telefonnummer {string} eingibt', async ({ page }, phone: string) => {
  await page.getByLabel('Telefonnummer').fill(phone);
});

When('der Lead den Stadtteil {string} eingibt', async ({ page }, district: string) => {
  await page.getByLabel('Stadtteil').fill(district);
});

When('der Lead die minimale Raumanzahl {string} eingibt', async ({ page }, minRooms: string) => {
  await page.getByLabel('Räume min.').fill(minRooms);
});

When('der Lead die maximale Raumanzahl {string} eingibt', async ({ page }, maxRooms: string) => {
  await page.getByLabel('Räume max.').fill(maxRooms);
});

When('der Lead die maximale Preisvorstellung {string} eingibt', async ({ page }, maxPrice: string) => {
  await page.getByLabel('Maximale Miete (€)').fill(maxPrice);
});

When('das Formular absendet', async ({ page }) => {
  await page.getByRole('button', { name: 'Gesuch einreichen' }).click();
});

Then('ist das Gesuch gespeichert und der Company {string} zugeordnet', async ({ page }) => {
  await expect(page.getByText('Ihr Gesuch wurde erfolgreich eingereicht.')).toBeVisible();
});

Then('ist der Absenden-Button deaktiviert', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Gesuch einreichen' })).toBeDisabled();
});
