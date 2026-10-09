import { APIRequestContext } from '@playwright/test';

import {
  CreateProductRequest,
  UpdateProductRequest,
  PatchProductRequest,
} from '../types/product.types';

export class ProductApiClient {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getProduct(productId: number) {
    return await this.request.get(`/products/${productId}`);
  }

  async getProducts() {
    return await this.request.get('/products');
  }

  async createProduct(productData: CreateProductRequest) {
    return await this.request.post('/products/add', {
      data: productData,
    });
  }

  async updateProduct(
    productId: number,
    productData: UpdateProductRequest,
  ) {
    return await this.request.put(`/products/${productId}`, {
      data: productData,
    });
  }

  async patchProduct(
    productId: number,
    productData: PatchProductRequest,
  ) {
    return await this.request.patch(`/products/${productId}`, {
      data: productData,
    });
  }

  async deleteProduct(productId: number) {
    return await this.request.delete(`/products/${productId}`);
  }
}