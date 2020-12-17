'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Customer)
      Cart.belongsTo(models.Product)
    }
  };
  Cart.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'quantity empty'
        },
        min: {
          args:[0],
          msg: 'Quantity cannot be less than 0'
        }
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'status empty'
        }
      },
    },
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  Cart.addHook('beforeCreate', (cart, options) => {
    cart.status = false
  });
  return Cart;
};