import { test, expect } from '@playwright/test';
import { ProductApiClient } from '../src/clients/productApiClient';

test('DELETE - Delete an existing product', async ({ request }) => {
  const productApi = new ProductApiClient(request);

  const productId = 1;

  const response = await productApi.deleteProduct(productId);

  const responseBody = await response.json();

  console.log('Status:', response.status());
  console.log('Response:', responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(productId);
  expect(responseBody.isDeleted).toBe(true);
  expect(responseBody.deletedOn).toBeTruthy();
});