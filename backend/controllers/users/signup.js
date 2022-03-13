const mysql = require("../../mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const query = "SELECT * FROM users WHERE email = ?";
    const email = req.body.email;
    const params = [email];

    const results = await mysql.execute(query, params);

    if (results.length > 0) {
      return res.status(409).send({ error: "Already registered user" });
    }

    const password = req.body.password;
    const hash = bcrypt.hashSync(password, 10);

    if (!hash) return res.status(500).send({ error: "User creation failed" });

    const queryInsert =
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    const name = req.body.name;
    const paramsInsert = [name, email, hash];

    const resultInsert = await mysql.execute(queryInsert, paramsInsert);
    const id_user = resultInsert.insertId;

    const userCreated = {
      id_user,
      name,
      email,
    };

    const token = jwt.sign(userCreated, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    const response = {
      message: "Successfully created user",
      userCreated,
      token,
    };

    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

module.exports = signup;
