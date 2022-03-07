import { AxiosResponse } from "axios";
import type { UserBodyGetRequest, UserBodyPostRequest, UserData, UserDataResponse } from "Types/user";
import http from "./api";

type UserLoginPost = Promise<AxiosResponse<UserDataResponse>>
type UserInfoPost =  Promise<AxiosResponse<UserData>>

export const SERVICE_USER_POST = "/users/signup";
export const SERVICE_LOGIN_POST = "/users/login";
export const SERVICE_USER_INFO_POST = "/users/get-user";


export const CREATE_USER_POST = (body: UserBodyPostRequest) => http.post(SERVICE_USER_POST, body);

export const USER_LOGIN_POST = (body: UserBodyGetRequest): UserLoginPost => http.post(SERVICE_LOGIN_POST, body)

export const USER_INFO_POST = (token: string): UserInfoPost => http.post(SERVICE_USER_INFO_POST, undefined, { headers: { Authorization: `Bearer ${token}` } })

