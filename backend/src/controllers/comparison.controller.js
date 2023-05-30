const { comparisonService } = require('../services');

const create = async (req, res) => {
  try {
    const { items } = req.body;
    const result = await comparisonService.create(items);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  create,
};
