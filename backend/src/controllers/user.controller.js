const {
  createUserService,
} = require('../services');

const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await createUserService({
      name,
      email,
      password,
      role: 'customer',
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

module.exports = {
  createUserController,
};
