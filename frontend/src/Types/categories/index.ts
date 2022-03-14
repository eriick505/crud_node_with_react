export type Category = {
  categoryId: number;
  name: string;
};

export type ListCategories = {
  length: number;
  categories: Category[];
};
