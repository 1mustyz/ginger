'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Order.associate = models => {
    Order.belongsTo(models.Supplier, {
      foreignKey: 'supplierId'
    });
  }

  Order.init({
    suppliersId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    goods: DataTypes.STRING,
    qnty: DataTypes.STRING,
    deliveryAddress: DataTypes.STRING,
    isDelevered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};