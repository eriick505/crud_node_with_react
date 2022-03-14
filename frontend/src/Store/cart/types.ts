import type { ICartItem, Product } from "Types/products";

export type InitialState = {
  productList: ICartItem[];
  isCartOpen: boolean;
  total: number;
};

export type Actions = {
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  removeInCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  getTotal: () => void;
};

export type UseCartStore = {
  states: InitialState;
  actions: Actions;
};
