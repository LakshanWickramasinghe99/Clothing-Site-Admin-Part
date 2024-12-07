const Favorite = require("../Model/FavoriteModel");

// Get all favorite items
exports.getAllFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find();
        res.status(200).json(favorites);
    } catch (error) {
        console.error("Error retrieving favorite items:", error);
        res.status(500).json({ message: "Error retrieving favorite items" });
    }
};

// Add item to favorites with input validation
exports.addItemToFavorites = async (req, res) => {
    const { title, price, selectedImage, description } = req.body;

    // Input validation
    if (!title || typeof price !== 'number' || !selectedImage) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    const newFavorite = new Favorite({
        title,
        price,
        selectedImage,
        description,
    });

    try {
        const savedFavorite = await newFavorite.save();
        res.status(201).json(savedFavorite);
    } catch (error) {
        console.error("Error adding item to favorites:", error);
        res.status(500).json({ message: "Error adding item to favorites" });
    }
};

// Remove item from favorites
exports.removeItemFromFavorites = async (req, res) => {
    const { id } = req.params; // Get the item ID from the URL

    try {
        const deletedFavorite = await Favorite.findByIdAndDelete(id);
        if (!deletedFavorite) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item removed from favorites" });
    } catch (error) {
        console.error("Error removing item from favorites:", error);
        res.status(500).json({ message: "Error removing item from favorites" });
    }
};
