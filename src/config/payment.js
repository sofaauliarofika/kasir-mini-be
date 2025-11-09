const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Payment = sequelize.define('Payment', {
  id_metode: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama_metode: DataTypes.STRING
}, { tableName: 'payments', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });

module.exports = Payment;
