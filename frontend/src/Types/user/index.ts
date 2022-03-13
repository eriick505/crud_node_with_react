export type AuthUserRequest = {
  email: string;
  password: string;
};

export type AuthUserResponse = {
  message: string;
  token: string;
};

export type RegisterUserRequest = {
  name: string;
  email: string;
  password: string;
};

export type RegisterUserResponse = {
  message: string;
  userCreated: {
    id_user: number;
    name: string;
    email: string;
  };
  token: string;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
};
