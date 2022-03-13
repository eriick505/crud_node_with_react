import { AxiosResponse } from "axios";

import http from "Services/api";

import type {
  AuthUserRequest,
  AuthUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  UserData,
} from "Types/user";

type AuthUserDataResponse = Promise<AxiosResponse<AuthUserResponse>>;
type UserDataResponse = Promise<UserData>;
type CreateUserResponse = Promise<AxiosResponse<RegisterUserResponse>>;

export const SERVICE_USER_POST = "/users/signup";
export const SERVICE_LOGIN_POST = "/users/login";
export const SERVICE_USER_INFO_POST = "/users/get-user";

export const CREATE_USER_POST = (
  body: RegisterUserRequest
): CreateUserResponse => http.post(SERVICE_USER_POST, body);

export const USER_LOGIN_POST = (body: AuthUserRequest): AuthUserDataResponse =>
  http.post(SERVICE_LOGIN_POST, body);

export const USER_INFO_POST = (token?: string): UserDataResponse =>
  http
    .post<UserData>(SERVICE_USER_INFO_POST, undefined, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((r) => r.data);
