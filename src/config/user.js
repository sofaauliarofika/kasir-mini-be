const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  nama_kasir: DataTypes.STRING,
  no_hp: DataTypes.STRING,
  role: { type: DataTypes.ENUM('admin','kasir'), defaultValue: 'kasir' },
  pin_security: DataTypes.STRING,
  foto: DataTypes.STRING
}, { tableName: 'users', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = User;
