"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("blog_posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        type: Sequelize.DATE,
      },
      updated: {
        type: Sequelize.DATE,
      },
    }, {
      timestamps: false, // Desabilitar timestamps
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("blog_posts");
  },
};

