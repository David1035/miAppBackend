const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URL, {
    dialect: 'postgres',
    logging: true,
})

setupModels(sequelize);
sequelize.sync(); // coge el modelo y hace la estructura. Crea la tabla con la estrutura. 


module.exports = sequelize;