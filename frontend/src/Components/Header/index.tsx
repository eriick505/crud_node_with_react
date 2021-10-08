import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

import HeaderMenu from "Components/HeaderMenu";
import useLogin from "Hooks/useLogin";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.700");

  const { login } = useLogin();

  return (
    <Box as="header" bg={bg} py={3} boxShadow="lg">
      <Container maxW="container.lg">
        <Flex justify="space-around" align="center">
          <Box px={4} py={1} borderRadius="lg" bg="green.500">
            <Heading as="h2" size="xl" color="gray.100">
              LOGO
            </Heading>
          </Box>

          {login ? <HeaderMenu /> : <Spacer />}

          <Button onClick={toggleColorMode} borderRadius="full" w={14} h={14}>
            {colorMode === "dark" ? <FiMoon size={20} /> : <FiSun />}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
