import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar"; // Import your Sidebar component

// Import category images
import Tops1 from "../../assets/yellow01.jpg";
import Tops2 from "../../assets/yellow02.jpg";
import Tops3 from "../../assets/yellow03.jpg";
import Bottom1 from "../../assets/red01.jpg";
import Bottom2 from "../../assets/red02.jpg";
import Bottom3 from "../../assets/red03.jpg";
import Dress1 from "../../assets/dress01.jpeg";
import Dress2 from "../../assets/dress02.webp";
import Dress3 from "../../assets/dress03.webp";
import Outerwear1 from "../../assets/outwear01.jpg";
import Outerwear2 from "../../assets/outwear02.jpg";
import Outerwear3 from "../../assets/outwear03.jpg";



// Add images and descriptions for other categories as needed

const categoryImages = {
  Tops: {
    "T-Shirts": {
      Solid: [
        { image: Tops1, description: "Bright Yellow T-Shirt" },
        { image: Tops2, description: "Casual Yellow T-Shirt" },
        { image: Tops3, description: "Stylish Yellow T-Shirt" },
      ],
    },
  },
  Bottoms: {
    Jeans: {
      "Wide Leg": [
        { image: Bottom1, description: "Wide Leg Red Jeans" },
        { image: Bottom2, description: "Casual Red Jeans" },
        { image: Bottom3, description: "Comfortable Red Jeans" },
      ],
    },
  },
  Dresses: {
    "Casual Dresses": {
      "Wide Leg": [
        { image: Dress1, description: "Casual Dress 1" },
        { image: Dress2, description: "Casual Dress 2" },
        { image: Dress3, description: "Casual Dress 3" },
      ],
    },
  },
  Outerwear: {
    "Jackets ": {
      "puffer": [
        { image: Outerwear1, description: "Casual Dress 1" },
        { image: Outerwear2, description: "Casual Dress 2" },
        { image: Outerwear3, description: "Casual Dress 3" },
      ],
    },
  },
};

export default function Wardrobe() {
  const [selectedCategory, setSelectedCategory] = useState("Tops");
  const [selectedSubcategory, setSelectedSubcategory] = useState("T-Shirts");
  const [selectedStyle, setSelectedStyle] = useState("Solid");
  const [selectedColor, setSelectedColor] = useState("Yellow");

  // Handle click on "Wardrobe" title to reset category
  const handleWardrobeClick = () => {
    setSelectedCategory("Tops");
    setSelectedSubcategory("T-Shirts");
    setSelectedStyle("Solid");
    setSelectedColor("Yellow");
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "Tops") {
      setSelectedSubcategory("T-Shirts");
      setSelectedStyle("Solid");
      setSelectedColor("Yellow");
    } else if (category === "Bottoms") {
      setSelectedSubcategory("Jeans");
      setSelectedStyle("Wide Leg");
      setSelectedColor("Red");
    } else if (category === "Dresses") {
      setSelectedSubcategory("Casual Dresses");
      setSelectedStyle("Wide Leg");
      setSelectedColor("Blue");
    } else if (category === "Outerwear") {
        setSelectedSubcategory("Jackets ");
        setSelectedStyle("puffer");
        setSelectedColor("Black");
      }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar onCategorySelect={handleCategorySelect} />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <h1
          className="text-3xl font-bold mb-4 cursor-pointer text-gray-800 hover:text-blue-500 transition duration-300"
          onClick={handleWardrobeClick} // Handle click on the title
        >
          Wardrobe
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Wardrobe &gt; {selectedCategory} &gt; {selectedSubcategory} &gt; {selectedStyle} &gt; {selectedColor}
        </p>

        {/* Display images in a grid for the selected category, subcategory, style, and color */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categoryImages[selectedCategory]?.[selectedSubcategory]?.[selectedStyle]?.map((item, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={`${selectedCategory} ${selectedSubcategory} ${selectedStyle} ${selectedColor} ${index + 1}`}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-2 text-white text-sm text-center">
                <p>{item.description}</p>
              </div>
            </div>
          )) || <p>No images available.</p>}
        </div>
      </div>
    </div>
  );
}
