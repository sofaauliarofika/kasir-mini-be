const sequelize = require('../config/db');
const User = require('./user');
const Category = require('./category');
const Product = require('./product');
const Transaction = require('./transaction');
const TransactionItem = require('./transactionItem');
const Expense = require('./expense');
const Payment = require('./payment');
const Setting = require('./setting');

// Relasi
User.hasMany(Transaction, { foreignKey: 'id_user' });
Transaction.belongsTo(User, { foreignKey: 'id_user' });

Category.hasMany(Product, { foreignKey: 'kategori_id' });
Product.belongsTo(Category, { foreignKey: 'kategori_id' });

Transaction.hasMany(TransactionItem, { foreignKey: 'id_transaksi' });
TransactionItem.belongsTo(Transaction, { foreignKey: 'id_transaksi' });

Product.hasMany(TransactionItem, { foreignKey: 'id_product' });
TransactionItem.belongsTo(Product, { foreignKey: 'id_product' });

User.hasMany(Expense, { foreignKey: 'id_user' });
Expense.belongsTo(User, { foreignKey: 'id_user' });

Payment.hasMany(Transaction, { foreignKey: 'metode_id' });
Transaction.belongsTo(Payment, { foreignKey: 'metode_id' });

module.exports = {
  sequelize,
  User, Category, Product, Transaction, TransactionItem, Expense, Payment, Setting
};
