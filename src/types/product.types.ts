export interface CreateProductRequest {
  title: string;
  price: number;
  description: string;
  category: string;
}

export interface UpdateProductRequest {
  title: string;
  price: number;
  description: string;
  category: string;
}

export interface PatchProductRequest {
  price?: number;
  title?: string;
  description?: string;
  category?: string;
}

export interface ProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  isDeleted?: boolean;
  deletedOn?: string;
}