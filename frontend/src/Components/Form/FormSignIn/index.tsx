import { FormEvent } from "react";

import { Alert, AlertIcon } from "@chakra-ui/react";

import useAuth from "Hooks/useAuth";
import useInput from "Hooks/useInput";

import FormButton from "../FormButton";
import FormInputControl from "../FormInputControl";

function FormSignIn() {
  const email = useInput();
  const password = useInput();

  const { loginAuth } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isFieldsAreValid = email.validate() && password.validate();

    if (!isFieldsAreValid) return;

    loginAuth.login({ email: email.value, password: password.value });
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
          loading={loginAuth.loading}
          loadingText="Entrando..."
          width="100%"
          text="Entrar"
        />
      </form>

      {loginAuth.error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          Falha ao logar
        </Alert>
      )}
    </>
  );
}

export default FormSignIn;
