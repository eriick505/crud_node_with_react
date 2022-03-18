import { Schema, model } from "mongoose";

import type { IUser } from "src/types/user";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
