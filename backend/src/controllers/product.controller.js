const { productService } = require('../services');
const { Search } = require('../models');
const { createMany } = require('../services/product.service');

const createProduct = async (req, res) => {
  try {
    const { site, category, search } = req.body;
    const dataBase = await productService.findAll();

    const checkProduct = dataBase.find((item) => (
      item.search.description === search
        && item.categoryName.name === category
        && item.siteName.name === site
    ));

    if (!checkProduct) {
      const searchData = await Search.create({
        description: search,
      });

      const data = await createMany(site, category, searchData);
      return res.status(201).json(data);
    }
    const filteredData = dataBase.filter(
      (product) => product.search.description === search
        && product.categoryName.name === category
        && product.siteName.name === site,
    );
    return res.status(201).json(JSON.stringify(filteredData));
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  createProduct,
};
