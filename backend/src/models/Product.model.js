module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      categoryId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      searchId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      linkUrl: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false, underscored: true, tableName: 'products' },
  );
  Product.associate = (models) => {
    Product.belongsTo(models.Search, { foreignKey: 'searchId', as: 'search' });
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'categoryName',
    });
  };
  return Product;
};
