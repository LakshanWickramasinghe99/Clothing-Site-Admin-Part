// routes/itemRoutes.js

const express = require('express');
const router = express.Router();
const { getAllItems, getItemById } = require('../Controllers/itemController');

// Define the routes
router.get('/', getAllItems);
router.get('/:id', getItemById);

module.exports = router;
