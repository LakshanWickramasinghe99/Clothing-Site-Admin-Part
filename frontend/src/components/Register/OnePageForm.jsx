// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// import hourglassImg from '../BodyShapes/hourglass.png';
// import pearImg from '../BodyShapes/pear.png';
// import appleImg from '../BodyShapes/apple.png';
// import rectangleImg from '../BodyShapes/rectangle.png';

// const OnePageForm = () => {
//   const [formData, setFormData] = useState({
//     ageGroup: '',
//     bust: '',
//     waist: '',
//     hips: '',
//     shoulderWidth: '',
//     height: '',
//     weight: '',
//     bodyShape: '',
//     fastFashion: '',
//     tossedOut: '',
//     wardrobe: '',
//     greenPoints: '',
//     fashionFootprint: '',
//     fabricDetective: ''
//   });

//   const [userID, setUserID] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   // Fetch userID from localStorage when component mounts
//   useEffect(() => {
//     const storedUserID = localStorage.getItem('userID');
//     if (storedUserID) {
//       setUserID(storedUserID);
//     } else {
//       console.error('No userID found in local storage.');
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const navigate = useNavigate();

//   const determineBodyShape = (bust, waist, hips, shoulderWidth) => {
//     // Convert values to numbers
//     bust = Number(bust);
//     waist = Number(waist);
//     hips = Number(hips);
//     shoulderWidth = Number(shoulderWidth);

//     // Calculate percentage differences
//     const bustHipsDiff = Math.abs(bust - hips) / Math.max(bust, hips);
//     const bustShoulderDiff = Math.abs(bust - shoulderWidth) / Math.max(bust, shoulderWidth);
//     const waistBustHipsDiff = Math.min(bust, hips) - waist;

//     // Determine body shape
//     if (waistBustHipsDiff / Math.max(bust, hips) >= 0.25 && bustHipsDiff <= 0.05) {
//         return "Hourglass";
//     } else if (hips > bust && hips >= bust * 1.05) {
//         return "Pear";
//     } else if (bust >= hips && waist >= hips * 0.9) {
//         return "Apple";
//     } else if (bustHipsDiff <= 0.05 && Math.abs(waist - bust) <= bust * 0.05) {
//         return "Rectangle";
//     } else if (shoulderWidth > hips && bustShoulderDiff >= 0.05) {
//         return "Inverted Triangle";
//     } else {
//         return "Undefined";
//     }
// };

