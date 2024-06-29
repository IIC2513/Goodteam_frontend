import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CartCardsPay.css';

const CartCardsPay = ({ item}) => {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos/${item.id}`)
            .then(response => {
                const data = response.data;
                setProductItem(data);
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
        });
    }, []);

    return (
        <div className="cart-pay-item-card">
            <img src={productItem.imagen} alt={productItem.nombre} />
            <div className="cart-pay-item-details">
                <h3>{productItem.nombre}</h3>
                <div className="quantity-pay-controls">
                    <p>Cantidad: {item.quantity}</p>
                </div>
                <p>Precio: ${productItem.precio * item.quantity}</p>
                </div>
        </div>
    );
};

export default CartCardsPay;