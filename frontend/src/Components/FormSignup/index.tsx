import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { Alert, AlertIcon } from "@chakra-ui/react";

import axios from "axios";

import { CREATE_USER_POST } from "Services/login";

import useInput from "Hooks/useInput";

import FormInputControl from "Components/FormInputControl";
import FormButton from "Components/FormButton";

import type { ErrorMessage } from "Types";

function FormSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const name = useInput();
  const email = useInput();
  const password = useInput();

  const history = useHistory()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isFieldsAreValid =
      name.validate() && email.validate() && password.validate();

    if (isFieldsAreValid) {
      try {
        setLoading(true);
        setError(null);

        const { status } = await CREATE_USER_POST({
          name: name.value,
          email: email.value,
          password: password.value,
        });

        if (status !== 201) throw new Error();

        setLoading(false);

        history.push('/login/successfully-registered')
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) return setError((err.response.data as ErrorMessage).message);

        setError((err as Error).message);
      } 
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
          loading={loading}
          loadingText="Enviando..."
          width="100%"
          text="Enviar"
        />
      </form>

      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
    </>
  );
}

export default FormSignup;
