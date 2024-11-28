const Order = require('../models/Order');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// View all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }); // Sort by newest
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders', error: err.message });
  }
};

// View a single order by ID
const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching order', error: err.message });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: 'Error updating order status', error: err.message });
  }
};

// Request a refund
const requestRefund = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    if (order.refundProcessed) {
      return res.status(400).json({ message: 'Refund already processed' });
    }

    order.refundRequested = true;
    await order.save();
    res.status(200).json({ message: 'Refund request submitted', order });
  } catch (err) {
    res.status(500).json({ message: 'Error processing refund request', error: err.message });
  }
};

// Process a refund
const processRefund = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    if (!order.refundRequested) {
      return res.status(400).json({ message: 'No refund requested for this order' });
    }

    order.refundProcessed = true;
    await order.save();
    res.status(200).json({ message: 'Refund processed successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Error processing refund', error: err.message });
  }
};

// Generate an invoice for an order
const generateInvoice = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    const pdfDoc = new PDFDocument();
    const invoicePath = `invoices/invoice-${order._id}.pdf`;

    // Stream the PDF to a file and to the response
    pdfDoc.pipe(fs.createWriteStream(invoicePath));
    pdfDoc.pipe(res);

    // Write invoice details
    pdfDoc.text(`Invoice for Order: ${order._id}`, { align: 'center' });
    pdfDoc.moveDown();
    pdfDoc.text(`Customer: ${order.customer.name}`);
    pdfDoc.text(`Email: ${order.customer.email}`);
    pdfDoc.text(`Address: ${order.customer.address}`);
    pdfDoc.moveDown();
    pdfDoc.text('Items:', { underline: true });
    order.items.forEach((item) => {
      pdfDoc.text(`${item.name} - Qty: ${item.quantity} - $${item.price}`);
    });
    pdfDoc.text(`Total: $${order.totalAmount}`, { bold: true });
    pdfDoc.end();
  } catch (err) {
    res.status(500).json({ message: 'Error generating invoice', error: err.message });
  }
};

module.exports = {
  getOrders,
  getOrder,
  updateOrderStatus,
  requestRefund,
  processRefund,
  generateInvoice, // Added export
};
