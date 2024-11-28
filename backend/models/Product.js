const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name:{type:String, required: true},
        price: { type: Number, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true }, // Example: 'Men', 'Women'
        sizes: { type: [String], required: true }, // Example: ['S', 'M', 'L', 'XL']
        colors: { type: [String], required: true }, // Example: ['Red', 'Blue']
        images: { type: [String], required: true }, // Array of image URLs
        stock: { type: Number, required: true },
    },
    {timestamps: true} // Automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model('Product', ProductSchema);