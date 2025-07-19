import type { Category } from "./Category";
import type { Brand } from "./brand";

export type Product = {
  id?: string,
  name: string;
  image: string;
  price: number;
  originalPrice: number,
  discount:string
  category?: Category,
  brand?: Brand,
  year?: string,
  origin?: string
}
