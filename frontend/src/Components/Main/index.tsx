import { Flex } from "@chakra-ui/react";
import Routing from "routes";

function Main() {
  return (
    <Flex as="main" grow={1} align="center">
      <Routing />
    </Flex>
  );
}

export default Main;
