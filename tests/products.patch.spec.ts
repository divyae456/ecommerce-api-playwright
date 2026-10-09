import { test, expect } from '@playwright/test';
import { ProductApiClient } from '../src/clients/productApiClient';
import { patchProductData } from '../src/data/product.data';

test('PATCH - Update product price', async ({ request }) => {
  const productApi = new ProductApiClient(request);

  const productId = 1;

  const response = await productApi.patchProduct(
    productId,
    patchProductData,
  );

  const responseBody = await response.json();

  console.log('Status:', response.status());
  console.log('Response:', responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(productId);
  expect(responseBody.price).toBe(patchProductData.price);
});