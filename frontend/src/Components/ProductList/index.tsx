import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "Components/ProductCard";

function ProductList() {
  return (
    <Container maxW="container.lg" mt={50}>
      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        Lista de Produtos
      </Heading>

      <SimpleGrid columns={3} spacing={10}>
        {Array.from({ length: 9 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProductList;
