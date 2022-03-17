const express = require("express");
const router = express.Router();
const login = require("../middleware/login");

const getAllCategories = require("../controllers/categories/getAllCategories");
const postCategory = require("../controllers/categories/postCategory");

router.get("/", getAllCategories);
router.post("/", login.required, postCategory);

module.exports = router;
