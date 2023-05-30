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
      const promise = buscape.map(async (p, i) => {
        const { id } = await Product.create(p);
        return { id, ...buscape[i] };
      });

      const products = await Promise.all(promise);

      /*       if (item.products) {
          const products = await Comparison.bulkCreate(item.products, { transaction });
          await ComparisonProducts.bulkCreate(products.map((p) => (
            { productId: data.id, comparisonId: p.id })), { transaction });
          return { ...data.dataValues, products };
        } */

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
