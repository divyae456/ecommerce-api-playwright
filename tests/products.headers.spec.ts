
import { test, expect } from '@playwright/test';

test('GET - Send JSON request headers', async ({ request }) => {
  const response = await request.get('/products');

  expect(response.status()).toBe(200);

  const contentType = response.headers()['content-type'];

  expect(contentType).toContain('application/json');

  console.log('Status:', response.status());
  console.log('Response Content-Type:', contentType);
});