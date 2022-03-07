import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

type SuccessfullyProps = {
  text: string;
  children?: React.ReactNode;
};

function SuccessfullyMessage({ text, children }: SuccessfullyProps) {
  const bg = useColorModeValue("gray.500", "gray.700");
  const color = useColorModeValue("gray.50", "gray.50");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg={bg}
      p={5}
      borderRadius="lg"
      boxShadow="2xl"
      h={400}
    >
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        mb={5}
        color={color}
        shadow=""
      >
        {text}
      </Heading>

      {children}
    </Flex>
  );
}

export default SuccessfullyMessage;
