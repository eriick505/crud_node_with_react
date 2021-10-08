import { ChangeEvent, useState } from "react";

type UseInput = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  validate: () => boolean;
  onBlur: () => boolean;
};

function useInput(): UseInput {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateValue = (value: string): boolean => {
    if (value.length <= 3) {
      setError("Preencha um valor válido");
      return false;
    }

    setError("");
    return true;
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (error) validateValue(target.value);
    setValue(target.value);
  };

  return {
    value,
    onChange,
    error,
    validate: () => validateValue(value),
    onBlur: () => validateValue(value),
  };
}

export default useInput;
