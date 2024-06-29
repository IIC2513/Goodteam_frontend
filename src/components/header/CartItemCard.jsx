import React, { useContext, useState, useEffect } from 'react';
import './CartItemCard.css';
import { CartContext } from './CartContext';
import axios from 'axios';

const CartItemCard = ({ item, cartId, refreshCarrito }) => {
    const { removeFromCart, user_id }= useContext(CartContext)
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

    const handleRemoveFromCart = async (cartId, productId) => {
        try {
            console.log('Sending request to remove product from cart', cartId, productId);
            // Aquí realizaríamos la solicitud DELETE al backend
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/carritos/${cartId}/productos/${productId}`);
            console.log(response.data);

            // Luego, podemos agregar el producto al carrito localmente usando el contexto
            removeFromCart({ productId });

            refreshCarrito();

        } catch (error) {
            console.error('Error al eliminar producto del carrito:', error);
            alert('Hubo un error al intentar eliminar el producto del carrito.');
        }
    };

    const handleIncrement = async () => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/carritos/agregar`, {
            usuarioId: user_id,
            productoId: item.id,
            cantidad: 1,
            precio: item.precio
        });
        refreshCarrito();
    };

    const handleDecrement = async () => {
        if (item.quantity > 1) {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/carritos/agregar`, {
                usuarioId: user_id,
                productoId: item.id,
                cantidad: -1,
                precio: item.precio
            });
            refreshCarrito();
        } else {
            handleRemoveFromCart(cartId, item.id);
        }
    };


    return (
        <div className="cart-item-card">
            <img src={productItem.imagen} alt={productItem.nombre} />
            <div className="cart-item-details">
                <h3>{productItem.nombre}</h3>
                <div className="quantity-controls">
                    <p>Cantidad: {item.quantity}</p>
                    <div className="button-container">
                        <button onClick={handleIncrement}>+</button>
                        <button onClick={handleDecrement}>-</button>
                    </div>
                </div>
                <p>Precio: ${productItem.precio * item.quantity}</p>
                </div>
            <span className="trash-icon" onClick={() => handleRemoveFromCart(cartId, item.id)}>
                <i className="fas fa-trash-alt fa-lg"></i>
            </span>
        </div>
    );
};

export default CartItemCard;