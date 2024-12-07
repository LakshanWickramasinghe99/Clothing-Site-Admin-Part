import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from './components/TopProducts/TopProducts';
import AOS from "aos";
import "aos/dist/aos.css"; 
import Banner from "./components/Banner/Banner";
import Trend from "./components/Trend/Trend";
import Favourite from './components/Favourite/Favourite';
import Sustainability from "./components/Sustainability/Sustainability";
import Fashion from "./components/Fashion/Fashion";
import VirtualTryOn from "./components/VirtualTryOn/VirtualTryOn";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Terms from './components/Terms/Terms';

// Additional routes (Yevin)
import Login from './components/Login/Login';  
import Register from './components/Register/Register';
import Questions from './components/Register/OnePageForm';
import Q1 from './components/Register/Q1';
import UserProfile from './components/Profile/UserProfile';
import QuestionsDisplay from './components/Profile/QuestionsPage';
import Card from './components/Card/Card';
import ForgotPassword from './components/ForgotPwd/ForgotPassword';
import ResetPassword from './components/ForgotPwd/ResetPassword';
import Wardrobe from './components/Wardrobe/Wardrobe';
import Privacy from './components/Privacy/privacy';
import Community from './components/Community/Community'

const App = () => {
  const [favorites, setFavorites] = useState([]);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Create a wrapper to conditionally render Navbar and Footer
  const ConditionalWrapper = ({ children }) => {
    const location = useLocation();
    
    // Hide Navbar and Footer on /virtualTryOn route
    const hideHeaderFooter = 
                              location.pathname === '/login' ||
                              location.pathname === '/register' ||
                              location.pathname === '/questions' ||
                              location.pathname === '/forgot-password' ||
                              location.pathname === '/questions' ||
                              location.pathname === '/card';
    return (
      <>
        {!hideHeaderFooter && <Navbar />}
        <div className="flex-grow">
          {children}
        </div>
        {!hideHeaderFooter && <Footer />}
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <ConditionalWrapper>
          <Routes>
            {/* Main routes */}
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <TopProducts />
                <Banner />
              </>
            } />
            <Route path="/trend" element={<Trend setFavorites={setFavorites} favorites={favorites} />} />
            <Route path="api/favorite" element={<Favourite favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/fashion" element={<Fashion />} /> 
            <Route path="/virtualTryOn" element={<VirtualTryOn />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wardrobe" element={<Wardrobe/>}/>
            
            {/* Yevin's additional routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/q1' element={<Q1 />} />
            <Route path='/uProfile' element={<UserProfile />} />
            <Route path='/qDisplay' element={<QuestionsDisplay />} />
            <Route path='/card' element={<Card />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/community" element={<Community />} />

          </Routes>
        </ConditionalWrapper>
      </Router>
    </div>
  );
};

export default App;
