
const { Pool } = require('pg');
const { config } = require('../config/config')


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
//console.log("🔗 Conectando a:", URL);

const pool = new Pool({ connectionString: URL });


module.exports = pool;

