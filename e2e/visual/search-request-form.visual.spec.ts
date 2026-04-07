import { test, expect } from '@playwright/test';

test.describe('Search Request Form – Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/abc/search-request/new');
  });

  test('leerer Ausgangszustand', async ({ page }) => {
    await expect(page).toHaveScreenshot('form-empty.png');
  });

  test('Absenden-Button deaktiviert wenn nur Stadt ausgefüllt', async ({ page }) => {
    await page.getByLabel('Stadt *').fill('Berlin');
    await expect(page).toHaveScreenshot('form-city-only-button-disabled.png');
  });

  test('Absenden-Button aktiv wenn Stadt und E-Mail ausgefüllt', async ({ page }) => {
    await page.getByLabel('Stadt *').fill('Berlin');
    await page.getByLabel('E-Mail-Adresse').fill('max@example.com');
    await expect(page).toHaveScreenshot('form-valid-email.png');
  });

  test('alle Felder ausgefüllt', async ({ page }) => {
    await page.getByLabel('Stadt *').fill('Berlin');
    await page.getByLabel('Stadtteil').fill('Mitte');
    await page.getByLabel('Räume min.').fill('2');
    await page.getByLabel('Räume max.').fill('4');
    await page.getByLabel('Maximale Miete (€)').fill('1200');
    await page.getByLabel('E-Mail-Adresse').fill('max@example.com');
    await page.getByLabel('Telefonnummer').fill('01234567890');
    await expect(page).toHaveScreenshot('form-all-fields.png');
  });

  test('Erfolgsmeldung nach Absenden', async ({ page }) => {
    await page.getByLabel('Stadt *').fill('Berlin');
    await page.getByLabel('E-Mail-Adresse').fill('max@example.com');
    await page.getByRole('button', { name: 'Gesuch einreichen' }).click();
    await expect(page.getByText('Ihr Gesuch wurde erfolgreich eingereicht.')).toBeVisible();
    await expect(page).toHaveScreenshot('form-success.png');
  });
});
