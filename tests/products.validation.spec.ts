
import { test, expect } from '@playwright/test';

test('GET - Validate product response', async ({ request }) => {
    const response = await request.get('/products/1');

    // Validate status code
    expect(response.status()).toBe(200);

    // Validate response headers
    const headers = response.headers();
    expect(headers['content-type']).toContain('application/json');

    // Validate response body
    const product = await response.json();

    expect(product.id).toBe(1);
    expect(product.title).toBeTruthy();
    expect(typeof product.price).toBe('number');

    console.log('Product:', product.title);
    console.log('Price:', product.price);
});

test('GET - Validate nonexistent product', async ({ request }) => {
    const response = await request.get('/products/999999');

    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body.message).toBeTruthy();

    console.log('Error message:', body.message);
});
