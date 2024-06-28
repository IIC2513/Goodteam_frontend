import React, { useContext, useEffect } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import CartItemCard from './CartItemCard';
import { NavLink } from 'react-router-dom';

const Cart = ({ isOpen, onClose, refreshCarrito, refresh }) => {
    const { cartItems, totalAmount, clearCart, removeFromCart, fetchCartItems, user_id, cartId} = useContext(CartContext);
    
    useEffect(() => {
        fetchCartItems(user_id);
    }, [refresh]);
    
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
                            <CartItemCard key={item.id} item={item} cartId={cartId} refreshCarrito={refreshCarrito}/>
                        ))}
                        <p>Total: ${totalAmount}</p>
                        <NavLink to="/pay" className="checkout-btn">Comprar</NavLink>
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