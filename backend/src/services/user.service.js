const md5 = require('md5');
const { Users } = require('../models');
const { createToken } = require('../utils/JWT.token');

const createUserService = async (info) => {
  try {
    const {
      name, email, password,
    } = info;
    const userExist = await Users.findOne({
      where: {
        name, email, password: md5(password),
      },
    });
    if (userExist) throw new Error('User alredy exists');
    const data = await Users.create({
      name,
      email,
      password: md5(password),
    });
    const token = createToken({ data });
    return {
      token, name, email,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUserService,
};
