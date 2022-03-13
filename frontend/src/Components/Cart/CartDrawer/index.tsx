import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import { useCartStore } from "Store/cart";
import { formatterPrice } from "Utils/formatterPriceBRL";

import { CartList } from "../CartList";

export function CartDrawer() {
  const cart = useCartStore();

  const priceFormated = formatterPrice.format(cart.states.total);

  return (
    <>
      <Drawer
        isOpen={cart.states.isCartOpen}
        onClose={cart.actions.toggleCart}
        placement="right"
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading as="h2" size="lg">
              Carrinho
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <CartList />
          </DrawerBody>

          <DrawerFooter
            display="flex"
            justifyContent="space-between"
            alignItems="end"
          >
            <Stat>
              <StatLabel>Sutotal</StatLabel>
              <StatNumber>{priceFormated}</StatNumber>
            </Stat>

            <Button variant="outline" mr={3} bg="green.500">
              Ir para o checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
