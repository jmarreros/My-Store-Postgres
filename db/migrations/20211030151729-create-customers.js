'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema)
  },

  // Opcion para revertir cambios
  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
