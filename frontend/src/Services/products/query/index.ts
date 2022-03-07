import { useQuery } from "react-query";

import { GET_LIST_PRODUCT } from "Services/products";

import type { DataProducts } from "Types/products.types";

export const useListProduct = () =>
  useQuery<DataProducts, Error>("productList", () =>
    GET_LIST_PRODUCT().then((r) => r.data)
  );
