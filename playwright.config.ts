import { defineConfig, devices } from '@playwright/test';
import process from 'node:process';
import dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error(
    'BASE_URL is missing. Please configure it in your .env file.',
  );
}

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://dummyjson.com',
    trace: 'on-first-retry',
    extraHTTPHeaders: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },]
});