const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
    },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }, // Pending, Processing, Shipped, Delivered, Cancelled
    refundRequested: { type: Boolean, default: false },
    refundProcessed: { type: Boolean, default: false },
  },
  { timestamps: true } //adds createdAt and updatedAt fields
);

module.exports = mongoose.model('Order', OrderSchema);
