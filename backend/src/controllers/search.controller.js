const { searchService } = require('../services');

const createSearch = async (req, res) => {
  try {
    const { searchDescription } = req.body;
    const { id } = await searchService.create(searchDescription);
    return res.status(201).json({ searchId: id });
  } catch (error) {
    return res.status(400).json({ message: 'An Error Ocurred' });
  }
};

module.exports = {
  createSearch,
};
