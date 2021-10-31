const boom = require('@hapi/boom');
// const getConection = require('../libs/postgres')
// const { boomify } = require('@hapi/boom');
const { models } = require('../libs/sequelize') // model lo crea automaticamente

class CustomerService {
  constructor() {}

  async create(data) {
    // Forma larga
    // const newUser = await models.User.create(data.user)
    // const newCustomer = await models.Customer.create({
    //   ...data,
    //   userId: newUser.id
    // })

    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    })

    return newCustomer;
  }

  async find() {
    // const client = await getConection()
    // const rta = await client.query('SELECT * FROM tasks')

    // return rta.rows
    const rpta = await models.Customer.findAll({
      include: ['user']
    })
    return rpta
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id)
    if ( ! customer ) {
      throw boom.notFound('Customer not found')
    }
    return customer;
  }

  async update(id, changes) {
    // const Customer = await models.Customer.findByPk(id)
    const customer = await this.findOne(id)
    const rta = await customer.update(changes)
    return rta
  }

  async delete(id) {
    // const Customer = await models.Customer.findByPk(id)
    const customer = await this.findOne(id)
    await customer.destroy()
    return { id };
  }
}

module.exports = CustomerService;
