import {
    CreateProductRequest,
    UpdateProductRequest,
    PatchProductRequest,
} from '../types/product.types';

export const createProductData: CreateProductRequest = {
    title: 'QA Automation Laptop',
    price: 999,
    description: 'Laptop created using Playwright API automation',
    category: 'laptops',
};

export const updateProductData: UpdateProductRequest = {
    title: 'Updated QA Automation Laptop',
    price: 1200,
    description: 'Updated product using PUT API',
    category: 'laptops',
};

export const patchProductData: PatchProductRequest = {
    price: 1500,
};