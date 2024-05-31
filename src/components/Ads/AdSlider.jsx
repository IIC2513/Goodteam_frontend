import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AdSlider.css";

const AdSlider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
    };

    return (
        <>
            <Slider {...settings}>
                <div className="ad-slide">
                    <img src="src/assets/AdsImages/ad1.jpg" alt="ad1" />
                </div>
                <div className="ad-slide">
                    <img src="src/assets/AdsImages/ad2.jpg" alt="ad2" />
                </div>
                <div className="ad-slide">
                    <img src="src/assets/AdsImages/ad3.jpg" alt="ad3" />
                </div>
            </Slider>
        </>
    );
};

export default AdSlider;