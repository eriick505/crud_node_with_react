import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import FormSignIn from "Components/FormSignIn";

function PageLogin() {
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("gray.700", "gray.50");

  return (
    <Container maxW="container.sm" mt={50}>
      <Box
        as="section"
        bg={bg}
        color={color}
        boxShadow="2xl"
        py={8}
        px={4}
        borderRadius="lg"
      >
        <Heading as="h1" size="2xl" mb={10} textAlign="center">
          Login
        </Heading>

        <FormSignIn />

        <Box mt={4}>
          <span>
            Não possui conta?{" "}
            <Link as={RouterLink} to="/login/signup">
              Criar Conta.
            </Link>
          </span>
        </Box>
      </Box>
    </Container>
  );
}

export default PageLogin;
