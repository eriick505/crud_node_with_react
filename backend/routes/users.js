const express = require("express");
const router = express.Router();

const signUpController = require("../controllers/users/signup");
const loginController = require("../controllers/users/login");
const getUserController = require("../controllers/users/getUser");

router.post("/signup", signUpController);
router.post("/login", loginController);
router.post("/get-user", getUserController);

module.exports = router;
