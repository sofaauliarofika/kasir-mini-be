const router = require('express').Router();
const trxController = require('../controllers/transactionsController');
const auth = require('../middlewares/auth');

router.post('/', auth, trxController.createTransaction);

module.exports = router;
