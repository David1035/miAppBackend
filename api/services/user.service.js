const pool = require('../libs/postgres.pool')

class UserService {
  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err))
  }

  async create() {

  }

  async find() {
    const query = 'SELECT * FROM cliente'
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne() {

  }

  async update() {

  }

  async delete() {

  }
}

module.exports = UserService;
