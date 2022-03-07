import { FormEvent } from "react";

import { Alert, AlertIcon } from "@chakra-ui/react";

import useAuth from "Hooks/useAuth";
import useInput from "Hooks/useInput";

import FormButton from "Components/FormButton";
import FormInputControl from "Components/FormInputControl";

function FormSignIn() {
  const email = useInput();
  const password = useInput();

  const { handleAuth } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isFieldsAreValid = email.validate() && password.validate();

    if (!isFieldsAreValid) return;

    await handleAuth.login({ email: email.value, password: password.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputControl
          mb={4}
          required={true}
          label="E-mail"
          type="email"
          name="email"
          {...email}
        />

        <FormInputControl
          mb={4}
          required={true}
          label="Senha"
          type="password"
          name="password"
          {...password}
        />

        <FormButton
          type="submit"
          loading={handleAuth.loading}
          loadingText="Entrando..."
          width="100%"
          text="Entrar"
        />
      </form>

      {handleAuth.error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          Falha ao logar
        </Alert>
      )}
    </>
  );
}

export default FormSignIn;
