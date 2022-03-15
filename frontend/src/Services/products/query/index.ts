import { useQuery } from "react-query";

import { GET_LIST_PRODUCT } from "Services/products";

import type { DataProducts } from "Types/products";

export const useListProduct = (filter?: number) =>
  useQuery<DataProducts, Error>(
    "productList",
    () => GET_LIST_PRODUCT().then((r) => r.data),
    {
      select: (data) => {
        const products = data.products.filter((product) =>
          filter ? product.category.categoryId === filter : product
        );

        return {
          products,
          quantity: data.quantity,
        };
      },
    }
  );
