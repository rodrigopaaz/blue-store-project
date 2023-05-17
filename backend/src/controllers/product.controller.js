const { createMany } = require('../services/product.service');

const createProduct = async (req, res) => {
  try {
    const { category, search } = req.body;
    const data = await createMany(category, search);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  createProduct,
};
