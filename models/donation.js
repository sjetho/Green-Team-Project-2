'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donation = sequelize.define('Donation', {
    userID: DataTypes.STRING,
    item_donated: DataTypes.STRING,
    amount_donated: DataTypes.STRING
  }, {});
  Donation.associate = function(models) {
    // associations can be defined here
  };
  return Donation;
};