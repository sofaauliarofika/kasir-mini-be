const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  id_product: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama_product: { type: DataTypes.STRING, allowNull: false },
  barcode: DataTypes.STRING,
  stok: { type: DataTypes.INTEGER, defaultValue: 0 },
  kategori_id: DataTypes.INTEGER,
  satuan: DataTypes.STRING,
  harga_beli: DataTypes.DECIMAL(12,2),
  harga_jual: DataTypes.DECIMAL(12,2),
  foto: DataTypes.STRING
}, { tableName: 'products', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = Product;
