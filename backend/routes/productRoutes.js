const express = require('express');
const {
  addProduct,
  editProduct,
  deleteProduct,
  getProducts,
  getProduct,
} = require('../controllers/productController');

const router = express.Router();

// Product Routes
router.post('/', addProduct); // Add a new product
router.put('/:id', editProduct); // Edit a product
router.delete('/:id', deleteProduct); // Delete a product
router.get('/', getProducts); // Get all products
router.get('/:id', getProduct); // Get a single product by ID

module.exports = router;
