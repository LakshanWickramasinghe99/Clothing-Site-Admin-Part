import React from 'react';
import img1 from "../../assets/bag01.avif";
import img2 from "../../assets/bag02.avif";
import img3 from "../../assets/bag03.avif";
import img4 from "../../assets/bag04.avif";
import img5 from "../../assets/bag05.avif";
import img6 from "../../assets/bag06.avif";
import img7 from "../../assets/bag07.avif";
import img8 from "../../assets/bag08.avif";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    { id: 1, img: img1, title: "Metal, Resin, Glass Pearls & Strass Gold & Green", rating: 5.0, color: "Plated Stainless Steel Cubic Zirconia Necklace", aosDelay: "200" },
    { id: 2, img: img2, title: "Embroidered Satin, Sequins, Glass Beads, Strass & Gold-Tone Metal", rating: 5.0, color: "Plated Stainless Steel Cubic Zirconia Bag", aosDelay: "200" },
    { id: 3, img: img3, title: "Shiny Lambskin, Bijoux Charms & Gold-Tone Metal Black", rating: 5.0, color: "Women Canvas Shoulder Bag Large Capacity Handbag- 100% Eco-friendly", aosDelay: "200" },
    { id: 4, img: img4, title: "Velvet Gray", rating: 5.0, color: "Patent-effect Mary Jane-style ballet flats. V-shaped vamp. Square toe. Buckled strap fastening on the instep.", aosDelay: "200" },
    { id: 5, img: img5, title: "Crocs Women's Brooklyn Low Wedges Platform Sandals, Chalk Woven, 9", rating: 5.0, color: "Slingback kitten heel shoes with a faux-patent finish. Buckle fastening ankle strap. Pointed toe.", aosDelay: "200" },
    { id: 6, img: img6, title: "JENN ARDOR Wedge Sneakers for Women Fashion Canvas Shoes Casual Platform Hidden Heel Womens Slip On Sneaker Non Slip Side Zipper", rating: 5.0, color: "Slingback shoes in a woven fabric. Metal appliqué detail on the front. Elasticated back strap. Pointed toe.", aosDelay: "200" },
    { id: 7, img: img7, title: "Wool Tweed & Patent Calfskin", rating: 5.0, color: "Split suede ankle boots. Mini heel. Zip fastening. Round toe", aosDelay: "200" },
    { id: 8, img: img8, title: "JENN ARDOR Wedge Sneakers for Women Fashion Canvas Shoes Casual Platform Hidden Heel Womens Slip On Sneaker Non Slip Side Zipper", rating: 4.5, color: "Split suede loafers. Penny strap detail on the front. Rounded toe.", aosDelay: "200" },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12 bg-gray-50 py-12'>
      <div className='container mx-auto'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-lg mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary uppercase tracking-wide'>Top Selling Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-gray-800 mb-4'>Our Best Products</h1>
          <p data-aos="fade-up" className='text-sm text-gray-500'>
            Crafted for style and comfort, these products showcase high-quality materials and timeless designs that elevate your wardrobe with elegance and durability.
          </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {ProductsData.map((data, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={data.aosDelay} 
              className='bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl'
            >
              <img
                src={data.img}
                alt={data.title}
                className='h-[250px] w-full object-cover'
              />
              <div className='p-6'>
                <h3 className='text-lg font-semibold text-gray-800 truncate'>{data.title}</h3>
                <p className='text-sm text-gray-500'>{data.color}</p>
                <div className='flex items-center mt-2'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-yellow-400 ${i < data.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className='ml-2 text-sm text-gray-700 font-medium'>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
