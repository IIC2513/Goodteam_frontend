import React, { useContext } from 'react';
import './CartItemCard.css';
import { CartContext } from './CartContext';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthContext';

const CartItemCard = ({ item }) => {
    //const { removeFromCart, user_id, fetchCartItems }= useContext(AuthContext)
    // Rebisar como conectar con el backend para eliminar solo un producto del carrito.
    return (
        <div className="cart-item-card">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItemCard;