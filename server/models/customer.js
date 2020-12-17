'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Cart)
    }
  };
  Customer.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'email empty'
        },
        isEmail:{
          args: true,
          msg: `correct format: example@mail.com`
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password empty'
        },
        len: {
          args: [6],
          msg: `password should contain minimum 6 characters`
        }
      },
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  Customer.addHook('beforeCreate', (customer, options) => {
    let salt = bcrypt.genSaltSync(10);
    customer.password = bcrypt.hashSync(customer.password, salt);
    customer.role = "customer"
  });
  return Customer;
};