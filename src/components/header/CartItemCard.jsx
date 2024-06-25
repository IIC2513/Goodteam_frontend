import React from 'react';
import './CartItemCard.css';

const CartItemCard = ({ item, removeFromCart }) => {
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