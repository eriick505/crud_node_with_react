export type UserBodyGetRequest = {
  email: string;
  password: string;
};

export type UserBodyPostRequest = {
  name: string;
  email: string;
  password: string;
};

export type UserDataResponse = {
  message: string;
  token: string;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
};