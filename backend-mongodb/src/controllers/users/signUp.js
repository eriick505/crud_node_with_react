import { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User.js";

const signup = async (req, res, next) => {
  try {
    const email = req.body.email;

    const hasUserRegistered = await User.findOne({ email });

    if (hasUserRegistered) {
      return res.status(409).send({ error: "Already registered user" });
    }

    const password = req.body.password;
    const hash = hashSync(password, 10);

    if (!hash) return res.status(500).send({ error: "User creation failed" });

    const name = req.body.name;
    const phone = req.body.phone;

    const user = {
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

export default signup;
