import jwt from "jsonwebtoken";
import User from "../../models/User.js";

const getUserByToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);

    if (!decode) {
      return res.status(500).send({ error: "Token is not invalid" });
    }

    const id = decode.id;

    const user = await User.findById(id);

    if (!user) return res.status(404).send({ error: "User not exist" });

    const response = {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone ?? null,
      },
    };

    return res.status(200).send(response);
  } catch (err) {
    return res.status(406).send({ error: err.message });
  }
};

export default getUserByToken;
