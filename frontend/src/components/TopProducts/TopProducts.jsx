import React from 'react'
import img1 from "../../assets/makeup01.webp"
import img2 from "../../assets/makeup02.webp"
import img3 from "../../assets/makeup3.webp"
import img4 from "../../assets/makeup04.webp"
import img5 from "../../assets/makeup05.webp"
import img6 from "../../assets/makeup06.webp"
import { FaStar} from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "FitFushion Matte Touch Lipstick",
        description: "A highly pigmented, comfortable, matte finish lipstick"
    },

    {
        id: 2,
        img: img2,
        title: "FitFushion Fashion Nail Polish",
        description: "21 Toxin Free Viana Fashion Nail Polish has a wide variety of colourful and neutral shades"
    },

    {
        id: 3,
        img: img3,
        title: "FitFushion Hair Thickening & Volumizing",
        description: "Promotes hair growth and reduce hair loss Hair Thickening & Volumizing"
    },

    {
        id: 4,
        img: img4,
        title: "FitFushion HD Lipstick",
        description: "A truly game-changing, iconic, smooth, and creamy lipstick to deliver the high definition, elegant hydrated lips of your dreams."
    },

    {
        id: 5,
        img: img5,
        title: "FitFushion HD Sponge Compressed Powder",
        description: "A Flawless High Definition Matte Finish Worthy Of your Second Skin"
    },

    {
        id: 6,
        img: img6,
        title: "FitFushion HD Liquid Foundation",
        description: "A truly game changing, long wear, light as a feather liquid foundation to deliver the High Definition Flawless Finish of your Dreams."
    }
]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
        {/* Header section*/}
        <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Crafted for style and comfort, the FitFusion Classic Denim Jacket is a timeless piece for every wardrobe. Made from high-quality, durable denim, this jacket offers a sleek fit and a vintage-inspired look that never goes out of style. The classic button-down front, chest pockets, and side pockets add both functionality and flair.
                </p>
            </div>
        {/* Body section*/}
        <div
        className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-20 md:gap-5 place-items-center'
        >
            {ProductsData.map((data)=>(
                <div
                data-aos="zoom-in"
                className=' bg-white 
               dark:bg-gray-200 hover:bg-black/80
                dark-hover:bg-primary hover:text-white
                relative shadow-xl duration-300 group max-w-[300px]'
                >
                    {/* {image section} */}
                    <div>
                        <img src={data.img} 
                        alt=""
                        className='max-w-[300px] block mx-auto
                        group-hover:scale-105 duration-300
                        drop-shadow-md'
                        />
                    </div>
                    {/* details section */}
                    <div className="p-4 text-center">
                    {/* star ratings  */}
                        <div className="w-full flex items-center justify-center
                        gap-1
                        ">
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>

                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                        <button className='bg-primary hover:scale-105
                        duration-300 text-white py-1 px-4
                        rounded-full mt-4 group-hover:bg-white
                        group-hover:text-primary'
                        >
                            Order Now
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default TopProducts

