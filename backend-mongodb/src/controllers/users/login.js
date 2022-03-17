import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User.js";

const login = async (req, res, next) => {
  try {
    const email = req.body.email;

    const hasUserRegistered = await User.findOne({ email });

    if (!hasUserRegistered)
      return res.status(401).send({ message: "Couldn't find your Account" });

    const password = req.body.password;
    const passwordHashDB = hasUserRegistered.password;

    const bCryptResult = bcrypt.compareSync(password, passwordHashDB);

    if (!bCryptResult || !passwordHashDB)
      return res.status(401).send({ message: "Email or password invalid" });

    const id = hasUserRegistered._id;
    const name = hasUserRegistered.name;

    const userLogin = {
      id,
      name,
      email,
    };

    const token = jwt.sign(userLogin, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).send({ message: "Successfully logged in", token });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export default login;
