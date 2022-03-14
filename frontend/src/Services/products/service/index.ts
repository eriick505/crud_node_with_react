import { AxiosResponse } from "axios";
import http from "Services/api";

import {
  SERVICE_CREATE_PRODUCT,
  SERVICE_DELETE_PRODUCT,
  SERVICE_LIST_PRODUCT,
} from "../utils/routes";

import type { DataProducts } from "Types/products";

export const GET_LIST_PRODUCT = (): Promise<AxiosResponse<DataProducts>> =>
  http.get(SERVICE_LIST_PRODUCT);

export const POST_CREATE_PRODUCT = (body: FormData) =>
  http.post(SERVICE_CREATE_PRODUCT, body);

export const DELETE_PRODUCT = (id: number) =>
  http.delete(SERVICE_DELETE_PRODUCT, { data: { id_product: id } });
