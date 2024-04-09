const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  website: DataTypes.STRING,
  city: DataTypes.STRING,
  company: DataTypes.STRING
});

module.exports = User;
