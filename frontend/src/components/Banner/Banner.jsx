import React from 'react';
import BannerImage1 from "../../assets/2993590.jpg"; // Import the first banner image
import BannerImage2 from "../../assets/6106394.jpg"; // Import the second banner image
import BannerImage3 from "../../assets/6179615.jpg"; // Import the third banner image
import Slider from "react-slick";

// Array of banner images
const BannerList = [
    {
        id: 1,
        img: BannerImage1,
    },
    {
        id: 2,
        img: BannerImage2,
    },
    {
        id: 3,
        img: BannerImage3,
    }
];

const Banner = () => {
    const bannerSettings = {
        dots: true, // Add dots for the banner slider
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className='relative'>
            {/* Banner Section */}
            <Slider {...bannerSettings}>
                {BannerList.map((banner) => (
                    <div key={banner.id}>
                        <img src={banner.img} alt={`Banner ${banner.id}`} className='w-full h-[500px] object-cover' />
                        <div className='absolute inset-0 opacity-50 flex items-center justify-center'>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Banner;
