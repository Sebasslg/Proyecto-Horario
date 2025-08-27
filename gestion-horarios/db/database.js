const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/gestion.db' // archivo local
});

module.exports = sequelize;
