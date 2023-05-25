module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'sites',
      [{
        id: 1,
        name: 'mercado livre',
      },
      {
        id: 2,
        name: 'buscape',
      },
      ],
      { timestamps: false },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sites', null, {});
  },
};
