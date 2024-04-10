const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('evaluation','avnadmin','AVNS_l76yf8pt_4GmaI2EHAI',{
  host: 'mysql-2a0788cf-amolthakare631-9302.b.aivencloud.com',
  dialect: 'mysql'
})

module.exports = sequelize;
