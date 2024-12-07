// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Corrected import statement

// const UserProfile = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     profilePicture: '',
//   });
//   const [newPassword, setNewPassword] = useState(''); // For updating password
//   const [profilePictureFile, setProfilePictureFile] = useState(null); // For updating profile picture
//   const userID = localStorage.getItem('userID'); // Get userID from localStorage
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     if (!userID) {
//       console.error("User ID not found");
//       return;
//     }

//     // Fetch user data using userID
//     axios.get(`https://fitfusion.iamtrazy.eu.org/api/reg/${userID}`)
//       .then(res => setUserData(res.data))
//       .catch(err => console.error(err));
//   }, [userID]);

//   const handleProfileClick = () => {
//     navigate('/uProfile'); // Navigate to the profile page
//   };

//   const handleQuestionsClick = () => {
//     navigate('/qDisplay'); // Navigate to the questions page
//   };

//   const handleInputChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setProfilePictureFile(e.target.files[0]);
//   };

//   const handleSaveProfile = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', userData.name); // Use userData.name
//     if (newPassword) { // Only append new password if provided
//       formData.append('password', newPassword);
//     }
//     if (profilePictureFile) {
//       formData.append('profilePicture', profilePictureFile); // profilePictureFile should be a file object from an input
//     }

//     try {
//       const response = await axios.put(`https://fitfusion.iamtrazy.eu.org/api/reg/${userID}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Profile updated:', response.data);
//       alert('Profile updated successfully');
//       navigate('/uProfile');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   const handleDeleteProfile = () => {
//     if (!userID) {
//       console.error("User ID not found");
//       return;
//     }

//     if (window.confirm("Are you sure you want to delete your profile?")) {
//       axios.delete(`https://fitfusion.iamtrazy.eu.org/api/reg/${userID}`)
//         .then(() => {
//           alert('Profile deleted successfully');
//           localStorage.removeItem('userID'); // Clear userID from localStorage after deletion
//           navigate("/register"); // Use navigate for redirection
//         })
//         .catch(err => console.error(err));
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-800 text-white p-4">
//         <h2 className="text-2xl font-bold mb-4">Menu</h2>
//         <ul>
//           <li className="mb-2">
//             <button onClick={handleProfileClick} className="w-full text-left p-2 hover:bg-gray-700">Profile</button>
//           </li>
//           <li>
//             <button onClick={handleQuestionsClick} className="w-full text-left p-2 hover:bg-gray-700">Questions</button>
//           </li>
//         </ul>
//       </div>

//       {/* Profile Section */}
//       <div className="w-3/4 p-3">
//         <h2 className="text-3xl font-bold mb-4">Profile</h2>

//         {/* Display profile picture at the top */}
//         {userData.profilePicture && (
//           <div className="flex justify-center mb-4">
//             <img
//               src={`https://fitfusion.iamtrazy.eu.org/api/uploads/${userData.profilePicture}`} // Assuming your backend runs on localhost:5000
//               alt="Profile"
//               className="h-32 w-32 rounded-full"
//             />
//           </div>
//         )}

//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={userData.name}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={userData.email}
//             readOnly // Make email field uneditable
//             className="w-full p-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">New Password</label>
//           <input
//             type="password"
//             name="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)} // New password field to update
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Enter new password (leave blank to keep the current one)"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Change Profile Picture</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <button
//           onClick={handleSaveProfile}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Save Profile
//         </button>

//         <button
//           onClick={handleDeleteProfile}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
//         >
//           Delete Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const userID = localStorage.getItem("userID");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userID) {
      console.error("User ID not found");
      return;
    }

    axios
      .get(`https://fitfusion.iamtrazy.eu.org/api/reg/${userID}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.error(err));
  }, [userID]);

  const handleProfileClick = () => {
    navigate("/uProfile");
  };

  const handleQuestionsClick = () => {
    navigate("/qDisplay");
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePictureFile(e.target.files[0]);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", userData.name);
    if (newPassword) {
      formData.append("password", newPassword);
    }
    if (profilePictureFile) {
      formData.append("profilePicture", profilePictureFile);
    }

    try {
      const response = await axios.put(
        `https://fitfusion.iamtrazy.eu.org/api/reg/${userID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Profile updated:", response.data);
      alert("Profile updated successfully");
      navigate("/uProfile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleDeleteProfile = () => {
    if (!userID) {
      console.error("User ID not found");
      return;
    }

    if (window.confirm("Are you sure you want to delete your profile?")) {
      axios
        .delete(`https://fitfusion.iamtrazy.eu.org/api/reg/${userID}`)
        .then(() => {
          alert("Profile deleted successfully");
          localStorage.removeItem("userID");
          navigate("/register");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={handleProfileClick}
              className="w-full text-left p-3 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={handleQuestionsClick}
              className="w-full text-left p-3 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Questions
            </button>
          </li>
        </ul>
      </div>

      {/* Profile Section */}
      <div className="w-3/4 p-3 bg-white">
        <h2 className="text-3xl font-bold  text-gray-800">Profile</h2>

        {/* Display profile picture */}
        {userData.profilePicture && (
          <div className="flex justify-center mb-2">
            <img
              src={`https://fitfusion.iamtrazy.eu.org/api/upload/${userData.profilePicture}`}
              alt="Profile"
              className="h-32 w-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="mb-4">
          <label className="block text-base font-semibold text-gray-700 mb-2">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter new password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Change Profile Picture
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          onClick={handleSaveProfile}
          className="bg-black text-white px-3 py-3 rounded-lg hover:bg-gray-800"
        >
          Save Profile
        </button>

        <button
          onClick={handleDeleteProfile}
          className="bg-red-600 text-white px-3 py-3 rounded-lg hover:bg-red-700 ml-4"
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
