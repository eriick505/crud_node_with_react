const jwt = require("jsonwebtoken");

exports.required = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);
    console.log(decode, "decode");
    console.log("aqui");
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Authentication Fails" });
  }
};

exports.optional = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);
    req.user = decode;
    next();
  } catch (error) {
    next();
  }
};
