const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('evaluation', 'amolthakare', 'Amol@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;