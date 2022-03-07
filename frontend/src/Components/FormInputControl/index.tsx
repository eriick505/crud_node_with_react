import { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";

import FormButton from "Components/FormButton";

type FormInputControlProps = {
  required?: boolean;
  mr?: number;
  mb?: number;
  label: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
};

function FormInputControl({
  required,
  mr,
  mb,
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  disabled,
  error,
}: FormInputControlProps) {
  const [show, setShow] = useState(false);

  const color = useColorModeValue("gray.400", "gray.50");

  const handleClick = () => setShow(!show);

  return (
    <FormControl isRequired={required} mb={mb} mr={mr}>
      <FormLabel>{label}</FormLabel>

      {type === "password" ? (
        <InputGroup size="md">
          <Input
            pr="4.8rem"
            type={show ? "text" : type}
            name={name}
            borderColor={color}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            isInvalid={Boolean(error)}
          />
          <InputRightElement width="4.5rem" mr="1">
            <FormButton
              type="button"
              height="1.75rem"
              bg="gray.500"
              size="sm"
              text={show ? "Esconder" : "Exibir"}
              handleClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input
          type={type}
          name={name}
          borderColor={color}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          isInvalid={Boolean(error)}
        />
      )}

      {error && <p>{error}</p>}
    </FormControl>
  );
}

export default FormInputControl;
