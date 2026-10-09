
import { test, expect } from './fixtures';

test('GET product using custom API fixture', async ({ productApi }) => {
  const response = await productApi.getProduct(1);

  expect(response.status()).toBe(200);

  const product = await response.json();

  expect(product.id).toBe(1);

  console.log('Product title:', product.title);
});
