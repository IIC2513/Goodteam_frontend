import React, { useContext, useEffect } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import CartItemCard from './CartItemCard';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, totalAmount, clearCart, removeFromCart } = useContext(CartContext);
    
    useEffect(() => {
        // Llama a una función para obtener la lista de productos del backend
        // y luego actualiza cartItems usando updateCartItems
    }, []);
    
    return (
        <div className={`cart-widget ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Carrito de Compras</h2>
                <button className="close-btn" onClick={onClose}>x</button>
            </div>
            <div className="cart-content">
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map(item => (
                            <CartItemCard key={item.id} item={item} removeFromCart={removeFromCart} />
                        ))}
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