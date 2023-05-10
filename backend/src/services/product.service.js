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

const createMany = async (name, category, search) => {
  const buscape = await buscapeData(category, search);
  Product.bulkCreate(buscape);
  return JSON.stringify(buscape);
};

module.exports = {
  createMany,
  findAll,
};
