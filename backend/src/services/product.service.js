const {
  Product, Search,
} = require('../models');
const { buscapeData } = require('./data');

const findAll = () => {
  const data = Product.findAll({
    include: [
      { model: Search, as: 'search' },
    ],
  });
  return data;
};

const retryBuscapeData = async (category, search, schData) => {
  const buscape = await buscapeData(category, search, schData);

  switch (buscape.length) {
    case 0:
      return retryBuscapeData(category, search);
    default:
      await Product.bulkCreate(buscape);
      return JSON.stringify(buscape);
  }
};
const createMany = async (category, search, schData) => retryBuscapeData(category, search, schData);

module.exports = {
  createMany,
  findAll,
};
