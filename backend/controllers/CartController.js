const Cart = require("../Model/CartModel"); // Ensure the path is correct

// Get all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Cart.find();
        res.status(200).json(items);
    } catch (error) {
        console.error("Error retrieving cart items:", error); // Log the error
        res.status(500).json({ message: "Error retrieving cart items" });
    }
};

// Add item to cart with input validation
exports.addItemToCart = async (req, res) => {
    const { title, price, quantity, selectedSize, selectedImage, description } = req.body;

    // Input validation
    if (!title || typeof price !== 'number' || typeof quantity !== 'number') {
        return res.status(400).json({ message: "Invalid input data" });
    }

    const totalCost = price * quantity;

    const newItem = new Cart({
        title,
        price,
        quantity,
        selectedSize,
        selectedImage,
        description,
        totalCost,
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error("Error adding item to cart:", error); // Log the error
        res.status(500).json({ message: "Error adding item to cart" });
    }
};

// Update item quantity
exports.updateItemQuantity = async (req, res) => {
    const { id } = req.params; // Get the item ID from the URL
    const { quantity } = req.body; // Get the new quantity from the request body

    if (typeof quantity !== 'number') {
        return res.status(400).json({ message: "Invalid quantity" });
    }

    try {
        const updatedItem = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        console.error("Error updating item quantity:", error); // Log the error
        res.status(500).json({ message: "Error updating item quantity" });
    }
};

// Remove item from cart
exports.removeItemFromCart = async (req, res) => {
    const { id } = req.params; // Get the item ID from the URL

    try {
        const deletedItem = await Cart.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
        console.error("Error removing item from cart:", error); // Log the error
        res.status(500).json({ message: "Error removing item from cart" });
    }
};
