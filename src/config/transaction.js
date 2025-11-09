const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transaction = sequelize.define('Transaction', {
  id_transaksi: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  kode_transaksi: DataTypes.STRING,
  id_user: DataTypes.INTEGER,
  total_harga: DataTypes.DECIMAL(12,2),
  total_item: DataTypes.INTEGER,
  total_profit: DataTypes.DECIMAL(12,2),
  metode_id: DataTypes.INTEGER,
  status: { type: DataTypes.ENUM('selesai','belum_lunas','belum_bayar','batal'), defaultValue: 'selesai' },
  nama_customer: DataTypes.STRING,
  tanggal_transaksi: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  dibayar: DataTypes.DECIMAL(12,2),
  kembalian: DataTypes.DECIMAL(12,2),
  ekspedisi: DataTypes.STRING,
  no_resi: DataTypes.STRING
}, { tableName: 'transactions', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = Transaction;
