/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define(
    'Search',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { timestamps: false, underscored: true, tableName: 'search' },
  );

  Site.associate = (models) => {
    Site.hasMany(models.Product, { foreignKey: 'searchId', as: 'search' });
  };

  return Site;
};
