export interface IUser {
  name: string;
  phone: number;
  email: string;
}

export interface IUserRequest extends IUser {
  password: string;
}
