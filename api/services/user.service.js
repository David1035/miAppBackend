class UserService {
  constructor(){

  }

  create() {

  }

  find(limit, offset) {
    if(limit && offset) {
      return { limit, offset }
    } else {
      return { message: 'No hay parámetros' }
    }
  }

  findOne() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = UserService;
