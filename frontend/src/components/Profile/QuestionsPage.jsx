// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const QuestionsPage = () => {
//   const [userQuestions, setUserQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const userID = localStorage.getItem('userID');  // Fetch the stored userID
//   const navigate = useNavigate();  // Used for navigation between Profile and Questions

//   // Fetch user's questions from the backend
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(`https://fitfusion.iamtrazy.eu.org/api/questions/${userID}`);
//         setUserQuestions(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching questions.');
//         setLoading(false);
//       }
//     };

//     if (userID) {
//       fetchQuestions();
//     } else {
//       setError('User ID not found. Please log in again.');
//       setLoading(false);
//     }
//   }, [userID]);

//   // Handlers for menu buttons
//   const goToProfile = () => {
//     navigate('/uProfile'); // Navigate to profile page
//   };

//   const goToQuestions = () => {
//     navigate('/qDisplay'); // Reload or stay on questions page
//   };

//   if (loading) return <p>Loading questions...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="flex">
//       {/* Menu Section */}
//       <aside className="w-1/4 p-4 bg-gray-800 text-white min-h-screen">
//         <ul>
//           <li className="mb-2">
//             <button onClick={goToProfile} className="w-full text-left p-2 hover:bg-gray-700">Profile</button>
//           </li>
//           <li>
//             <button onClick={goToQuestions} className="w-full text-left p-2 hover:bg-gray-700">Questions</button>
//           </li>
//         </ul>
//       </aside>

//       {/* Questions Content Section */}
//       <div className="w-3/4 p-6">
//         <h2 className="text-2xl font-bold mb-4">Your Submitted Questions</h2>
//         {userQuestions.length === 0 ? (
//           <p>No questions answered yet.</p>
//         ) : (
//           <div className="grid gap-4">
//             {userQuestions.map((question, index) => (
//               <div key={index} className="p-4 border rounded">
//                 <h3 className="font-bold">Question Set {index + 1}</h3>
//                 <p><strong>Age Group:</strong> {question.ageGroup}</p>
//                 <p><strong>Bust:</strong> {question.bust}</p>
//                 <p><strong>Waist:</strong> {question.waist}</p>
//                 <p><strong>Hips:</strong> {question.hips}</p>
//                 <p><strong>Shoulder Width:</strong> {question.shoulderWidth}</p>
//                 <p><strong>Height:</strong> {question.height}</p>
//                 <p><strong>Weight:</strong> {question.weight}</p>
//                 <p><strong>Body Shape:</strong> {question.bodyShape}</p>
//                 <p><strong>Fast Fashion:</strong> {question.fastFashion}</p>
//                 <p><strong>Tossed Out:</strong> {question.tossedOut}</p>
//                 <p><strong>Wardrobe:</strong> {question.wardrobe}</p>
//                 <p><strong>Green Points:</strong> {question.greenPoints}</p>
//                 <p><strong>Fashion Footprint:</strong> {question.fashionFootprint}</p>
//                 <p><strong>Fabric Detective:</strong> {question.fabricDetective}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuestionsPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import hourglassImg from "../BodyShapes/hourglass.png";
import pearImg from "../BodyShapes/pear.png";
import appleImg from "../BodyShapes/apple.png";
import rectangleImg from "../BodyShapes/rectangle.png";

const QuestionsPage = () => {
  const [userQuestions, setUserQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userID = localStorage.getItem("userID");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://fitfusion.iamtrazy.eu.org/api/questions/${userID}`
        );
        setUserQuestions(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching questions.");
        setLoading(false);
      }
    };

    if (userID) {
      fetchQuestions();
    } else {
      setError("User ID not found. Please log in again.");
      setLoading(false);
    }
  }, [userID]);

  const goToProfile = () => {
    navigate("/uProfile");
  };

  const goToQuestions = () => {
    navigate("/qDisplay");
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  const getBodyShapeImage = (bodyShape) => {
    switch (bodyShape) {
      case "Hourglass":
        return hourglassImg;
      case "Pear":
        return pearImg;
      case "Apple":
        return appleImg;
      case "Rectangle":
        return rectangleImg;
      default:
        return null;
    }
  };

  const bodyShapeImage = getBodyShapeImage(userQuestions[0]?.bodyShape);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Menu Section */}
      <aside className="w-1/4 p-6 bg-black text-white">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={goToProfile}
              className="w-full text-left p-3 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={goToQuestions}
              className="w-full text-left p-3 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Questions
            </button>
          </li>
        </ul>
      </aside>

      {/* Body Shape Image Section */}
      {bodyShapeImage && (
        <div className="absolute top-8 right-8">
          <h1 className="text-center font-bold">Your body shape</h1>
          <img
            src={bodyShapeImage}
            alt="Body Shape"
            className="w-48 h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Questions Content Section */}
      <div className="w-3/4 p-8 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Your Submitted Questions
        </h2>
        {userQuestions.length === 0 ? (
          <p className="text-lg text-gray-600">No questions answered yet.</p>
        ) : (
          <div className="grid gap-8">
            {userQuestions.map((question, index) => (
              <div
                key={index}
                className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md"
              >
                <h3 className="font-bold text-lg mb-4">
                  Question and Answers Set {index + 1}
                </h3>
                <p>
                  <strong>Age Group:</strong> {question.ageGroup}
                </p>
                <p>
                  <strong>Bust:</strong> {question.bust}
                </p>
                <p>
                  <strong>Waist:</strong> {question.waist}
                </p>
                <p>
                  <strong>Hips:</strong> {question.hips}
                </p>
                <p>
                  <strong>Shoulder Width:</strong> {question.shoulderWidth}
                </p>
                <p>
                  <strong>Height:</strong> {question.height}
                </p>
                <p>
                  <strong>Weight:</strong> {question.weight}
                </p>
                <p>
                  <strong>Body Shape:</strong> {question.bodyShape}
                </p>

                <p>
                  <strong>Do you buy fast fashion?</strong>{" "}
                  {question.fastFashion}
                </p>
                <p>
                  <strong>Have you tossed out any clothes recently?</strong>{" "}
                  {question.tossedOut}
                </p>
                <p>
                  <strong>How many clothes are in your wardrobe?</strong>{" "}
                  {question.wardrobe}
                </p>
                <p>
                  <strong>Green Points:</strong> {question.greenPoints}
                </p>
                <p>
                  <strong>Fashion Footprint:</strong>{" "}
                  {question.fashionFootprint}
                </p>
                <p>
                  <strong>Fabric Detective:</strong> {question.fabricDetective}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
