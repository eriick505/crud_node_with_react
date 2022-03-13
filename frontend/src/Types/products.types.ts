export type Product = {
  id_product: number;
  name: string;
  price: number;
  image_product: string;
};

export type DataProducts = {
  products: Product[];
  quantity: number;
};

export interface ICartItem extends Product {
  quantity: number;
}
