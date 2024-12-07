// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
// import Logo from '../../assets/Logo.jpg'; // Import the logo icon image
// import CartIcon from '../../assets/cart.png'; // Import the cart icon image
// import HeartIcon from '../../assets/wardrobe.png'; // Import the heart icon image
// import ProfileImage from '../../assets/user.png'; // Import the user icon image

// export default function Navbar() {
//   return (
//     <div className='shadow-md bg-[#131313] text-white duration-200 relative z-40'>
//       {/* Main Navbar */}
//       <div className='bg-[#131313]' style={{ height: '80px' }}>
//         <div className='container mx-auto flex justify-between items-center px-4'>

//           {/* Logo */}
//           <div className='flex items-center justify-start'>
//             <Link to="/" className='flex items-center'>
//               {/* Adjust the logo size */}
//               <img src={Logo} alt="FitFusion Logo" className='w-[50px] h-[50px] max-h-full' />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className='hidden md:flex space-x-20 font-semibold text-[12px]' style={{ fontFamily: "Arial, serif" }}>
//             <Link to="/trend" className='hover:text-gray-400'>Trend</Link>
//             <Link to="/sustainability" className='hover:text-gray-400'>Sustainability</Link>
//             <Link to="/virtualTryOn" className='hover:text-gray-400'>Virtual Try-On</Link>
//             <Link to="/fashion" className='hover:text-gray-400'>Fashion</Link>
//           </div>

//           {/* Search Bar, Cart & Profile Icons */}
//           <div className='flex items-center space-x-6'>
//             {/* Search */}
//             <div className='group relative'>
//               <input
//                 type="text"
//                 placeholder='Search'
//                 className='w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-500 bg-white text-black px-2 focus:outline-none'
//                 style={{ height: '30px', fontSize: '12px' }} // Increased height for better usability
//               />
//             </div>

//             {/* Icons */}
//             <div className='flex items-center space-x-10'>
//               {/* Shopping Cart Icon */}
//               <Link to="/cart" className='hover:text-gray-400' aria-label="Shopping Cart">
//                 <img src={CartIcon} alt="Shopping Cart" className='w-[20px] h-[20px]' />
//               </Link>
//               {/* Favorites Icon */}
//               <Link to="/api/favorite" className='hover:text-gray-400' aria-label="Favorites">
//                 <img src={HeartIcon} alt="Favorites" className='w-[20px] h-[20px]' />
//               </Link>
//               {/* Profile Icon */}
//               <Link to="/uProfile" className='hover:text-gray-400' aria-label="User Profile">
//                 <img src={ProfileImage} alt="Profile" className='w-[20px] h-[20px] rounded-full' />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import Logo from "../../assets/logo.jpg"; // Import the logo icon image
import CartIcon from "../../assets/cart.png"; // Import the cart icon image
import HeartIcon from "../../assets/wardrobe.png"; // Import the heart icon image
import ProfileImage from "../../assets/user.png"; // Import the user icon image
import {FaHeart } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const userID = localStorage.getItem("userID"); // Replace 'token' with your auth key if different
    if (userID) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="shadow-md bg-[#131313] text-white duration-200 relative z-40">
      {/* Main Navbar */}
      <div className="bg-[#131313]" style={{ height: "80px" }}>
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center">
              {/* Adjust the logo size */}
              <img
                src={Logo}
                alt="FitFusion Logo"
                className="w-[50px] h-[50px] max-h-full"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className="hidden md:flex space-x-20 font-semibold text-[12px]"
            style={{ fontFamily: "Arial, serif" }}
          >
            <Link to="/trend" className="hover:text-gray-400">
              Trend
            </Link>
            <Link to="/sustainability" className="hover:text-gray-400">
              Sustainability
            </Link>
            <Link to="/virtualTryOn" className="hover:text-gray-400">
              Virtual Try-On
            </Link>
            <Link to="/fashion" className="hover:text-gray-400">
              Fashion
            </Link>
          </div>

          {/* Search Bar, Cart & Profile Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="group relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-500 bg-white text-black px-2 focus:outline-none"
                style={{ height: "30px", fontSize: "12px" }} // Increased height for better usability
              />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-10">
              {/* Shopping Cart Icon */}
              <Link
                to="/cart"
                className="hover:text-gray-400"
                aria-label="Shopping Cart"
              >
                <img
                  src={CartIcon}
                  alt="Shopping Cart"
                  className="w-[20px] h-[20px]"
                />
              </Link>
              <Link
                to="/wardrobe"
                className="hover:text-gray-400"
                aria-label="Shopping Cart"
              >
                <img
                  src={HeartIcon}
                  alt="Shopping Cart"
                  className="w-[20px] h-[20px]"
                />
              </Link>
              {/* Favorites Icon */}
              {/* Favorites Icon */}
<Link
  to="/api/favorite"
  className="hover:text-gray-400"
  aria-label="Favorites"
>
  <FaHeart className="w-[20px] h-[20px]" />
</Link>

              {/* Conditional Rendering: Login or Profile Icon */}
              {isLoggedIn ? (
                <Link
                  to="/uProfile"
                  className="hover:text-gray-400"
                  aria-label="User Profile"
                >
                  <img
                    src={ProfileImage}
                    alt="Profile"
                    className="w-[20px] h-[20px] rounded-full"
                  />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="hover:text-gray-400 font-semibold"
                  aria-label="Login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
