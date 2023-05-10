const { Category } = require('../models');

const findAll = async () => {
  const data = await Category.findAll();
  return data;
};

module.exports = {
  findAll,
};
