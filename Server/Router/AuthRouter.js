const express = require("express");
const signUpRouter = express.Router();
const loginRouter = express.Router();
const authController = require("../Controller/AuthController");

signUpRouter.route("/").post(authController.SignUp);
loginRouter.route("/").post(authController.login);

module.exports = { signUpRouter, loginRouter };
