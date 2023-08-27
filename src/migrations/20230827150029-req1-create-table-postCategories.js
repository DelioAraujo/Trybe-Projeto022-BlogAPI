'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('post_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'blog_posts', //nome da tabela!
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories', //nome da tabela!
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }, {
      timestamps: false, // Desabilitar timestamps
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_categories');
  }
};