const mysql = require("../../mysql");
const getCategoryNameById = require("../../utils/getCategoryNameById");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await mysql.execute("SELECT * FROM products");

    const productsPromise = result.map(async (product) => ({
      id_product: product.id_product,
      name: product.name,
      price: product.price,
      image_product: product.image_product,
      category: {
        categoryId: product.categoryId,
        name: await getCategoryNameById(product.categoryId),
      },
      request: {
        type: "GET",
        description: "Get product details",
        url: `http://localhost:3000/products/${product.id_product}`,
      },
    }));

    const products = await Promise.all(productsPromise);

    const response = {
      quantity: result.length,
      products,
    };

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

module.exports = getAllProducts;
