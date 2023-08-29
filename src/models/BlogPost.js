"use strict";

module.exports = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define(
    "BlogPost",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User", // Referência ao modelo de usuário
          key: "id",
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true
    }
  );

  // Definindo a associação com o modelo User
  blogPostModel.associate = (models) => {
    blogPostModel.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
  };

  return blogPostModel;
};
