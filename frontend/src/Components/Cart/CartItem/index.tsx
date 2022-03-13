import { Box } from "@chakra-ui/layout";

import { Flex, Grid, Heading, IconButton, Image } from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";

import { useCartStore } from "Store/cart";
import { formatterPrice } from "Utils/formatterPriceBRL";

import type { ICartItem } from "Types/products.types";

type CartItemProps = {
  product: ICartItem;
};

export function CartItem({ product }: CartItemProps) {
  const cart = useCartStore();

  const removeInCart = cart.actions.removeInCart;
  const increaseQuantity = cart.actions.increaseQuantity;
  const decreaseQuantity = cart.actions.decreaseQuantity;

  const priceFormated = formatterPrice.format(product.price);

  return (
    <Grid
      as="li"
      templateColumns="140px 1fr"
      gap={1}
      p={4}
      borderRadius={10}
      bg="gray.800"
      shadow="md"
    >
      <Image
        w={140}
        height={170}
        src={product.image_product}
        alt={product.name}
        objectFit="cover"
      />

      <Flex
        direction="column"
        justifyContent="center"
        position="relative"
        pl={3}
      >
        <Grid templateColumns="1fr 34px" alignItems="center" mb={2}>
          <Heading as="h4" size="lg" textTransform="capitalize">
            {product.name}
          </Heading>

          <IconButton
            aria-label="Remove product in cart"
            borderRadius="full"
            fontSize="x-small"
            color="red.700"
            bg="red.200"
            _hover={{
              bg: "red.300",
            }}
            size="sm"
            icon={<FiTrash size={14} />}
            onClick={() => removeInCart(product.id_product)}
          />
        </Grid>

        <Box>
          <Box fontSize={14} fontWeight="ligth" mb={4}>
            {priceFormated}
          </Box>

          <Flex w="40%" justifyContent="space-between" alignItems="center">
            <IconButton
              aria-label="Decrease quantity"
              borderRadius="full"
              size="sm"
              icon={<span>-</span>}
              onClick={() => decreaseQuantity(product.id_product)}
            />

            <Box as="span" color="white.600" fontSize="sm">
              {product.quantity}
            </Box>

            <IconButton
              aria-label="Increase quantity"
              borderRadius="full"
              size="sm"
              icon={<span>+</span>}
              onClick={() => increaseQuantity(product.id_product)}
            />
          </Flex>
        </Box>
      </Flex>
    </Grid>
  );
}
