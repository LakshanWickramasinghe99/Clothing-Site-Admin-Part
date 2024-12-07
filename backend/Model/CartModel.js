
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  selectedSize: { type: String, required: true },
  selectedImage: { type: String, required: true },
  description: { type: String },
  totalCost: { type: Number, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);
