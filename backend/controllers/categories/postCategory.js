const mysql = require("../../mysql");

const postCategory = async (req, res, next) => {
  try {
    const query = "INSERT INTO categories (name) VALUES (?)";
    const params = [req.body.name];

    const result = await mysql.execute(query, params);

    const response = {
      message: "Successfully created Category",
      createdCategory: {
        categoryId: result.insertId,
        name: req.body.name,
        request: {
          type: "GET",
          description: "Return all categories",
          url: `http://localhost:3000/categories`,
        },
      },
    };
    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

module.exports = postCategory;
