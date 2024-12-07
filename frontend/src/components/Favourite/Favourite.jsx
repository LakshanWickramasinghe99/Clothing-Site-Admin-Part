import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa"; // Import an icon for removing favorites

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(""); // State for notification
  const userId = "user-id"; // Replace with actual user ID if necessary

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          `https://fitfusion.iamtrazy.eu.org/api/favorites?userId=${userId}`
        ); // Fetch favorites for the specific user
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (itemId) => {
    try {
      await axios.delete(
        `https://fitfusion.iamtrazy.eu.org/api/favorites/${itemId}`
      ); // Adjust endpoint as necessary
      setFavorites((prevFavorites) =>
        prevFavorites.filter((item) => item._id !== itemId)
      ); // Update local state
      setNotification("Item removed successfully!"); // Set notification message

      // Clear the notification after 3 seconds
      setTimeout(() => {
        setNotification("");
      }, 3000);
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">
          Your Favorites
        </h2>
        {notification && (
          <div className="mb-4 text-center">
            <p className="text-green-600 font-semibold">{notification}</p>
          </div>
        )}
        {favorites.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {favorites.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-4 px-6 flex items-center">
                    <img
                      src={`https://fitfusion.iamtrazy.eu.org/api/uploads/${item.selectedImage}`} // Ensure the image path is correct
                      alt={item.title}
                      className="w-16 h-auto rounded"
                    />
                  </td>
                  <td className="py-4 px-6">{item.title}</td>
                  <td className="py-4 px-6">{item.description}</td>
                  <td className="py-4 px-6">Rs {item.price}.00</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleRemoveFavorite(item._id)}
                      className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
                    >
                      <FaTrashAlt className="mr-2" />
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No favorites found.</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
