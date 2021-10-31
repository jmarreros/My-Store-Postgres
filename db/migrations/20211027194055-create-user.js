'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema)
  },

  // Opcion para revertir cambios
  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE)
  }
};
