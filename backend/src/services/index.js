const categoryService = require('./category.service');
const searchService = require('./search.service');
const productService = require('./product.service');
const userService = require('./user.service');
const { loginService } = require('./login.service');

module.exports = {
  categoryService,
  productService,
  searchService,
  userService,
  loginService,
};
