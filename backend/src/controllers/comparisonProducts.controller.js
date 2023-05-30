const { comparisonProductsService } = require('../services');

const create = async (req, res) => {
  try {
    const { productId, comparisonId } = req.body;
    const result = await comparisonProductsService.create(productId, comparisonId);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  create,
};
