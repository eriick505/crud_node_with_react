const mysql = require("../../mysql");

const getCategories = async (req, res, next) => {
  try {
    const result = await mysql.execute("SELECT * FROM categories;");

    const response = {
      length: result.length,
      categories: result.map((category) => ({
        categoryId: category.categoryId,
        name: category.name,
      })),
    };

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

module.exports = getCategories;
