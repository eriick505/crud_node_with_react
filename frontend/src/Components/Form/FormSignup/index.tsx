import { FormEvent } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

import useInput from "Hooks/useInput";
import useAuth from "Hooks/useAuth";

import FormInputControl from "../FormInputControl";
import FormButton from "../FormButton";

function FormSignup() {
  const { registerAuth } = useAuth();

  const name = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isFieldsAreValid =
      name.validate() && email.validate() && password.validate();

    if (isFieldsAreValid) {
      registerAuth.register({
        name: name.value,
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputControl
          mb={4}
          required={true}
          label="Nome"
          type="text"
          name="nome"
          {...name}
        />

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
          loading={registerAuth.loading}
          loadingText="Enviando..."
          width="100%"
          text="Enviar"
        />
      </form>

      {registerAuth.error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          Falha ao cadastrar o usuário
        </Alert>
      )}
    </>
  );
}

export default FormSignup;
