const models = require ('../libs/sequelize')
const boom = require('@hapi/boom');

class UserService {
  constructor(){

  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const query = 'SELECT * FROM cliente'
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const user = await models.User.findAll(id);
    if(!user){
      throw boom.notFound('User not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy();
    return { id }
  }
}

module.exports = UserService;
