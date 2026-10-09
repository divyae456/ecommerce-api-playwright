
import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import { productSchema } from '../src/schemas/product.schema';

const ajv = new Ajv();

test('GET - Validate product JSON schema', async ({ request }) => {
    const response = await request.get('/products/1');

    expect(response.status()).toBe(200);

    const product = await response.json();

    const validate = ajv.compile(productSchema);
    const isValid = validate(product);

    if (!isValid) {
        console.error('Schema errors:', validate.errors);
    }

    expect(isValid).toBe(true);
});