import { AxiosResponse } from "axios";
import http from "Services/api";

import { SERVICE_LIST_CATEGORIES } from "../utils/routes";

import type { ListCategories } from "Types/categories";

export const GET_LIST_CATEGORIES = (): Promise<AxiosResponse<ListCategories>> =>
  http.get(SERVICE_LIST_CATEGORIES);
