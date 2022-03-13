import create from "zustand";
import produce from "immer";

import type { UseCartStore } from "./types";

export const useCartStore = create<UseCartStore>((set, get) => {
  const setState = (fn: (v: UseCartStore) => void) => set(produce(fn));

  return {
    states: {
      productList: [],
      isCartOpen: false,
      total: 0,
    },

    actions: {
      toggleCart: () => {
        setState(({ states }) => {
          states.isCartOpen = !states.isCartOpen;
        });
      },

      addToCart: (product) => {
        setState(({ states }) => {
          const productFound = states.productList.find(
            (prevProd) => prevProd.id_product === product.id_product
          );

          if (!productFound) {
            const productWithQuantity = { ...product, quantity: 1 };

            states.productList.push(productWithQuantity);
          }

          if (productFound) {
            productFound.quantity += 1;
          }
        });

        get().actions.getTotal();
      },

      removeInCart: (productId) => {
        setState(({ states }) => {
          const get = states.productList.filter(
            (p) => p.id_product !== productId
          );

          states.productList = get;
        });

        get().actions.getTotal();
      },

      increaseQuantity: (productId) => {
        setState(({ states }) => {
          const productInList = states.productList.find(
            (prevProd) => prevProd.id_product === productId
          );

          if (productInList) {
            productInList.quantity++;
          }
        });

        get().actions.getTotal();
      },

      decreaseQuantity: (productId: number) => {
        setState(({ states }) => {
          const product = states.productList.find(
            (prevProd) => prevProd.id_product === productId
          );

          if (product && product.quantity > 1) {
            product.quantity -= 1;
          }
        });

        get().actions.getTotal();
      },

      getTotal: () => {
        const productList = get().states.productList;

        const priceTotal = productList.reduce((acc, prod) => {
          const price = prod.price * prod.quantity;

          return acc + price;
        }, 0);

        setState(({ states }) => {
          states.total = priceTotal;
        });
      },
    },
  };
});
