const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Setting = sequelize.define('Setting', {
  id_setting: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama_toko: DataTypes.STRING,
  alamat: DataTypes.TEXT,
  catatan_pembeli: DataTypes.TEXT,
  profit_formula: DataTypes.STRING
}, { tableName: 'settings', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = Setting;
