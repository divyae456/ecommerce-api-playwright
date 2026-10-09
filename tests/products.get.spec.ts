import { test, expect } from '@playwright/test';
import { ProductApiClient } from '../src/clients/productApiClient';

test('@smoke GET - Fetch all products', async ({ request }) => {
  const productApi = new ProductApiClient(request);

  const response = await productApi.getProducts();

  console.log('Status:', response.status());

  const responseBody = await response.json();

  console.log('Products count:', responseBody.products.length);

  expect(response.status()).toBe(200);
  expect(responseBody.products.length).toBeGreaterThan(0);
});