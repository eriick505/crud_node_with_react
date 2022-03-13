import { QueryObserverResult } from "react-query";

import type {
  AuthUserRequest,
  RegisterUserRequest,
  RegisterUserResponse,
  UserData,
} from "Types/user";

type UserAuthType = {
  validateUser: (options?: {
    throwOnError?: boolean;
    cancelRefetch?: boolean;
  }) => Promise<QueryObserverResult<UserData | undefined, Error>>;
  data?: UserData;
  loading: boolean;
  error?: string;
  fulfilled: boolean;
};

type LoginAuthType = {
  login: (body: AuthUserRequest) => void;
  logout: () => void;
  loading: boolean;
  error: boolean;
};

type RegisterAuthType = {
  register: (body: RegisterUserRequest) => void;
  data?: RegisterUserResponse;
  loading: boolean;
  fulfilled: boolean;
  error: boolean;
};

export type LoginContextType = {
  userAuth: UserAuthType;
  loginAuth: LoginAuthType;
  registerAuth: RegisterAuthType;
};

export type LoginProviderProps = {
  children?: React.ReactNode;
};
