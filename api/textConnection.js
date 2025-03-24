const pool = require('./libs/postgres.pool');

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('🟢 Conexión exitosa:', result.rows[0]);
  } catch (error) {
    console.error('🔴 Error en la conexión:', error.message);
  }
}

testConnection();
