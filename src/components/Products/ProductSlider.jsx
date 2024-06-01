import React, { useState } from 'react';
import Slider from 'react-slick';
import './ProductSlider.css';

function ProductSlider({productItems}){
    // Creamos contador de productos
    const [counts, setCounts] = useState({});
    const increment = (index) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [index]: (prevCounts[index] || 1) + 1,
        }));
    };
    
    const decrement = (index) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [index]: Math.max((prevCounts[index] || 1) - 1, 1),
        }));
    };

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
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
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
                                    <h4>${product.price}</h4>
                                </div>
                                <div className="counter">
                                    <button className="min" onClick={() => decrement(index)}>
                                        -
                                    </button>
                                    <label>{counts[index] || 1}</label>
                                    <button className="mas" onClick={() => increment(index)}>
                                        +
                                    </button>
                                </div>
                                <button className="cart-add-btn">
                                Agregar al carro
                                </button>
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