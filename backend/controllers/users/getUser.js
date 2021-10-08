const jwt = require("jsonwebtoken");

const getUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);
    console.log(decode, "<--- decode");

    return res.status(200).send(decode);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = getUser;
