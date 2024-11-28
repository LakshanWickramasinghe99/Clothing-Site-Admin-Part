const Product = require('../models/Product');

// Add a new product
const addProduct = async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(500).json({ message: 'Error adding product', error: err.message });
    }
  };
  
  // Edit an existing product
  const editProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json({ message: 'Error updating product', error: err.message });
    }
  };
  
  // Delete a product
  const deleteProduct = async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting product', error: err.message });
    }
  };
  
  // Get all products
  const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
  };
  
  // Get a single product
  const getProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching product', error: err.message });
    }
    };
  
  module.exports = {
    addProduct,
    editProduct,
    deleteProduct,
    getProducts,
    getProduct,
  };
  