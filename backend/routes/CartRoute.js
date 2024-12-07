const express = require("express");
const CartController = require("../Controllers/CartController"); // Ensure this path is correct

const router = express.Router();

// Define routes
router.get("/", CartController.getAllItems); // Handle GET requests to /cart
router.post("/", CartController.addItemToCart); // Handle POST requests to /cart
router.put("/:id", CartController.updateItemQuantity); // Handle PUT requests to /cart/:id
router.delete("/:id", CartController.removeItemFromCart); // Handle DELETE requests to /cart/:id

module.exports = router;
