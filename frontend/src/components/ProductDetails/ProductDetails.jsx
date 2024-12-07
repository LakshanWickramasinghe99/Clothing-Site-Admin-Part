import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  const [selectedImage, setSelectedImage] = useState(item?.img);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [notification, setNotification] = useState(""); // State for notification
  const [isAnimating, setIsAnimating] = useState(false); // State for animation

  const handleAddToCart = async (e) => {
    if (e.detail === 2) {
      handleRemoveFromCart();
      return;
    }

    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    try {
      const response = await axios.post(
        "https://fitfusion.iamtrazy.eu.org/api/cart",
        {
          _id: item._id,
          title: item?.title,
          price: item?.price,
          description: item?.description,
          selectedImage,
          selectedSize,
          quantity,
        }
      );

      console.log("Item added to cart:", response.data);
      setNotification("Item added to cart successfully!"); // Set notification message
      setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleRemoveFromCart = async () => {
    // ... existing remove logic
  };

  const handleBuyNow = async () => {
    navigate("/card")
  };

  const handleFavoriteClick = async () => {
    setIsFavorite(!isFavorite);
    setIsAnimating(true);

    // Send a request to add/remove the item from favorites
    try {
      const response = await axios.post(
        "https://fitfusion.iamtrazy.eu.org/api/favorites",
        {
          _id: item._id,
          title: item?.title,
          price: item?.price,
          description: item?.description,
          selectedImage,
        }
      );

      const message =
        response.data.message ||
        (isFavorite ? "Removed from favorites!" : "Added to favorites!");
      setNotification(message); // Set notification message
      setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    } finally {
      // Reset animation after the animation duration
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const increaseQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 flex flex-row items-start">
        {/* Left Section - Main Image and Thumbnails */}
        <div className="flex">
          <div className="relative" style={{ height: "500px", width: "350px" }}>
            <img
              src={`https://fitfusion.iamtrazy.eu.org/api/uploads/${selectedImage}`}
              alt={item?.title || "Product Image"}
              className="rounded-lg shadow-lg border-4 border-gray-300 object-cover"
              style={{ height: "100%", width: "100%" }}
            />
            {item?.additionalImages && (
              <div className="absolute right-[-90px] top-0 h-full flex flex-col space-y-2">
                {item.additionalImages.map((img, index) => (
                  <img
                    key={index}
                    src={`https://fitfusion.iamtrazy.eu.org/api/uploads/${img}`}
                    alt={`${item.title} additional view ${index + 1}`}
                    className="rounded-lg shadow-md border-2 border-gray-300 cursor-pointer transition-transform transform hover:scale-110 duration-300 ease-in-out"
                    style={{ width: "50px", height: "65px" }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex flex-col ml-60 w-1/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {item?.title || "Draped Velvet Midi Dress"}
          </h1>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            {item?.price || "RS 26,450.00"}
          </p>
          <p className="text-gray-600 mb-4">
            {item?.description ||
              "Round neck midi dress with a sleeveless design. Featuring draped fabric detail, a back vent at the hem, and concealed zip fastening."}
          </p>

          {/* Size Options */}
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">Available Sizes:</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                "EU XS / US XS",
                "EU S / US S",
                "EU M / US M",
                "EU L / US L",
                "EU XL / US XL",
                "EU XXL / US XXL",
              ].map((size) => (
                <button
                  key={size}
                  className={`border border-gray-400 p-2 transition-all ${
                    selectedSize === size ? "bg-black text-white" : "text-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="mt-2 text-gray-500">SEE MEASUREMENTS</p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">Quantity</p>
            <div className="flex items-center space-x-4">
              <button
                className="bg-gray-300 px-3 py-1 rounded-lg"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded-lg"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Favorite Icon - Positioned before the Add to Cart button */}
          <div
            onClick={handleFavoriteClick}
            className={`cursor-pointer mb-6 ${
              isAnimating ? "heart-animation" : ""
            }`}
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-500 text-2xl" />
            )}
          </div>

          {/* Notification Message */}
          {notification && (
            <div className="bg-green-100 text-green-700 border border-green-400 p-2 rounded mb-4">
              {notification}
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            className="bg-black text-white py-3 px-6 text-lg mb-2"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          {/* Buy Now Button */}
          <button
            className="bg-white text-black border border-black py-3 px-6 text-lg mb-4"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
