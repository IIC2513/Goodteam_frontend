import React, { useContext, useEffect } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, totalAmount, clearCart } = useContext(CartContext);
    
    useEffect(() => {
        console.log('Carrito actualizado:', cartItems);
    }, [cartItems]);
    
    return (
        <div className={`cart-widget ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Carrito de Compras</h2>
                <button className="close-btn" onClick={onClose}>x</button>
            </div>
            <div className="cart-content">
                {cartItems.length > 0 ? (
                    <>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <span>{item.name} x {item.quantity} - ${item.price * item.quantity}</span>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total: ${totalAmount}</p>
                        <button className="checkout-btn" onClick={() => { clearCart(); alert('Compra realizada!'); }}>Comprar</button>
                    </>
                ) : (
                    <p>Tus productos se mostrarán aquí...</p>
                )}
            </div>
        </div>
    );
};

export default Cart;