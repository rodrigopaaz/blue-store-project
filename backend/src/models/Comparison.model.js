module.exports = (sequelize, DataTypes) => {
  const Comparison = sequelize.define(
    'Comparison',
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      info: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      productImg: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      company: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      companyImg: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      link: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { timestamps: false, underscored: true, tableName: 'comparison' },
  );

  Comparison.associate = (models) => {
    Comparison.belongsToMany(models.Product, {
      through: models.ComparisonProducts,
      foreignKey: 'comparisonId',
      otherKey: 'productId',
      as: 'productsData',
    });
  };

  return Comparison;
};
