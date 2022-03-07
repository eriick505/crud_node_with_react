import { Badge, Box, IconButton, Image } from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";

import type { Product } from "Types/products.types";

type ProductCardProps = {
  data: Product;
  deleteProduct: (id: number) => void;
};

function ProductCard({ data, deleteProduct }: ProductCardProps) {
  const { id_product, name, image_product, price } = data;

  const imageWithUrl = `http://localhost:3000/${image_product}`;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        boxSize="300px"
        objectFit="cover"
        src={imageWithUrl}
        fallbackSrc="https://via.placeholder.com/300"
        alt={name}
      />

      <Box p="6">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {id_product}
          </Badge>

          <IconButton
            colorScheme="red"
            aria-label="Delete product"
            onClick={() => deleteProduct(id_product)}
            icon={<FiTrash />}
          />
        </Box>

        <Box
          isTruncated
          as="h4"
          mt="1"
          fontWeight="semibold"
          lineHeight="tight"
        >
          {name}
        </Box>

        <Box>R$ {price}</Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
