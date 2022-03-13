const mysql = require("../../mysql");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await mysql.execute("SELECT * FROM products");

    const response = {
      quantity: result.length,
      products: result.map((product) => ({
        id_product: product.id_product,
        name: product.name,
        price: product.price,
        image_product: product.image_product,
        request: {
          type: "GET",
          description: "Get product details",
          url: `http://localhost:3000/products/${product.id_product}`,
        },
      })),
    };

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

module.exports = getAllProducts;
