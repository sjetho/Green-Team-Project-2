'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    Food: DataTypes.STRING,
    Bedding: DataTypes.STRING,
    Clothes: DataTypes.STRING,
    FirstAid: DataTypes.STRING,
    Toiletries: DataTypes.STRING,
    Electronics: DataTypes.STRING,
    Automobile: DataTypes.STRING
  }, {});
  Items.associate = function(models) {
    // associations can be defined here
  };
  return Items;
};