import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

type WrapperSignInSignUpProps = {
  heading: string;
  children: JSX.Element | JSX.Element[];
  textAfterForm: string;
  routerTo: string;
  textRouter: string;
};

function WrapperSignInSignUp({
  heading,
  children,
  textAfterForm,
  routerTo,
  textRouter,
}: WrapperSignInSignUpProps) {
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("gray.700", "gray.50");

  return (
    <Container maxW="container.sm" mt={50}>
      <Box
        as="section"
        boxShadow="2xl"
        py={8}
        px={4}
        borderRadius="lg"
        color={color}
        bg={bg}
      >
        <Heading as="h1" size="2xl" mb={10} textAlign="center">
          {heading}
        </Heading>

        {children}

        <Box mt={4}>
          <span>
            {textAfterForm}{" "}
            <Link as={RouterLink} to={routerTo} color="purple.500">
              {textRouter}
            </Link>
          </span>
        </Box>
      </Box>
    </Container>
  );
}

export default WrapperSignInSignUp;
