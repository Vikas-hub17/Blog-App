const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('blogdb', 'my_user', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
