const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  body: DataTypes.TEXT
});

module.exports = Post;
