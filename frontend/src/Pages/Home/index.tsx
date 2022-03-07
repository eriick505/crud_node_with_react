import { Container } from "@chakra-ui/react";

import useAuth from "Hooks/useAuth";

import ProductList from "Components/ProductList";

function PageHome() {
  const { handleUserData } = useAuth();

  return (
    <Container maxW="container.lg" mt={50}>
      <h1>{handleUserData.data?.name}</h1>
      <ProductList />
    </Container>
  );
}

export default PageHome;
