import React from "react";
import { FaTshirt, FaShoePrints, FaGem } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";

export default function Sidebar({ onCategorySelect }) {
  const categories = [
    { name: "Tops", icon: <FaTshirt /> },
    { name: "Bottoms", icon: <GiArmoredPants /> },
    { name: "Dresses", icon: <FaGem /> },
    { name: "Outerwear", icon: <FaTshirt /> },
    { name: "Evening Wear", icon: <FaGem /> },
    { name: "Accessories", icon: <FaGem /> },
    { name: "Footwear", icon: <FaShoePrints /> },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen">
      <div className="p-4 bg-gray-800 text-lg font-bold">Fashion Categories</div>
      <nav className="flex flex-col p-4 space-y-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category.name)}
            className="flex items-center space-x-2 hover:text-gray-400 w-full text-left"
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
