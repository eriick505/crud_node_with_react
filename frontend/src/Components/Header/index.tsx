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

import { FiSun, FiMoon, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useCartStore } from "Store/cart";
import useAuth from "Hooks/useAuth";

import HeaderMenu from "Components/Header/HeaderMenu";

function Header() {
  const { userAuth } = useAuth();
  const cart = useCartStore();

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.700");

  const quantityProductInCart = cart.states.productList.length;

  return (
    <Box as="header" bg={bg} py={3} boxShadow="lg">
      <Container maxW="container.lg">
        <Flex justify="space-around" align="center">
          <Box px={4} py={1} borderRadius="lg" bg="green.500">
            <Link to="/">
              <Heading as="h2" size="xl" color="gray.100">
                LOGO
              </Heading>
            </Link>
          </Box>

          {userAuth.fulfilled ? <HeaderMenu /> : <Spacer />}

          <Flex>
            <Button
              borderRadius="full"
              w={14}
              h={14}
              mr={3}
              onClick={toggleColorMode}
            >
              {colorMode === "dark" ? <FiMoon size={20} /> : <FiSun />}
            </Button>

            <Button
              bg="green.500"
              borderRadius="full"
              w={14}
              h={14}
              onClick={cart.actions.toggleCart}
            >
              <FiShoppingCart size={20} />
              <Flex
                as="span"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                borderRadius="full"
                top={-1}
                right={-2}
                w={5}
                h={5}
                color="green.500"
                bg="white"
              >
                {quantityProductInCart}
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
