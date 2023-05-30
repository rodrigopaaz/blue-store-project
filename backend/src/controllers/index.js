const categoryController = require('./category.controller');
const productController = require('./product.controller');
const searchController = require('./search.controller');
const userController = require('./user.controller');
const comparisonController = require('./comparison.controller');
const comparisonProductsController = require('./comparisonProducts.controller');
const { loginController } = require('./login.controller');

module.exports = {
  categoryController,
  productController,
  searchController,
  userController,
  loginController,
  comparisonController,
  comparisonProductsController,
};
