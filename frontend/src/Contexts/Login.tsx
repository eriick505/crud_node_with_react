import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import http from "Services/api";
import { LOGIN_POST } from "Services/login";

type LoginContextType = {
  login: boolean;
  handleLogin: (body: HandleLogin) => void;
  error?: string;
};

type LoginProviderProps = {
  children?: React.ReactNode;
};

type HandleLogin = {
  email: string;
  password: string;
};

type ErrorMessage = {
  message?: string;
};

export const LoginContext = createContext<LoginContextType>(
  {} as LoginContextType
);

function LoginProvider({ children }: LoginProviderProps) {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const history = useHistory();

  const handleLogin = async (body: HandleLogin) => {
    try {
      const { data, status } = await http.post(LOGIN_POST, body);

      if (status !== 200) throw new Error();

      setLogin(true);
      setError(undefined);
      console.log(data); //salvar token
      history.push("/");
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
    }
  };

  return (
    <LoginContext.Provider value={{ login, handleLogin, error }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
