const {
  Comparison,
  ComparisonProducts,
} = require('../models');

const create = async (items) => {
  const transaction = await Comparison.sequelize.transaction();

  try {
    const createdProducts = await Comparison.bulkCreate(
      items.products,
      { transaction, returning: true },
    );
    const comparisonProducts = createdProducts.map((p) => ({
      productId: items.id,
      comparisonId: p.id,
    }));

    await ComparisonProducts.bulkCreate(comparisonProducts, { transaction });

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = {
  create,
};
