const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  id_kategori: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama_kategori: DataTypes.STRING
}, { tableName: 'categories', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = Category;
