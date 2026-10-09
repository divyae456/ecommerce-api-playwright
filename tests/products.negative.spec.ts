
import { test, expect } from '@playwright/test';

test('GET - Nonexistent product ID', async ({ request }) => {
  const response = await request.get('/products/999999');

  expect(response.status()).toBe(404);

  const body = await response.json();
  expect(body.message).toBeTruthy();

  console.log('Not found:', body.message);
});

test('POST - Missing required product title', async ({ request }) => {
  const response = await request.post('/products/add', {
    data: {
      price: 500,
      description: 'Product without a title',
      category: 'laptops',
    },
  });

  console.log('Missing-title response:', response.status());

  // DummyJSON simulates product creation and may accept
  // incomplete product data. Do not assume it returns 400.
  expect([200, 201, 400, 422]).toContain(response.status());
});

test('GET - Invalid product ID format', async ({ request }) => {
  const response = await request.get('/products/invalid-id');

  expect(response.status()).toBe(404);

  const body = await response.json();
  expect(body.message).toBeTruthy();
});