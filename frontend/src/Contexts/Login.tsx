import { createContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { tokenKey } from "Services/api";
import { USER_INFO_POST, USER_LOGIN_POST } from "Services/login";

import type { UserBodyGetRequest, UserData } from "Types/user";

type LoginContextType = {
  handleUserData: {
    data?: UserData;
    loading: boolean;
    error?: string;
    hasUserData: boolean;
  };
  handleAuth: {
    login: (body: UserBodyGetRequest) => void;
    loading: boolean;
    error: boolean;
  };
  userLogout: () => void;
};

type LoginProviderProps = {
  children?: React.ReactNode;
};

export const AuthContext = createContext<LoginContextType>(
  {} as LoginContextType
);

function AuthProvider({ children }: LoginProviderProps) {
  const history = useHistory();
  const queryClient = useQueryClient();

  const token = window.localStorage.getItem(tokenKey);

  const setUser = useCallback(
    (data: UserData) => queryClient.setQueryData("auth-user", data),
    [queryClient]
  );

  const loadUserData = async () => {
    console.log("buscando loadUserData...");

    if (!token) return Promise.reject("Fail to load user");

    return await USER_INFO_POST(token).then((r) => r.data);
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

  const loginFn = async (body: UserBodyGetRequest) => {
    const { data } = await USER_LOGIN_POST(body);
    const user = await USER_INFO_POST(data.token);

    window.localStorage.setItem(tokenKey, data.token);
    history.push("/");

    return user.data;
  };

  const loginMutation = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      setUser(user);
    },
  });

  const userLogout = useCallback(() => {
    window.localStorage.removeItem(tokenKey);
    userData.remove();
    loginMutation.reset();
    history.push("/login");
  }, [history, loginMutation, userData]);

  const handleUserData = {
    data: userData.data,
    loading: userData.isLoading,
    error: userData.error?.message,
    hasUserData: userData.isSuccess,
  };

  const handleAuth = {
    login: loginMutation.mutateAsync,
    loading: loginMutation.isLoading,
    error: loginMutation.isError,
  };

  return (
    <AuthContext.Provider
      value={{
        handleUserData,
        handleAuth,
        userLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
