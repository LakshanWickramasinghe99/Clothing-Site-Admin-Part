import React from 'react';
import { Link } from 'react-router-dom';
import SustainableMaterialsImg from '../../assets/oils.webp';
import EthicalManufacturingImg from '../../assets/ropes.webp';
import CircularFashionImg from '../../assets/textile-leaves.jpg';
import TopImage from '../../assets/TopImage.jpeg';

const Sustainability = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Top Image */}
      <div className="w-full mb-6 h-[100vh]">
        <img
          src={TopImage}
          alt="Top Section Image"
          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"

          
        />
      </div>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Commitment to Sustainability</h1>
        <p className="text-lg text-gray-600">
          At FitFusion, we believe in creating fashion that not only looks good but also does good for the planet.
        </p>
      </div>
      {/* Sustainable Materials Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sustainable Materials We Use</h2>
        <img src={SustainableMaterialsImg} alt="Sustainable Materials" className="mb-4 rounded-lg" />
        <p className="text-gray-600 mb-4">
          We prioritize eco-friendly fabrics, zero-waste patterns, and non-toxic dyes. Our materials include organic
          cotton, recycled polyester, and innovative fabrics like Tencel and hemp.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Organic Cotton</li>
          <li>Recycled Polyester</li>
          <li>Tencel and Hemp</li>
          <li>Non-toxic and natural dyes</li>
          <li>Animal-friendly alternatives (no leather, wool, or silk)</li>
        </ul>
      </section>
      {/* Ethical Manufacturing Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ethical Manufacturing</h2>
        <img src={EthicalManufacturingImg} alt="Ethical Manufacturing" className="mb-4 rounded-lg" />
        <p className="text-gray-600 mb-4">
          Our products are made under ethical working conditions, ensuring fair wages and safe environments for all
          workers. We support local artisans and promote sustainable practices across our supply chain.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Fair wages and ethical working conditions</li>
          <li>Supporting local artisans and craftsmanship</li>
          <li>Local production to reduce carbon emissions</li>
        </ul>
      </section>
      {/* Circular Fashion Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Circular Fashion Movement</h2>
        <img src={CircularFashionImg} alt="Circular Fashion" className="mb-4 rounded-lg" />
        <p className="text-gray-600 mb-4">
          We encourage our customers to participate in circular fashion by recycling their old garments and choosing
          products made from upcycled materials.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Recycling programs for old garments</li>
          <li>Products made from upcycled fabrics</li>
          <li>Durable, long-lasting designs</li>
          <li>Take-back programs for reuse and recycling</li>
        </ul>
      </section>
      {/* Next Level Page Link */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Explore More on Our Sustainable Practices</h2>
        <p className="text-gray-600 mb-4">
          Discover in-depth details about our sustainable practices and how you can be part of the change.
        </p>
        <Link
          to="/next-level-page"
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-all duration-300"
        >
          Learn More
        </Link>
      </section>
    </div>
  );
};

export default Sustainability;
