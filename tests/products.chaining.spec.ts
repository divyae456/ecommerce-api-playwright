
import { test, expect } from '@playwright/test';

test('API chaining - POST, GET, PUT and DELETE', async ({ request }) => {
  // POST - Create a product
  const createResponse = await request.post('/products/add', {
    data: {
      title: 'Playwright API Chaining Product',
      price: 500,
      description: 'Product created for API chaining practice',
      category: 'laptops',
    },
  });

  expect(createResponse.status()).toBe(201);

  const createdProduct = await createResponse.json();
  console.log('Created product ID:', createdProduct.id);

  expect(createdProduct.title).toBe(
    'Playwright API Chaining Product',
  );

  // GET - Fetch an existing product
  const productId = 1;

  const getResponse = await request.get(`/products/${productId}`);
  expect(getResponse.status()).toBe(200);

  const fetchedProduct = await getResponse.json();
  expect(fetchedProduct.id).toBe(productId);

  console.log('Fetched product:', fetchedProduct.title);

  // PUT - Simulate updating the product
  const updateResponse = await request.put(`/products/${productId}`, {
    data: {
      title: 'Updated Playwright Product',
      price: 750,
      description: 'Updated during API chaining practice',
      category: 'laptops',
    },
  });

  expect(updateResponse.status()).toBe(200);

  const updatedProduct = await updateResponse.json();
  expect(updatedProduct.title).toBe('Updated Playwright Product');

  console.log('Updated product:', updatedProduct.title);

  // DELETE - Simulate deleting the product
  const deleteResponse = await request.delete(`/products/${productId}`);

  expect(deleteResponse.status()).toBe(200);

  const deletedProduct = await deleteResponse.json();
  console.log('Delete response:', deletedProduct);

  console.log('API chaining test completed successfully.');
});