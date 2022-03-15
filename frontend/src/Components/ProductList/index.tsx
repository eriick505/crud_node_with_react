import { Heading, SimpleGrid } from "@chakra-ui/react";

import { useListProduct, useDeleteProductMutation } from "Services/products";

import ProductCard from "Components/ProductList/ProductCard";
import FilterProduct from "./Filters";
import { ChangeEvent, useState } from "react";

function ProductList() {
  const [valueSelect, setValueSelect] = useState("");

  const onChangeSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setValueSelect(target.value);
  };

  const {
    isLoading,
    error,
    isError,
    data: listProduct,
  } = useListProduct(Number(valueSelect));

  const productList = listProduct?.products;
  const quantity = listProduct?.quantity;
  const containsProduct = Boolean(quantity && quantity > 0);

  const deleteProduct = useDeleteProductMutation();

  return (
    <>
      <FilterProduct value={valueSelect} onChange={onChangeSelect} />

      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        Lista de Produtos
      </Heading>

      {isLoading && <h1>CARREGANDO</h1>}
      {isError && <h1>{error?.message}</h1>}

      {containsProduct ? (
        <SimpleGrid columns={3} spacing={10}>
          {productList?.map((product) => (
            <ProductCard
              key={product.id_product}
              product={product}
              deleteProduct={deleteProduct.mutate}
            />
          ))}
        </SimpleGrid>
      ) : (
        <p>Nenhum produto.</p>
      )}
    </>
  );
}

export default ProductList;
