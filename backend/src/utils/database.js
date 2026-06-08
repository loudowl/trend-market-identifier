const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, initDatabase };
