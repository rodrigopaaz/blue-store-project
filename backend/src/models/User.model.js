module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'Users',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    },
  );

  return users;
};
