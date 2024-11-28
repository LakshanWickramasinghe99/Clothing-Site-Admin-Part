const express = require('express');
const {
  getOrders,
  getOrder,
  updateOrderStatus,
  requestRefund,
  processRefund,
  generateInvoice,
} = require('../controllers/orderController');

const router = express.Router();

// Routes for Order Management
router.get('/', getOrders); // View all orders
router.get('/:id', getOrder); // View a single order by ID
router.put('/:id/status', updateOrderStatus); // Update order status
router.post('/:id/refund', requestRefund); // Request a refund
router.put('/:id/refund/process', processRefund); // Process a refund
router.get('/:id/invoice', generateInvoice); // Generate an invoice for an order

module.exports = router;
