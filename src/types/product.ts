export interface ProductVariant {
  id: string;
  productId: string;
  colorName: string;
  colorHex: string;
  price: number;
  stock: number;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  brand?: string;
  images: string[];
  availableColors?: string[];
  variants?: ProductVariant[];
  stock: number;
  featured?: boolean;
  isNew?: boolean;
  isActive: boolean;
  tags?: string[];
  characteristics?: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variantId?: string;
  colorName?: string;
  colorHex?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  backgroundColor: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
}