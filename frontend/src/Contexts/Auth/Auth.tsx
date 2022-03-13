import { useCallback } from "react";

import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { tokenKey } from "Services/login/utils";

import {
  CREATE_USER_POST,
  USER_INFO_POST,
  USER_LOGIN_POST,
} from "Services/login";

import { AuthContext } from "./AuthContext";

import type {
  AuthUserRequest,
  RegisterUserRequest,
  UserData,
} from "Types/user";

import type { LoginProviderProps } from "./types";

export function AuthProvider({ children }: LoginProviderProps) {
  const history = useHistory();
  const queryClient = useQueryClient();

  const token = window.localStorage.getItem(tokenKey);

  const setUser = useCallback(
    (data: UserData) => queryClient.setQueryData(["auth-user"], data),
    [queryClient]
  );

  const loadUserData = async () => {
    if (!token) return Promise.reject("Fail to load user");

    return await USER_INFO_POST(token);
  };

  const userData = useQuery<UserData | undefined, Error>({
    queryKey: "auth-user",
    queryFn: loadUserData,
    onSuccess: () => {
      history.push("/");
    },
    onError: () => {
      window.localStorage.removeItem(tokenKey);
    },
    enabled: Boolean(token),
    staleTime: 15 * 60 * 1000, // 15 minutes
    refetchInterval: (_, query) => (query.isStale() ? 1 : false), // 1 = mili-second
  });

  const loginFn = async (body: AuthUserRequest) => {
    const { data } = await USER_LOGIN_POST(body);
    const user = await USER_INFO_POST(data.token);

    window.localStorage.setItem(tokenKey, data.token);

    return user;
  };

  const loginMutation = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      setUser(user);
      history.push("/");
    },
  });

  const registerFn = async (body: RegisterUserRequest) => {
    return await CREATE_USER_POST(body).then((r) => r.data);
  };

  const registerMutation = useMutation({
    mutationFn: registerFn,
    onSuccess: (data) => {
      window.localStorage.setItem(tokenKey, data.token);
    },
  });

  const handleLogout = useCallback(() => {
    window.localStorage.removeItem(tokenKey);
    userData.remove();
    loginMutation.reset();
    history.push("/login");
  }, [history, loginMutation, userData]);

  const userAuth = {
    validateUser: userData.refetch,
    data: userData.data,
    loading: userData.isLoading,
    error: (userData.error as Error)?.message,
    fulfilled: userData.isSuccess,
  };

  const loginAuth = {
    login: loginMutation.mutate,
    logout: handleLogout,
    loading: loginMutation.isLoading,
    error: loginMutation.isError,
  };

  const registerAuth = {
    register: registerMutation.mutate,
    loading: registerMutation.isLoading,
    fulfilled: registerMutation.isSuccess,
    error: registerMutation.isError,
    data: registerMutation.data,
  };

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        loginAuth,
        registerAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
