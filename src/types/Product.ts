import type { Category } from './Category';
import type { Brand } from './brand';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  images?: string[];
  description?: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isHot?: boolean;
  sold?: number;
  stock?: number;
  categoryId?: string; 
  category?: Category; 
  brand?: Brand;
  year?: string;
  origin?: string;
}
