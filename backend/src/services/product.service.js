const {
  ComparisonProducts, Comparison, Product, Search,
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

const retryBuscapeData = async (category, search) => {
  const buscape = await buscapeData(category, search);

  if (buscape.length > 0) {
    const transaction = await Product.sequelize.transaction();

    try {
      const promises = buscape.map(async (item) => {
        const data = await Product.create(item, { transaction });

        if (item.products) {
          const products = await Comparison.bulkCreate(item.products, { transaction });
          await ComparisonProducts.bulkCreate(products.map((p) => (
            { productId: data.id, comparisonId: p.id }
          )), { transaction });
          return { ...data.dataValues, products };
        }

        return data;
      });

      const result = await Promise.all(promises);

      await transaction.commit();

      return JSON.stringify(result);
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  return JSON.stringify(buscape);
};

const createMany = async (category, search, schData) => retryBuscapeData(category, search, schData);

module.exports = {
  createMany,
  findAll,
};
