import { Link } from "react-router-dom";
import { Button, Container } from "@chakra-ui/react";

import SuccessfullyMessage from "Components/SuccessfullyMessage";

function UserRegistered() {
  return (
    <Container maxW="container.sm">
      <SuccessfullyMessage text="Cadastro realizado com sucesso!">
        <Button bg="green.500" color="white">
          <Link to="/login">Fazer login </Link>
        </Button>
      </SuccessfullyMessage>
    </Container>
  );
}

export default UserRegistered;
