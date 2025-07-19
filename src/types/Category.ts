import type { Product } from './Product';

export type SubCategory = {
  name: string;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  subCategories: SubCategory[];
  bestSellers: Product[];
};