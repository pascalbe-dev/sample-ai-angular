import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'e2e/features/**/*.feature',
  steps: 'e2e/steps/**/*.ts',
});

export default defineConfig({
  testDir,
  fullyParallel: false,
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:4200',
    headless: true,
    channel: undefined,
    launchOptions: {
      executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: './node_modules/.bin/ng serve',
    url: 'http://localhost:4200',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
