/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define(
    'Site',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { timestamps: false, underscored: true, tableName: 'sites' },
  );

  Site.associate = (models) => {
    Site.hasMany(models.Product, { foreignKey: 'siteId', as: 'sites' });
  };

  return Site;
};
