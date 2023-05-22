const express = require('express');
const { validatePassword, validateEmail } = require('../middlewares/login.validate');
const { loginController } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post(
  '/',
  validatePassword,
  validateEmail,
  loginController,
);

module.exports = loginRouter;
