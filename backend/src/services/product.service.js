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

const retryBuscapeData = async (category, search, schData) => {
  const buscape = await buscapeData(category, search, schData);

  if (buscape.length > 0) {
    const transaction = await Product.sequelize.transaction();

    try {
      const promises = buscape.map(async (item) => {
        const data = await Product.create(item, { transaction });

        if (item.products) {
          const products = await Comparison.bulkCreate(item.products, { transaction });

          const comparisonProducts = products.map((p) => ({
            productId: data.id,
            comparisonId: p.id,
          }));

          await ComparisonProducts.bulkCreate(comparisonProducts, { transaction });

          return { ...data.dataValues, products };
        }

        return data;
      });

      const result = await Promise.allSettled(promises);

      const rejectedPromises = result.filter((p) => p.status === 'rejected');

      if (rejectedPromises.length > 0) {
        throw new Error('Ocorreu um erro ao processar os itens do buscape.');
      }

      await transaction.commit();

      return JSON.stringify(result.map((p) => p.value));
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
