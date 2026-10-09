import { test, expect } from '@playwright/test';
import { ProductApiClient } from '../src/clients/productApiClient';
import { createProductData } from '../src/data/product.data';

test('POST - Create a new product', async ({ request }) => {
  const productApi = new ProductApiClient(request);

  const response = await productApi.createProduct(createProductData);

  console.log('Status:', response.status());

  const responseBody = await response.json();

  console.log('Response:', responseBody);

  expect(response.status()).toBe(201);
  expect(responseBody).toHaveProperty('id');
  expect(responseBody.title).toBe(createProductData.title);
  expect(responseBody.price).toBe(createProductData.price);
});