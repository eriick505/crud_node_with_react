import { SimpleGrid, Text } from "@chakra-ui/react";

import { useCartStore } from "Store/cart";

import { CartItem } from "../CartItem";

export function CartList() {
  const cart = useCartStore();

  const productList = cart.states.productList;

  const isCartEmpty = productList.length < 1;

  return (
    <SimpleGrid as="ul" spacing={3}>
      {productList.map((product) => (
        <CartItem key={product.id_product} product={product} />
      ))}

      {isCartEmpty && <Text>Não há produtos no carrinho.</Text>}
    </SimpleGrid>
  );
}
