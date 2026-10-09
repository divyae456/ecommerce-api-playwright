
import { expect } from '@playwright/test';
import type { APIResponse } from '@playwright/test';

export async function expectStatus(
  response: APIResponse,
  expectedStatus: number,
): Promise<void> {
  expect(
    response.status(),
    `Expected HTTP ${expectedStatus}, received ${response.status()}`,
  ).toBe(expectedStatus);
}

export async function getJson<T>(
  response: APIResponse,
): Promise<T> {
  return (await response.json()) as T;
}