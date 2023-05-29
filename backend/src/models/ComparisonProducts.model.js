module.exports = (sequelize, DataTypes) => {
  const ComparisonProducts = sequelize.define(
    'ComparisonProducts',
    {
      comparisonId: { type: DataTypes.INTEGER, primaryKey: true },
      productId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      timestamps: false,
      tableName: 'comparison_product',
      underscored: true,
    },
  );

  ComparisonProducts.associate = (models) => {
    models.Comparison.belongsToMany(models.ComparisonProducts, {
      through: ComparisonProducts,
      foreignKey: 'comparison_id',
      otherKey: 'product_id',
      as: 'products',
    });
    models.Product.belongsToMany(models.ComparisonProducts, {
      through: ComparisonProducts,
      foreignKey: 'product_id',
      otherKey: 'comparison_id',
      as: 'comparison',
    });
  };

  return ComparisonProducts;
};
