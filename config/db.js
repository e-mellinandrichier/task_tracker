const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('taskmanager', 'postgres', 'GRRR', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
