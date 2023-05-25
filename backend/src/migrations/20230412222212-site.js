module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Site = queryInterface.createTable('sites', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

    });
    return Site;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sites');
  },
};
