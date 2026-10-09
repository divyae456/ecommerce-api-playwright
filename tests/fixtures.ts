import { test as base } from '@playwright/test';
import { ProductApiClient } from '../src/clients/productApiClient';

type ApiFixtures = {
  productApi: ProductApiClient;
};

export const test = base.extend<ApiFixtures>({
  productApi: async ({ request }, use) => {
    const productApi = new ProductApiClient(request);
    await use(productApi);
  },
});

export { expect } from '@playwright/test';