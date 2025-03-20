const getConnection = require('../libs/postgres')

class UserService {
  constructor(){

  }

  async create() {

  }

  async find() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM tasks')
    return (rta.rows)
  }

  async findOne() {

  }

  async update() {

  }

  async delete() {

  }
}

module.exports = UserService;
