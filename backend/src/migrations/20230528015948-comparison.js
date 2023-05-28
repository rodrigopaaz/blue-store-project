module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Comparison = queryInterface.createTable('comparison', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      info: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'search',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      company_img: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      link: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return Comparison;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comparison');
  },
};
