const md5 = require('md5');
const { User } = require('../models');
const { createToken } = require('../utils/JWT.token');

const createUserService = async (info) => {
  try {
    const {
      name, email, password, role,
    } = info;
    const userExist = await User.findOne({
      where: {
        name, email, password: md5(password), role,
      },
    });
    if (userExist) throw new Error('User alredy exists');
    const data = await User.create({
      name,
      email,
      password: md5(password),
      role,
    });
    const token = createToken({ data });
    return {
      token, name, email, role,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUserService,
};
