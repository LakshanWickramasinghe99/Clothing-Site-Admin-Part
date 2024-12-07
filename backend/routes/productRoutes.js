const express = require('express');
const { getAllProducts } = require('../Controllers/ProductController');
const router = express.Router();

// Route to get all products
router.get('/', getAllProducts);

module.exports = router;
