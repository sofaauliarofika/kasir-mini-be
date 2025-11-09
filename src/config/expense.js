const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Expense = sequelize.define('Expense', {
  id_expense: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama_pengeluaran: DataTypes.STRING,
  catatan: DataTypes.TEXT,
  nominal: DataTypes.DECIMAL(12,2),
  tanggal_pengeluaran: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  id_user: DataTypes.INTEGER
}, { tableName: 'expenses', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = Expense;
