const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize')



class ProductService {
  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      //const products = []
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }
  async find(){
    const query = 'SELECT * FROM usuario'
    const [data, metadata] = await sequelize.query(query);
    return {
      data,
      metadata
    };
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('No encontró el producto');
    } else if (product.isBlock) {
      throw boom.conflict('produc is block');
    } else {
      return product;
    }

  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('product not found')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('product not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}


module.exports = ProductService;
