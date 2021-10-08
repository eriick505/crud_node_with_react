import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

import http from "Services/api";
import { GET_USER_POST, LOGIN_POST } from "Services/login";

import useLocalStorage from "Hooks/useLocalStorage";

type LoginContextType = {
  login: boolean;
  data: UserData;
  error?: string;
  handleLogin: (body: HandleLogin) => void;
};

type LoginProviderProps = {
  children?: React.ReactNode;
};

type HandleLogin = {
  email: string;
  password: string;
};

type DataResponse = {
  message: string;
  token: string;
};

type UserData = {
  id: number;
  name: string;
  email: string;
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
  const [data, setData] = useState({} as UserData);

  const history = useHistory();
  const [, setToken] = useLocalStorage("userToken", "");

  const getUser = async (token: string) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data, status }: AxiosResponse<UserData> = await http.post(
        GET_USER_POST,
        {},
        options
      );

      if (status !== 200) throw new Error();

      setData(data);
      setLogin(true);
    } catch (e) {}
  };

  const handleLogin = async (body: HandleLogin) => {
    try {
      const { data, status }: AxiosResponse<DataResponse> = await http.post(
        LOGIN_POST,
        body
      );

      if (status !== 200) throw new Error();

      setToken(data.token);

      await getUser(data.token);
      setError(undefined);
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
    <LoginContext.Provider value={{ login, data, error, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
