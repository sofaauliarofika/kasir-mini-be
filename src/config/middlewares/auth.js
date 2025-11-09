const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ message: 'Token tidak ditemukan' });
  const token = header.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token tidak valid' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token expired / tidak valid' });
  }
};
