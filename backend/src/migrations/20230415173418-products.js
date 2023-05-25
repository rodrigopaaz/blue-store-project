module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      site_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sites',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      search_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'search',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image_url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      link_url: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
    });
    return Products;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
