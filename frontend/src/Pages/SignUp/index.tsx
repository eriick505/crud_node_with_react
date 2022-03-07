import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";

import FormSignup from "Components/FormSignup";

function PageSignUp() {
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
          Cadastrar Usuário
        </Heading>

        <FormSignup />
      </Box>
    </Container>
  );
}

export default PageSignUp;
