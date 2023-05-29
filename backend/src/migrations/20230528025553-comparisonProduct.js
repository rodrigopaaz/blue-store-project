module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comparison_product', {
      comparison_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'comparison',
          key: 'id',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      product_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('comparison_product');
  },
};
