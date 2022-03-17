const mysql = require("../../mysql");

const postProduct = async (req, res, next) => {
  try {
    const query =
      "INSERT INTO products (name, price, image_product, categoryId) VALUES (?, ?, ?, ?)";
    const params = [
      req.body.name,
      req.body.price,
      req.file.path,
      req.body.categoryId,
    ];

    const results = await mysql.execute(query, params);

    const response = {
      message: "Successfully created product",
      product: {
        id_product: results.insertId,
        name: req.body.name,
        price: req.body.price,
        image_product: req.file.path,
        categoryId: Number(req.body.categoryId),
        request: {
          type: "GET",
          description: "Return all Products",
          url: `http://localhost:3000/products`,
        },
      },
    };

    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

module.exports = postProduct;
