import { Badge, Box, IconButton, Image } from "@chakra-ui/react";
import { FiPlusCircle, FiTrash } from "react-icons/fi";

import { useCartStore } from "Store/cart";
import { formatterPrice } from "Utils/formatterPriceBRL";

import type { Product } from "Types/products";

type ProductCardProps = {
  product: Product;
  deleteProduct: (id: number) => void;
};

function ProductCard({ product, deleteProduct }: ProductCardProps) {
  const cart = useCartStore();

  const addToCart = (prod: Product) => cart.actions.addToCart(prod);

  const imageWithUrl = `http://localhost:3000/${product.image_product}`;
  const priceFormated = formatterPrice.format(product.price);
  const productData = { ...product, image_product: imageWithUrl };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        boxSize="300px"
        objectFit="cover"
        src={imageWithUrl}
        fallbackSrc="https://via.placeholder.com/300"
        alt={product.name}
      />

      <Box p="6">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.category.name}
          </Badge>

          <div>
            <IconButton
              colorScheme="green"
              aria-label="Add product to cart"
              mr={2}
              onClick={() => addToCart(productData)}
              icon={<FiPlusCircle />}
            />

            <IconButton
              colorScheme="red"
              aria-label="Delete product"
              onClick={() => deleteProduct(product.id_product)}
              icon={<FiTrash />}
            />
          </div>
        </Box>

        <Box
          isTruncated
          as="h4"
          mt="1"
          fontSize={25}
          fontWeight="semibold"
          lineHeight="tight"
          textTransform="capitalize"
        >
          {product.name}
        </Box>

        <Box>{priceFormated}</Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
