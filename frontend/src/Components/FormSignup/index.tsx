import { FormEvent, useState } from "react";

import axios from "axios";
import http from "Services/api";
import { CREATE_USER_POST } from "Services/login";

import useInput from "Hooks/useInput";

import FormInputControl from "Components/FormInputControl";
import FormButton from "Components/FormButton";
import useLogin from "Hooks/useLogin";

type ErrorMessage = {
  message?: string;
};

function FormSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const name = useInput();
  const email = useInput();
  const password = useInput();

  const { handleLogin, error: loginError } = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isFieldsAreValid =
      name.validate() && email.validate() && password.validate();

    if (isFieldsAreValid) {
      try {
        setLoading(true);
        const { data, status, statusText } = await http.post(CREATE_USER_POST, {
          name: name.value,
          email: email.value,
          password: password.value,
        });

        if (status !== 201) throw new Error();

        console.log(data, status, statusText);
        setError(null);
        handleLogin({ email: email.value, password: password.value });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          const { data, status } = err.response;

          if (status === 409) {
            const { message }: ErrorMessage = data;
            return setError(message);
          }

          return setError((err as Error).message);
        }

        setError((err as Error).message);
      } finally {
        setLoading(false);
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

      {(error || loginError) && <p>{error ?? loginError}</p>}
    </>
  );
}

export default FormSignup;
