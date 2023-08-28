"use strict";

const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true // Desabilitar timestamps
    }
  );
  return userModel;
};
