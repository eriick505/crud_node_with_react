import { FormEvent } from "react";
import { Link as RRDLink } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

// import useLogin from "Hooks/useLogin";

import FormButton from "Components/FormButton";
import FormInputControl from "Components/FormInputControl";

function PageLogin() {
  // const { handleLogin } = useLogin();

  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("gray.700", "gray.50");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // handleLogin();
  };

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

        <form onSubmit={handleSubmit}>
          <FormInputControl
            mb={4}
            required={true}
            label="E-mail"
            type="email"
            name="email"
          />

          <FormInputControl
            mb={4}
            required={true}
            label="Senha"
            type="password"
            name="password"
          />

          <FormButton
            type="submit"
            loading={false}
            loadingText="Entrando..."
            width="100%"
            text="Entrar"
          />
        </form>

        <Box mt={4}>
          <span>
            Não possui conta?{" "}
            <Link as={RRDLink} to="/signup">
              Criar Conta.
            </Link>
          </span>
        </Box>
      </Box>
    </Container>
  );
}

export default PageLogin;
