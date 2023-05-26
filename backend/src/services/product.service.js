const {
  Product, Search, Category, Site,
} = require('../models');
const { buscapeData } = require('./data');

const findAll = () => {
  const data = Product.findAll({
    include: [
      { model: Search, as: 'search' },
      { model: Category, as: 'categoryName' },
      { model: Site, as: 'siteName' },
    ],
  });
  return data;
};

const retryBuscapeData = async (category, search) => {
  const buscape = await buscapeData(category, search);

  switch (buscape.length) {
    case 0:
      return retryBuscapeData(category, search);
    default:
      return JSON.stringify(buscape);
  }
};
const createMany = async (category, search) => retryBuscapeData(category, search);

module.exports = {
  createMany,
  findAll,
};
