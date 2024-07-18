const express = require('express');
const { placeOrder, getUserOrders, getAllOrders, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, placeOrder);
router.get('/', authMiddleware, getUserOrders);
router.get('/admin', authMiddleware, getAllOrders);
router.put('/:id', authMiddleware, updateOrderStatus);

module.exports = router;
