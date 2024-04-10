const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://avnadmin:AVNS_l76yf8pt_4GmaI2EHAI@mysql-2a0788cf-amolthakare631-9302.b.aivencloud.com:23526/evaluation', {
  dialect: 'mysql',
  host: 'mysql-2a0788cf-amolthakare631-9302.b.aivencloud.com'
});

module.exports = sequelize;
