import { Category } from "Types/categories";

export type Product = {
  id_product: number;
  name: string;
  price: number;
  image_product: string;
  category: Category;
};

export type DataProducts = {
  products: Product[];
  quantity: number;
};

export interface ICartItem extends Product {
  quantity: number;
}
