const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        isIn: [['male', 'female', 'other']]
      },
      typeUser: {
        type: DataTypes.ENUM,
        values: ["admin", "user", "seller"],
        allowNull: false,
        defaultValue: "user"
      },
      isSuperAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }

    },
    {
      timestamps: false,
    }
  );
};
