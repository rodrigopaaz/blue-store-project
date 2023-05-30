const {
  ComparisonProducts,
} = require('../models');

const create = async (productId, comparisonId) => {
  const data = await ComparisonProducts.bulkCreate(comparisonId.map((p) => (
    { productId, comparisonId: p.id })));
  return data;
};

module.exports = {
  create,
};
