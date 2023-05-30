const {
  Comparison,
  ComparisonProducts,
} = require('../models');

const create = async (items) => {
  console.log(items, 'items'); // recebe um array de produtos de comparação
  const products = await Comparison.bulkCreate(items.products);
  console.log(products, 'products');
  await ComparisonProducts.bulkCreate(products.map((p) => (
    { productId: items.id, comparisonId: p.id })));
};

module.exports = {
  create,
};
