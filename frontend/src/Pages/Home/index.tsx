import { Container } from "@chakra-ui/react";

import useAuth from "Hooks/useAuth";

import ProductList from "Components/ProductList";
import { CartDrawer } from "Components/Cart";

function PageHome() {
  const { userAuth } = useAuth();

  return (
    <Container maxW="container.lg" mt={50}>
      <h1>{userAuth.data?.name}</h1>
      <ProductList />
      <CartDrawer />
    </Container>
  );
}

export default PageHome;
