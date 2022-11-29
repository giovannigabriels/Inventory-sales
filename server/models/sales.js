"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sales.init(
    {
      codeTransaction: DataTypes.STRING,
      dateTransaction: DataTypes.DATE,
      customer: DataTypes.INTEGER,
      item: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      totalDiscount: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      totalPay: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sales",
    }
  );
  return Sales;
};
