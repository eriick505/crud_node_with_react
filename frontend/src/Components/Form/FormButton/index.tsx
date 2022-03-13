import { Button } from "@chakra-ui/react";

type FormButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  loadingText?: string;
  handleClick?: () => void;
  size?: string;
  width?: string;
  height?: string;
  color?: string;
  bg?: string;
  bgActive?: string;
  text: string;
};

function FormButton({
  type,
  handleClick,
  loading,
  loadingText,
  size,
  width,
  height,
  color,
  bg,
  bgActive,
  text,
}: FormButtonProps) {
  return (
    <Button
      type={type}
      onClick={handleClick}
      isLoading={loading}
      loadingText={loadingText}
      size={size}
      width={width}
      h={height}
      color={color ?? "white"}
      bg={bg ?? "purple.500"}
      _hover={{ bg: bgActive ?? "#38A169" }}
      _active={{
        bg: bgActive,
      }}
    >
      {text}
    </Button>
  );
}

export default FormButton;
