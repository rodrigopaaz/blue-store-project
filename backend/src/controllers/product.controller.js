const { Search } = require('../models');
const { productService } = require('../services');
const { createMany } = require('../services/product.service');

const createProduct = async (req, res) => {
  try {
    const { category, search } = req.body;

    const dataBase = await productService.findAll();
    const checkProduct = dataBase.find((item) => (
      item.search.description === search
    ));
    if (!checkProduct) {
      const searchData = await Search.create({
        description: search,
      });

      const data = await createMany(category, search, searchData);
      return res.status(201).json(data);
    }
    const filteredData = dataBase.filter(
      (product) => product.search.description === search,
    );
    return res.status(201).json(JSON.stringify(filteredData));
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const findAll = async (_req, res) => {
  const dataService = await productService.findAll();

  res.status(200).json(dataService);
};

module.exports = {
  createProduct, findAll,
};
