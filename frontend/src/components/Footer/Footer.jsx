import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import Logo from '../../assets/logo.jpg'; 

export default function Footer() {  
  return (
    <footer className='bg-[#131313] text-white py-12'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-8 md:space-y-0'>
        {/* Left Section: Logo and Copyright */}
        <div className='flex flex-col items-center md:items-start space-y-4'>
          <div>
            {/* Logo */}
            <img src={Logo} alt="FitFusion Logo" className='w-[100px] h-[100px] mb-4' />
          </div>
          <div>
            {/* Copyright */}
            <p className='text-sm'>&copy; 2024 FitFusion Clothing Company & Limited</p>
          </div>
        </div>
        {/* Center Section: Policies, Company, Help */}
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-20 space-y-8 md:space-y-0'>
          {/* Policies */}
          <div className='flex flex-col space-y-2 text-center md:text-left'>
            <h3 className='font-bold text-lg'>Policies</h3>
            <a href="/privacy" className='text-sm hover:text-gray-400'>Privacy Policy</a>
            <a href="#" className='text-sm hover:text-gray-400'>Purchase Conditions</a>
            <a href="#" className='text-sm hover:text-gray-400'>Cookies Settings</a>
            <a href="/terms" className='text-sm hover:text-gray-400'>Terms & Conditions</a>
          </div>
          {/* Company */}
          <div className='flex flex-col space-y-2 text-center md:text-left'>
            <h3 className='font-bold text-lg'>Company</h3>
            <a href="#" className='text-sm hover:text-gray-400'>About Us</a>
            <a href="#" className='text-sm hover:text-gray-400'>Join Life</a>
            <a href="#" className='text-sm hover:text-gray-400'>Offices</a>
            <a href="#" className='text-sm hover:text-gray-400'>Work with Us</a>
            <a href="#" className='text-sm hover:text-gray-400'>Contact</a>
            <a href="/community" className='text-sm hover:text-gray-400'>Community Guidelines</a>
          </div>
          {/* Help */}
          <div className='flex flex-col space-y-2 text-center md:text-left'>
            <h3 className='font-bold text-lg'>Help</h3>
            <a href="#" className='text-sm hover:text-gray-400'>My Zara Account</a>
            <a href="#" className='text-sm hover:text-gray-400'>Items and Sizes</a>
            <a href="#" className='text-sm hover:text-gray-400'>Shipping</a>
            <a href="#" className='text-sm hover:text-gray-400'>Payment and Invoices</a>
            <a href="#" className='text-sm hover:text-gray-400'>My Purchases</a>
            <a href="#" className='text-sm hover:text-gray-400'>Exchanges, Returns, and Refunds</a>
            <a href="#" className='text-sm hover:text-gray-400'>Zara Experiences</a>
          </div>
        </div>
        {/* Right Section: Social Media */}
        <div className='flex flex-col items-center space-y-4'>
          <h3 className='font-bold text-lg'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href="#" className='hover:text-gray-400'><FaFacebookF size={20} /></a>
            <a href="#" className='hover:text-gray-400'><FaInstagram size={20} /></a>
            <a href="#" className='hover:text-gray-400'><FaYoutube size={20} /></a>
            <a href="#" className='hover:text-gray-400'><FaTiktok size={20} /></a>
            <a href="#" className='hover:text-gray-400'><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
