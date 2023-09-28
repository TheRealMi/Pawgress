const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Training extends Model {}

Training.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
    },
    imageFile:{
        type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    behavior_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'behavior',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'training',
  }
);

module.exports = Training;