import React, { useState } from 'react';
import Slider from 'react-slick';
import './ProductSlider.css';

function ProductSlider({productItems}){
    // Creamos flechas para slider
    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="control-btn" onClick={onClick}>
                <button aria-label="Previous" className="prev">
                    <i className="fa fa-long-arrow-alt-left"></i>
                </button>
            </div>
        );
    };

    const NextArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="control-btn" onClick={onClick}>
                <button aria-label="Next" className="next">
                    <i className="fa fa-long-arrow-alt-right"></i>
                </button>
            </div>
        );
    };

    // Configuración del slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                slidesToShow: 4,
                dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                dots: true,
                },
            },
            ],
    };

    return (
    <>
        <Slider {...settings}>
            {productItems.map((product, index) => {
                return (
                    <div className="box" key={index}>
                        <div className="product">
                            <div className="img">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="product-details">
                                <h3 className="truncate">{product.name}</h3>
                                <div className="price">
                                    <h4>{product.price}.00</h4>
                                    <button
                                        className="cart-add-btn"
                                    >
                                    Agregar al carro
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
    </>
    );
};

export default ProductSlider;