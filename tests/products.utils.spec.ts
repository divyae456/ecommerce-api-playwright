
import { test, expect } from '@playwright/test';
import { expectStatus, getJson } from '../src/utils/api.utils';
import type { ProductResponse } from '../src/types/product.types';

test('GET - Validate product using reusable utilities', async ({
  request,
}) => {
  const response = await request.get('/products/1');

  await expectStatus(response, 200);

  const product = await getJson<ProductResponse>(response);

  expect(product.id).toBe(1);
  expect(product.title).toBeTruthy();
  expect(typeof product.price).toBe('number');

  console.log('Product:', product.title);
});