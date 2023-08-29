"use strict";

module.exports = (sequelize, DataTypes) => {
  const categoryModel = sequelize.define(
    "Category",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'categories',
    //   underscored: true // Desabilitar timestamps.
    }
  );
  return categoryModel;
};