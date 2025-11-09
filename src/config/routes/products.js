const router = require('express').Router();
const { Product } = require('../models');
const auth = require('../middlewares/auth');

router.get('/', auth, async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/', auth, async (req, res) => {
  const p = await Product.create(req.body);
  res.status(201).json(p);
});

module.exports = router;
