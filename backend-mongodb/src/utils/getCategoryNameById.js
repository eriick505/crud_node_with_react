const mysql = require("../mysql");

const getCategoryNameById = async (id) => {
  const query = "SELECT * FROM categories WHERE categoryId = ?";
  const params = [id];

  const categoryResult = await mysql.execute(query, params);

  if (categoryResult.length === 0) return null;

  return categoryResult[0].name;
};

module.exports = getCategoryNameById;
