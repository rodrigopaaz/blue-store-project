require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'root';

const secret = SECRET || 'secret_key';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '8d',
};

const createToken = ({ name, email }) => jwt.sign({ name, email }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };
