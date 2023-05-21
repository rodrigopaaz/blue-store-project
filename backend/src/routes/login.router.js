const express = require('express');
const { loginController } = require('../controllers');
const { validatePassword, validateEmail } = require('../middlewares/login.validate');

const loginRouter = express.Router();

loginRouter.post(
  '/',
  validatePassword,
  validateEmail,
  loginController,
);

module.exports = loginRouter;
