'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplierId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{  
          model:'Suppliers',
          key:'id',
          as:'supplierId'
        },
      },
      stockName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      qntyInBags: {
        type: Sequelize.STRING
      },
      stockPic: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Stocks');
  }
};