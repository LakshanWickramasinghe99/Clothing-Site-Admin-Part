// controllers/itemController.js

const items = require('../Model/itemModel');

// Get all items
const getAllItems = (req, res) => {
  res.json(items);
};

// Get a single item by ID
const getItemById = (req, res) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === parseInt(id));

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

// Export the controller functions
module.exports = {
  getAllItems,
  getItemById
};
