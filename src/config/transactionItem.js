const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TransactionItem = sequelize.define('TransactionItem', {
  id_item: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_transaksi: DataTypes.INTEGER,
  id_product: DataTypes.INTEGER,
  qty: DataTypes.INTEGER,
  harga_satuan: DataTypes.DECIMAL(12,2),
  subtotal: DataTypes.DECIMAL(12,2)
}, { tableName: 'transaction_items', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = TransactionItem;
