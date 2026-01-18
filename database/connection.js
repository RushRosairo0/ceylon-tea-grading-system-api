const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

// sequelize instance
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
  pool: {
    max: parseInt(config.connections),
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});

// test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to the database:${config.database} successfully!`);
  })
  .catch((error) => {
    console.error(`Unable to connect to the database: ${error.message}`);
    process.exit();
  });

module.exports = sequelize;
