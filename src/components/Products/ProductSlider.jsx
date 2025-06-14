import React, { useState, useContext, useRef } from 'react';
import Slider from 'react-slick';
import './ProductSlider.css';
import { CartContext } from '../header/CartContext';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthContext';

function ProductSlider({ productItems, refreshCarrito }) {
    const { addToCart } = useContext(CartContext);
    const [counts, setCounts] = useState({});

    const sliderRef = useRef(null);
    console.log(sliderRef);

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

    const { user_id }= React.useContext(AuthContext)
    const handleAddToCart = async (product, quantity) => {
        try {
            console.log('Sending request to add product to cart', product, quantity);
            // Aquí realizaríamos la solicitud POST al backend para agregar el producto al carrito
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/carritos/agregar`, {
                usuarioId: user_id, // Debes obtener el usuario actual o su ID de alguna manera
                productoId: product.id,
                cantidad: quantity,
                precio: product.precio
            });
            
            // Asumiendo que el backend devuelve algún tipo de confirmación o información adicional
            console.log(response.data);

            // Luego, podemos agregar el producto al carrito localmente usando el contexto
            addToCart({ ...product, quantity });

            // También podemos reiniciar el contador de cantidad a 1 para ese producto
            setCounts((prevCounts) => ({ ...prevCounts, [product.id]: 1 }));

            refreshCarrito();

        } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
            alert('Debes iniciar sesión para agregar productos al carrito');
        }
    };

    const PrevArrow = (props) => {
        const { onClick, currentSlide } = props;
        const shouldShow = currentSlide !== 0; // Muestra la flecha prev si no estás en el primer slide
        return shouldShow ? (
            <div className="control-btn" onClick={onClick}>
                <button aria-label="Previous" className="prev">
                    <i className="fa fa-long-arrow-alt-left"></i>
                </button>
            </div>
        ) : null;
    };

    const NextArrow = (props) => {
        const { onClick, currentSlide, slideCount} = props;
        const shouldShow = currentSlide + settings.slidesToShow < slideCount // Oculta la flecha next cuando estás en el último slide visible
        return shouldShow ? (
            <div className="control-btn" onClick={onClick}>
                <button aria-label="Next" className="next">
                    <i className="fa fa-long-arrow-alt-right"></i>
                </button>
            </div>
        ) : null;
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
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
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
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
                                <img src={product.imagen} alt="" />
                            </div>
                            <div className="product-details">
                                <h3 className="truncate">{product.nombre}</h3>
                                <div className="price">
                                    <h4>${product.precio}</h4>
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
                                    <button
                                        className="cart-add-btn"
                                        onClick={() => handleAddToCart(product, counts[index] || 1)}
                                    >
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
}

export default ProductSlider;