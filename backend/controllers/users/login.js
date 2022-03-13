const mysql = require("../../mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const query = "SELECT * FROM users WHERE email = ?";
    const params = [req.body.email];

    const results = await mysql.execute(query, params);

    if (results.length < 1)
      return res.status(401).send({ message: "Couldn't find your Account" });

    const password = req.body.password;
    const passwordHashDB = results[0].password;

    const bCryptResult = bcrypt.compareSync(password, passwordHashDB);

    if (!bCryptResult || !passwordHashDB)
      return res.status(401).send({ message: "Email or password invalid" });

    const id_user = results[0].id_user;
    const name = results[0].name;
    const email = results[0].email;

    const userLogin = {
      id_user,
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

module.exports = login;
