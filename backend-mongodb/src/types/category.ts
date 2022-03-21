import { RequestRecommended } from "./common";

export interface ICategory {
  name: string;
}

export interface IGetAllCategoriesResponse {
  quantity: number;
  categories: ICategory[];
}

export interface IPostCategoryRequest {
  name: string;
}

export interface IPostCategoryResponse {
  message: string;
  categoryCreated: {
    categoryId: string;
    name: string;
  };
  request: RequestRecommended;
}
