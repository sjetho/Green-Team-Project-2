'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Food: {
        type: Sequelize.STRING
      },
      Bedding: {
        type: Sequelize.STRING
      },
      Clothes: {
        type: Sequelize.STRING
      },
      FirstAid: {
        type: Sequelize.STRING
      },
      Toiletries: {
        type: Sequelize.STRING
      },
      Electronics: {
        type: Sequelize.STRING
      },
      Automobile: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};