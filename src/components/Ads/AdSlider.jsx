import React from "react";
import Slider from "react-slick";
import Ad1 from "../../assets/AdsImages/ad1.jpg";
import Ad2 from "../../assets/AdsImages/ad2.jpg";
import Ad3 from "../../assets/AdsImages/ad3.jpg";
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
                    <img src={Ad1} alt="ad1" />
                </div>
                <div className="ad-slide">
                    <img src={Ad2} alt="ad2" />
                </div>
                <div className="ad-slide">
                    <img src={Ad3} alt="ad3" />
                </div>
            </Slider>
        </>
    );
};

export default AdSlider;