import { useQuery } from "react-query";

import { GET_LIST_CATEGORIES } from "Services/categories";

import type { ListCategories } from "Types/categories";

export const useCategoryList = () =>
  useQuery<ListCategories, Error>(["categoryList"], () =>
    GET_LIST_CATEGORIES().then((r) => r.data)
  );
