'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([ queryInterface.addColumn(
      'items', 'imageUrl', Sequelize.STRING

    ), queryInterface.addColumn(
      'items', 'UserID', Sequelize.STRING
    ), queryInterface.addColumn(
      'items', 'item_Name', Sequelize.STRING
    ), queryInterface.addColumn(
      'items', 'Description', Sequelize.STRING
    )])
    


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
