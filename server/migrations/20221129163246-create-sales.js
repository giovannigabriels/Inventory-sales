"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      codeTransaction: {
        type: Sequelize.STRING,
      },
      dateTransaction: {
        type: Sequelize.DATE,
      },
      customer: {
        type: Sequelize.STRING,
      },
      item: {
        type: Sequelize.STRING,
      },
      qty: {
        type: Sequelize.INTEGER,
      },
      totalDiscount: {
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        type: Sequelize.INTEGER,
      },
      totalPay: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Sales");
  },
};
