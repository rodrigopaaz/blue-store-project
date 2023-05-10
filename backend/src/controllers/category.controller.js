const { categoryService } = require('../services');

const findAll = async (_req, res) => {
  const dataService = await categoryService.findAll();

  res.status(200).json(dataService);
};

module.exports = {
  findAll,
};
