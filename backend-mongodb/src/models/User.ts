import { Schema, model } from "mongoose";

import type { IUserRequest } from "@type/user";

const userSchema = new Schema<IUserRequest>({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<IUserRequest>("User", userSchema);

export default User;
