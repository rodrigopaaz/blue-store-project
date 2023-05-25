module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Search = queryInterface.createTable('search', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return Search;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('search');
  },
};
