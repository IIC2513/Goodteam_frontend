import React from 'react';
import './Cart.css'

const Cart = ({ isOpen, onClose }) => {
    return (
        <div className={`cart-widget ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Carrito de Compras</h2>
                <button className="close-btn" onClick={onClose}>x</button>
            </div>
            <div className="cart-content">
                {/* logica items */}
                <p>Tus productos se mostrarán aquí...</p>
            </div>
        </div>
    );
}

export default Cart;