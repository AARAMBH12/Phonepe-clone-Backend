const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { sendTransaction, getTransactionHistory } = require('../controllers/transactionController');

router.post('/send', protect, sendTransaction);
router.get('/history', protect, getTransactionHistory);

module.exports = router;
