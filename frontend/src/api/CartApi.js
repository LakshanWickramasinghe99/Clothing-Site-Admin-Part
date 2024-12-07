import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/cart";

// Add item to the cart
export const addItemToCart = async (item) => {
  const response = await axios.post(`${API_URL}`, item);
  return response.data;
};

// Update item quantity in the cart
export const updateCartItem = async (id, quantity) => {
  const response = await axios.put(`${API_URL}/${id}`, { quantity });
  return response.data;
};

// Remove item from the cart
export const removeCartItem = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// Get all items from the cart
export const getCartItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
