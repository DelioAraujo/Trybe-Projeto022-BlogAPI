"use strict";

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "blog_posts", //nome da tabela!
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "categories", //nome da tabela!
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: false,
      tableName: "posts_categories",
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: "postId",
      as: "categories",
    }),
      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        foreignKey: "categoryId",
        otherKey: "postId",
        as: "post",
      });
  };

  return PostCategory;
};
