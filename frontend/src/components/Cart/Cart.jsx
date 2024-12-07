import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const { item } = location.state || {};
  const [cartItems, setCartItems] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  useEffect(() => {
    if (item) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (cartItem) => cartItem.title === item.title
        );
        if (!existingItem) {
          return [...prevItems, { ...item, quantity: 1 }];
        }
        return prevItems;
      });
    } else {
      fetchCartItems();
    }
  }, [item]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "https://fitfusion.iamtrazy.eu.org/api/cart"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const increaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].quantity += 1;
      return newItems;
    });
  };

  const decreaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      if (newItems[index].quantity > 1) {
        newItems[index].quantity -= 1;
      }
      return newItems;
    });
  };

  const removeItem = async (index) => {
    const itemToRemove = cartItems[index];
    if (!itemToRemove || !itemToRemove._id) {
      console.error("Item to remove is invalid:", itemToRemove);
      return;
    }

    try {
      await axios.delete(
        `https://fitfusion.iamtrazy.eu.org/api/cart/${itemToRemove._id}`
      );
      setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
      setClickedIndex(null);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      alert("Failed to remove item from cart. Please try again.");
    }

    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalPrice = calculateTotalPrice();

  const handleCheckout = () => {
    setIsCheckoutClicked(true);
    navigate("/card"); // Navigate to Card.jsx
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex">
      <div className="container mx-auto flex justify-between">
        {/* Left side: Cart items */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Shopping Cart
          </h1>
          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-4 border-b">Item</th>
                  <th className="py-3 px-4 border-b">Price (RS)</th>
                  <th className="py-3 px-4 border-b">Quantity</th>
                  <th className="py-3 px-4 border-b">Total (RS)</th>
                  <th className="py-3 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="text-center hover:bg-gray-100">
                    <td className="py-4 px-4 border-b">
                      <img
                        src={`https://fitfusion.iamtrazy.eu.org/api/uploads/${item.selectedImage}`}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="mt-2 text-left">{item.title}</div>
                    </td>
                    <td className="py-4 px-4 border-b">Rs {item.price}</td>
                    <td className="py-4 px-4 border-b">
                      <div className="flex items-center justify-center">
                        <button
                          className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 transition"
                          onClick={() => decreaseQuantity(index)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 transition"
                          onClick={() => increaseQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b">
                      Rs {item.price * item.quantity}
                    </td>
                    <td className="py-4 px-4 border-b">
                      <button
                        className={`bg-white text-black border border-black px-4 py-2 rounded-full transition-all duration-300 
                          ${
                            clickedIndex === index
                              ? "bg-red-500 text-white"
                              : "hover:bg-red-600 hover:text-white"
                          }`}
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Right side: Total price and checkout button */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-1/4 h-1/4 ml-4 sticky top-20 flex flex-col items-center justify-between">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Total: Rs {totalPrice}{" "}
          </h2>
          <button
            className={`bg-white text-black border border-black px-6 py-3 rounded-full transition-all duration-300 
              ${
                isCheckoutClicked
                  ? "bg-black text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
            onClick={() => {
              if (localStorage.getItem("userID")) {
                handleCheckout();
              } else {
                alert("Please log in to proceed to checkout.");
              }
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
