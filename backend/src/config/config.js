/* eslint-disable global-require */
require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 3306,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
};

module.exports = {
  development: {
    ...config,
    database: process.env.MYSQL_DATABASE || 'info_store_database',
  },
};
