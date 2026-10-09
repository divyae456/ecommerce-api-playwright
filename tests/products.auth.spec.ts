
import { test, expect } from '@playwright/test';

test('Check API request with Authorization header', async ({ request }) => {
  const response = await request.get('/products', {
    headers: {
      Authorization: 'Bearer test-token',
    },
  });

  console.log('Status:', response.status());
  expect(response.status()).toBe(200);
});
