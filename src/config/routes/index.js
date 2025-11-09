const express = require('express');
const router = express.Router();
router.use('/auth', require('./auth'));
router.use('/products', require('./products'));
router.use('/transactions', require('./transactions'));
// tambah routes lain: users, categories, expenses, reports, settings
module.exports = router;
