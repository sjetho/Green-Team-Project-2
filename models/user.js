'use strict';
const db = {};
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    creditcard: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

module.exports = db;