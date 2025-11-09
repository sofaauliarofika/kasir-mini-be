const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username }});
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Password salah' });
    const token = jwt.sign({ id_user: user.id_user, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.json({ token, user: { id_user: user.id_user, username: user.username, nama_kasir: user.nama_kasir }});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// contoh register (admin only) - minimal
exports.register = async (req, res) => {
  try {
    const { username, password, nama_kasir, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash, nama_kasir, role: role || 'kasir' });
    res.status(201).json(user);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
