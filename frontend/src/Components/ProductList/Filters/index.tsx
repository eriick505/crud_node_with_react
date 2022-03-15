import { ChangeEvent, useState } from "react";

import {
  Select,
  FormLabel,
  FormControl,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useCategoryList } from "Services/categories";

type FilterProductProps = {
  value: string;
  onChange: ({ target }: ChangeEvent<HTMLSelectElement>) => void;
};

function FilterProduct({ value, onChange }: FilterProductProps) {
  const categoriesInfo = useCategoryList();
  const categoryList = categoriesInfo?.data?.categories;

  return (
    <>
      {categoriesInfo.isLoading && <Spinner />}

      {categoryList && (
        <FormControl isRequired mb={4}>
          <FormLabel>Selecione a categoria</FormLabel>
          <Select
            required
            placeholder="Selecione uma categoria"
            value={value}
            onChange={onChange}
          >
            {categoryList.map(({ categoryId, name }) => (
              <option key={categoryId} value={categoryId}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
      )}

      {categoriesInfo.isError && (
        <Text fontSize="sm">{categoriesInfo.error}</Text>
      )}
    </>
  );
}

export default FilterProduct;
