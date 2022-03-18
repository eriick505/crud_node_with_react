import { Request, Response } from "express";
import { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

import User from "@models/User";

import type { IUserRequest, IUser } from "@type/user";
import type { ResponseError } from "@type/common";

type ResponseSignUp = {
  message: string;
  user: IUser;
  token: string;
};

const signUp = async (
  req: Request<{}, {}, IUserRequest>,
  res: Response<ResponseSignUp | ResponseError>
) => {
  try {
    const { name, email, phone, password } = req.body;

    const tryValidate = {
      name: !!name,
      email: !!email,
      phone: !!phone,
      password: !!password,
    };

    const bodyFields = Object.keys(tryValidate).map(
      (item) => tryValidate[item] === true ?? false
    );

    const isBodyFieldsValidy = bodyFields.every((field) => field);

    if (!isBodyFieldsValidy) {
      const requiredFields = bodyFields
        .map((field, index) => !field && Object.keys(tryValidate)[index])
        .filter((field) => field);

      return res.status(400).send({
        error: {
          message: "Falha ao informar os campos do body",
          requiredFields,
        },
      });
    }

    const hasUserRegistered = await User.findOne({ email });

    if (hasUserRegistered) {
      return res.status(409).send({ error: "Already registered user" });
    }

    const hash = hashSync(password, 10);

    if (!hash) return res.status(500).send({ error: "User creation failed" });

    const user: IUser = {
      name,
      email,
      phone,
    };

    await User.create({ ...user, password: hash });

    const token = jwt.sign(user, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    const response = {
      message: "Successfully created user",
      user,
      token,
    };

    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export default signUp;