// // useEffect to update the body shape dynamically
// useEffect(() => {
//   const { bust, waist, hips, shoulderWidth } = formData;
//   if (bust && waist && hips && shoulderWidth) {
//     const calculatedBodyShape = determineBodyShape(bust, waist, hips, shoulderWidth);
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       bodyShape: calculatedBodyShape
//     }));
//   }
// }, [formData.bust, formData.waist, formData.hips, formData.shoulderWidth]);

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userID) {
//         alert('Error: User ID is missing. Please log in again.');
//         return;
//     }
//     setSubmitting(true);

//     try {
//         const response = await axios.post('https://fitfusion.iamtrazy.eu.org/api/questions', {
//             userID,
//             ...formData
//         });

//         if (response.status === 200) {
//             alert("Questions submitted successfully!");
//             navigate('/uProfile');
//             setFormData({
//                 ageGroup: '',
//                 bust: '',
//                 waist: '',
//                 hips: '',
//                 shoulderWidth: '',
//                 height: '',
//                 weight: '',
//                 bodyShape: '',
//                 fastFashion: '',
//                 tossedOut: '',
//                 wardrobe: '',
//                 greenPoints: '',
//                 fashionFootprint: '',
//                 fabricDetective: ''
//             });
//         }
//     } catch (error) {
//         if (error.response) {
//             alert(`Error: ${error.response.status}. ${error.response.data.message || 'There was an issue with your submission.'}`);
//         } else if (error.request) {
//             alert('Error: No response from server. Please check your network or try again later.');
//         } else {
//             alert(`Error: ${error.message}`);
//         }
//     } finally {
//         setSubmitting(false);
//     }
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Submit Your Measurements</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Age Group */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Which age group are you in?</label>
//             <select
//               name="ageGroup"
//               value={formData.ageGroup}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//             >
//               <option value="" disabled>Select your age group</option>
//               <option value="20-25">20-25: Young and exploring fashion</option>
//               <option value="26-35">26-35: Styling up with confidence</option>
//               <option value="36-45">36-45: Embracing my chic side</option>
//               <option value="46-55">46-55: Blending fashion with timeless elegance</option>
//               <option value="56-65">56-65: Effortlessly stylish!</option>
//             </select>
//           </div>

//           {/* Bust */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Bust (in inches):</label>
//             <input
//               type="number"
//               name="bust"
//               value={formData.bust}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//               required
//             />
//           </div>

//           {/* Waist */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Waist (in inches):</label>
//             <input
//               type="text"
//               name="waist"
//               value={formData.waist}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//               required
//             />
//           </div>

//           {/* Hips */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Hips (in inches):</label>
//             <input
//               type="text"
//               name="hips"
//               value={formData.hips}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//               required
//             />
//           </div>

//           {/* Shoulder Width */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Shoulder Width:</label>
//             <input
//               type="text"
//               name="shoulderWidth"
//               value={formData.shoulderWidth}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//               required
//             />
//           </div>

//           {/* Height */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Height (in cm):</label>
//             <input
//               type="text"
//               name="height"
//               value={formData.height}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//               required
//             />
//           </div>

//           {/* Weight */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (in kg):</label>
//             <input
//               type="text"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//               required
//             />
//           </div>

//           {/* Body Shape */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Body Shape:</label>
//             <input
//               type="text"
//               name="bodyShape"
//               value={formData.bodyShape}
//               readOnly  // Makes the input read-only, so the user can't change it
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 bg-gray-100" // Disable the field visually
//             />
//           </div>

//           {/* Fast Fashion */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Do you know what fast fashion is?</label>
//             <select
//               name="fastFashion"
//               value={formData.fastFashion}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//             >
//               <option value="" disabled>Select</option>
//               <option value="yes">Yes, it is trendy and cheap clothes that are quickly made.</option>
//               <option value="isn't"> Isn't it just shopping in a hurry?</option>
//               <option value="not">Not really, tell me more! </option>
//             </select>

//             {formData.fastFashion === "not" && (
//               <p className="text-red-500 mt-2">Fast fashion refers to a production model used by many clothing companies where clothes are
//               made quickly and cheaply to keep up with the latest trends. The problem with fast fashion is that it
//               often leads to overconsumption and waste. Clothes are designed to be worn only a few times
//               before being discarded, contributing to massive environmental pollution. Additionally, many fast
//               fashion brands rely on poor labor conditions and unsustainable practices to cut costs and produce
//               clothing at a rapid pace.</p>
//             )}
//           </div>

//           {/* Tossed Out */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">How often do you think clothes should be worn before being tossed out?</label>
//             <select
//               name="tossedOut"
//               value={formData.tossedOut}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//             >
//               <option value="" disabled>Select</option>
//               <option value="Once ot twice"> Once or twice, then it's time for something new.</option>
//               <option value="Out of style">Until it's out of style.</option>
//               <option value="Long time">As long as they're wearable or repurposed.</option>
//             </select>
//           </div>

//           {/* Wardrobe */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">What's more important to you when shopping for clothes? </label>
//             <select
//               name="wardrobe"
//               value={formData.wardrobe}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//             >
//               <option value="" disabled>Select</option>
//               <option value="Affordable">Affordable prices and trendy styles.</option>
//               <option value="Quality">Quality and longevity.</option>
//               <option value="Eco friendly">Brands that focus on eco-friendly materials and sustainable practices.</option>
//             </select>
//           </div>

//           {/* Green Points */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">How do you feel about recycling or upcycling your old clothes?</label>
//             <select
//               name="greenPoints"
//               value={formData.greenPoints}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//             >
//               <option value="" disabled>Select</option>
//               <option value="Buy new">I'd rather just buy new stuff. </option>
//               <option value="I don't know">I'm interested, but don't know how.</option>
//               <option value="I love to">I love giving my old clothes a new life!</option>
//             </select>
//           </div>

//           {/* Fabric Detective */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Which fabric do you think is more sustainable?</label>
//             <select
//               name="fabricDetective"
//               value={formData.fabricDetective}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//             >
//               <option value="" disabled>Select</option>
//               <option value="Polyester">Polyester</option>
//               <option value="Cotton">Cotton</option>
//               <option value="cotton or recycled mat">Organic cotton or recycled materials</option>
//             </select>
//           </div>

//           {/* Fashion Footprint */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Did you know the fashion industry has a huge impact on the environment?</label>
//             <select
//               name="fashionFootprint"
//               value={formData.fashionFootprint}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//             >
//               <option value="" disabled>Select</option>
//               <option value="Yes">Yes, I try to buy from sustainable brands.</option>
//               <option value="Not more">I've heard something about that.</option>
//               <option value="Don't know">Wait, what? Tell me more!</option>
//             </select>

//             {formData.fashionFootprint === "Don't know" && (
//               <p className="text-red-500 mt-2">The fashion industry is one of the largest polluters globally, contributing to water waste,
//               chemical pollution, and a significant carbon footprint. For instance, textile production consumes
//               vast amounts of water, and synthetic fabrics like polyester release microplastics into oceans. By
//               choosing sustainable fashion—such as clothes made from organic, recycled materials or buying
//               from brands that prioritize eco-friendly production—you can help reduce the negative impact on
//               the environment.</p>
//             )}
//           </div>

//           {/* Display the body shape image below the input */}
//             {formData.bodyShape && (
//               <div className="text-center">
//                 <h3 className="text-xl font-bold mb-2">Body Shape: {formData.bodyShape}</h3>
//                 {formData.bodyShape === "Hourglass" && <img src={hourglassImg} alt="Hourglass" className="mx-auto w-64" />}
//                 {formData.bodyShape === "Pear" && <img src={pearImg} alt="Pear" className="mx-auto w-64" />}
//                 {formData.bodyShape === "Apple" && <img src={appleImg} alt="Apple" className="mx-auto w-64" />}
//               {formData.bodyShape === "Rectangle" && <img src={rectangleImg} alt="Rectangle" className="mx-auto w-64" />}
//                </div>
//               )}

//           {/* Submit Button */}
//           <div className="col-span-1 sm:col-span-2">
//             <button
//               type="submit"
//               className={`w-full p-3 text-white bg-black rounded-lg transition duration-300 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-800 disabled:opacity-50`}
//               disabled={submitting}
//             >
//               {submitting ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OnePageForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import hourglassImg from "../BodyShapes/hourglass.png";
import pearImg from "../BodyShapes/pear.png";
import appleImg from "../BodyShapes/apple.png";
import rectangleImg from "../BodyShapes/rectangle.png";

const OnePageForm = () => {
  const [formData, setFormData] = useState({
    ageGroup: "",
    bust: "",
    waist: "",
    hips: "",
    shoulderWidth: "",
    height: "",
    weight: "",
    bodyShape: "",
    fastFashion: "",
    tossedOut: "",
    wardrobe: "",
    greenPoints: "",
    fashionFootprint: "",
    fabricDetective: "",
  });

  const [userID, setUserID] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    if (storedUserID) {
      setUserID(storedUserID);
    } else {
      console.error("No userID found in local storage.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const determineBodyShape = (bust, waist, hips, shoulderWidth) => {
    bust = Number(bust);
    waist = Number(waist);
    hips = Number(hips);
    shoulderWidth = Number(shoulderWidth);

    const bustHipsDiff = Math.abs(bust - hips) / Math.max(bust, hips);
    const bustShoulderDiff =
      Math.abs(bust - shoulderWidth) / Math.max(bust, shoulderWidth);
    const waistBustHipsDiff = Math.min(bust, hips) - waist;

    if (
      waistBustHipsDiff / Math.max(bust, hips) >= 0.25 &&
      bustHipsDiff <= 0.05
    ) {
      return "Hourglass";
    } else if (hips > bust && hips >= bust * 1.05) {
      return "Pear";
    } else if (bust >= hips && waist >= hips * 0.9) {
      return "Apple";
    } else if (bustHipsDiff <= 0.05 && Math.abs(waist - bust) <= bust * 0.05) {
      return "Rectangle";
    } else if (shoulderWidth > hips && bustShoulderDiff >= 0.05) {
      return "Inverted Triangle";
    } else {
      return "Undefined";
    }
  };

  useEffect(() => {
    const { bust, waist, hips, shoulderWidth } = formData;
    if (bust && waist && hips && shoulderWidth) {
      const calculatedBodyShape = determineBodyShape(
        bust,
        waist,
        hips,
        shoulderWidth
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        bodyShape: calculatedBodyShape,
      }));
    }
  }, [formData.bust, formData.waist, formData.hips, formData.shoulderWidth]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userID) {
      alert("Error: User ID is missing. Please log in again.");
      return;
    }
    setSubmitting(true);

    try {
      const response = await axios.post(
        "https://fitfusion.iamtrazy.eu.org/api/questions",
        {
          userID,
          ...formData,
        }
      );

      if (response.status === 200) {
        alert("Questions submitted successfully!");
        navigate("/");
        setFormData({
          ageGroup: "",
          bust: "",
          waist: "",
          hips: "",
          shoulderWidth: "",
          height: "",
          weight: "",
          bodyShape: "",
          fastFashion: "",
          tossedOut: "",
          wardrobe: "",
          greenPoints: "",
          fashionFootprint: "",
          fabricDetective: "",
        });
      }
    } catch (error) {
      if (error.response) {
        alert(
          `Error: ${error.response.status}. ${
            error.response.data.message ||
            "There was an issue with your submission."
          }`
        );
      } else if (error.request) {
        alert(
          "Error: No response from server. Please check your network or try again later."
        );
      } else {
        alert(`Error: ${error.message}`);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Submit Your Measurements
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Age Group */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Which age group are you in?
            </label>
            <select
              name="ageGroup"
              value={formData.ageGroup}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select your age group
              </option>
              <option value="20-25">20-25: Young and exploring fashion</option>
              <option value="26-35">26-35: Styling up with confidence</option>
              <option value="36-45">36-45: Embracing my chic side</option>
              <option value="46-55">
                46-55: Blending fashion with timeless elegance
              </option>
              <option value="56-65">56-65: Effortlessly stylish!</option>
            </select>
          </div>

          {/* Bust */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Bust (in inches):
            </label>
            <input
              type="number"
              name="bust"
              value={formData.bust}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          {/* Waist */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Waist (in inches):
            </label>
            <input
              type="text"
              name="waist"
              value={formData.waist}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          {/* Hips */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hips (in inches):
            </label>
            <input
              type="text"
              name="hips"
              value={formData.hips}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          {/* Shoulder Width */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Shoulder Width:
            </label>
            <input
              type="text"
              name="shoulderWidth"
              value={formData.shoulderWidth}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Height (in cm):
            </label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Weight (in kg):
            </label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          {/* Body Shape */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Body Shape:
            </label>
            <input
              type="text"
              name="bodyShape"
              value={formData.bodyShape}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Fast Fashion */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Do you know what fast fashion is?
            </label>
            <select
              name="fastFashion"
              value={formData.fastFashion}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Yes">
                Yes, It's trendy and cheap clothes that are quickly made.
              </option>
              <option value="Not sure">
                Isn't it just shopping in a hurry.
              </option>
              <option value="No">Not really, tell me more!</option>
            </select>

            {formData.fastFashion === "No" && (
              <p className="text-red-500 mt-2">
                Fast fashion refers to a production model used by many clothing
                companies where clothes are made quickly and cheaply to keep up
                with the latest trends. The problem with fast fashion is that it
                often leads to overconsumption and waste. Clothes are designed
                to be worn only a few times before being discarded, contributing
                to massive environmental pollution. Additionally, many fast
                fashion brands rely on poor labor conditions and unsustainable
                practices to cut costs and produce clothing at a rapid pace.
              </p>
            )}
          </div>

          {/* Tossed Out */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              How often do you think clothes should be worn before being tossed
              out?
            </label>
            <select
              name="tossedOut"
              value={formData.tossedOut}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Once/twice">
                Once or twice, then it's time for something new.
              </option>
              <option value="Out of style">Until it's out of style.</option>
              <option value="As long as can use">
                {" "}
                As long as they're wearable or repurposed.
              </option>
            </select>
          </div>

          {/* Wardrobe */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What's more important to you when shopping for clothes?
            </label>
            <select
              name="wardrobe"
              value={formData.wardrobe}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Affordable">
                Affordable prices and trendy styles.
              </option>
              <option value="Quality">Quality and longevity.</option>
              <option value="Eco-friendly">
                Brands that focus on eco-friendly materials and sustainable
                practices.
              </option>
            </select>
          </div>

          {/* Green Points */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              How do you feel about recycling or upcycling your old clothes?
            </label>
            <select
              name="greenPoints"
              value={formData.greenPoints}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="New stuff">I'd rather just buy new stuff. </option>
              <option value="Don't know">
                I'm interested, but don't know how.{" "}
              </option>
              <option value="I love to">
                I love giving my old clothes a new life!
              </option>
            </select>
          </div>

          {/* Fashion Footprint */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Did you know the fashion industry has a huge impact on the
              environment?
            </label>
            <select
              name="fashionFootprint"
              value={formData.fashionFootprint}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Yes">
                Yes, I try to buy from sustainable brands.
              </option>
              <option value="Not sure">
                {" "}
                I've heard something about that.
              </option>
              <option value="No"> Wait, what? Tell me more!</option>
            </select>

            {formData.fashionFootprint === "No" && (
              <p className="text-red-500 mt-2">
                The fashion industry is one of the largest polluters globally,
                contributing to water waste, chemical pollution, and a
                significant carbon footprint. For instance, textile production
                consumes vast amounts of water, and synthetic fabrics like
                polyester release microplastics into oceans. By choosing
                sustainable fashion—such as clothes made from organic, recycled
                materials or buying from brands that prioritize eco-friendly
                production—you can help reduce the negative impact on the
                environment.
              </p>
            )}
          </div>

          {/* Fabric Detective */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Which fabric do you think is more sustainable?
            </label>
            <select
              name="fabricDetective"
              value={formData.fabricDetective}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Polyester">Polyester</option>
              <option value="Cotton">Cotton</option>
              <option value="Organic cotton">
                Organic cotton or recycled materials
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-span-full">
            <button
              type="submit"
              disabled={submitting}
              className={`w-full p-3 bg-gray-800 text-white rounded-lg ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Display Body Shape Image */}
        {formData.bodyShape && (
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold">Your Body Shape:</h3>
            <img
              src={
                formData.bodyShape === "Hourglass"
                  ? hourglassImg
                  : formData.bodyShape === "Pear"
                  ? pearImg
                  : formData.bodyShape === "Apple"
                  ? appleImg
                  : formData.bodyShape === "Rectangle"
                  ? rectangleImg
                  : ""
              }
              alt={formData.bodyShape}
              className="mx-auto mt-4 w-1/2 max-w-xs rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OnePageForm;
