import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import bgImage from "../../assets/bgImage.webp";
import { FaStar } from "react-icons/fa";

const Fashion = () => {
  const [fashionData, setFashionData] = useState([]); // State to hold fetched products
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fitfusion.iamtrazy.eu.org/api/products"
        ); // Your backend endpoint
        setFashionData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading when fetch is done
      }
    };

    fetchProducts();
  }, []);

  const handleOrderNow = (item) => {
    navigate("/ProductDetails", { state: { item } }); // Navigate to ProductDetails with item data
  };

  return (
    <div className="bg-gray-50 py-10">
      <div
        className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center bg-black/50 p-4 rounded-lg">
          Discover Our Latest Collection
        </h1>
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2" data-aos="fade-up">
            Top Products
          </h2>
          <p
            className="text-gray-500 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore the best from our collection
          </p>
        </div>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {fashionData.map((item) => (
              <div
                key={item.id}
                data-aos="zoom-in"
                className="bg-white dark:bg-gray-200 hover:bg-black/80 relative shadow-xl transition duration-300 group max-w-[300px] rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={`https://fitfusion.iamtrazy.eu.org/api/uploads/${item.img}`} // Ensure the correct path is used
                    alt={item.title}
                    className="max-w-full h-auto block mx-auto group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500 group-hover:text-white transition duration-300 text-sm mb-2">
                    {item.description}
                  </p>
                  <p className="text-lg font-semibold mb-4">
                    Rs {item.price}.00
                  </p>
                  <button
                    className="bg-primary hover:scale-105 transition-all duration-300 text-white py-2 px-6 rounded-full group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleOrderNow(item)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fashion;
