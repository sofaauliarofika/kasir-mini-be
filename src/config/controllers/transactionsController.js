const { sequelize, Transaction, TransactionItem, Product } = require('../models');

exports.createTransaction = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { items, id_user, nama_customer, metode_id, dibayar } = req.body;
    // hitung totals
    let totalHarga = 0, totalItem = 0, totalProfit = 0;
    for (const it of items) {
      totalHarga += parseFloat(it.harga_satuan) * it.qty;
      totalItem += it.qty;
      totalProfit += (parseFloat(it.harga_satuan) - parseFloat(it.harga_beli || 0)) * it.qty;
    }

    const trx = await Transaction.create({
      kode_transaksi: `TRX-${Date.now()}`,
      id_user, total_harga: totalHarga, total_item: totalItem, total_profit: totalProfit,
      metode_id, nama_customer, dibayar, kembalian: (dibayar || 0) - totalHarga
    }, { transaction: t });

    for (const it of items) {
      await TransactionItem.create({
        id_transaksi: trx.id_transaksi,
        id_product: it.id_product,
        qty: it.qty,
        harga_satuan: it.harga_satuan,
        subtotal: parseFloat(it.harga_satuan) * it.qty
      }, { transaction: t });

      // update stok
      const prod = await Product.findByPk(it.id_product, { transaction: t });
      if (!prod) throw new Error('Produk tidak ditemukan');
      if (prod.stok < it.qty) throw new Error(`Stok ${prod.nama_product} tidak mencukupi`);
      prod.stok = prod.stok - it.qty;
      await prod.save({ transaction: t });
    }

    await t.commit();
    res.status(201).json({ message: 'Transaksi berhasil', transaction: trx });
  } catch (err) {
    await t.rollback();
    res.status(400).json({ message: err.message });
  }
};
