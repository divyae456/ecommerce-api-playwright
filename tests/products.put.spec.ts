import { test, expect } from '@playwright/test';
import { ProductApiClient } from '../src/clients/productApiClient';
import { updateProductData } from '../src/data/product.data';

test('PUT - Update an existing product', async ({ request }) => {
  const productApi = new ProductApiClient(request);

  const productId = 1;

  const response = await productApi.updateProduct(
    productId,
    updateProductData,
  );

  const responseBody = await response.json();

  console.log('Status:', response.status());
  console.log('Response:', responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(productId);
  expect(responseBody.title).toBe(updateProductData.title);
  expect(responseBody.price).toBe(updateProductData.price);
});