const {
  Comparison, Product, Search,
} = require('../models');
const { buscapeData } = require('./data');

const findAll = async () => {
  const data = await Product.findAll({
    include: [
      { model: Search, as: 'search' },
      { model: Comparison, as: 'products' },
    ],
  });

  return data;
};

const retryBuscapeData = async (category, search, schData) => {
  const buscape = await buscapeData(category, search, schData);

  if (buscape.length > 0) {
    try {
      const createdProducts = await Product.bulkCreate(buscape, { returning: true });

      const products = createdProducts.map((product, i) => ({ id: product.id, ...buscape[i] }));

      return JSON.stringify(products);
    } catch (error) {
      return [];
    }
  }

  return retryBuscapeData(category, search);
};

const createMany = async (category, search, schData) => retryBuscapeData(category, search, schData);

module.exports = {
  createMany,
  findAll,
};
