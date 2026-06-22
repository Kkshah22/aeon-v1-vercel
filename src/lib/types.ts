export interface Product {
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  category: string;
  categoryName: string;
  images: string[];
  sizes: string[];
  isFeatured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  materials: string[];
  care: string[];
}

export interface CartItem {
  slug: string;
  name: string;
  image: string;
  priceCents: number;
  size: string;
  quantity: number;
}
