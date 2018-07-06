"use strict"
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: { type: DataTypes.STRING(50), primaryKey: true },
      password: { type: DataTypes.STRING(50), allowNull: false }
    },
    {
      // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#configuration
      // Timestamps
      // createdAt: DataTypes.DATE,
      // updatedAt: DataTypes.DATE
      // add the timestamp attributes (updatedAt, createdAt)
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      tableName: "Users"
    }
  ) //使用下划线命名法 //不自动修改表名 // define the table's name

  User.associate = function(models) {
    models.User.hasMany(models.Task)
  }

  return User
}
