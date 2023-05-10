const { Search } = require('../models');

const findAll = async (description) => {
  const data = await Search.findOne({ where: { description } });

  return data;
};

const create = async (searchDescription) => {
  const insertId = await Search.create({
    description: searchDescription,
  });
  return insertId;
};

module.exports = {
  create,
  findAll,
};
