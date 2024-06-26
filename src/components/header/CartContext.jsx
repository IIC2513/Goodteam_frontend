import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const { user_id }= React.useContext(AuthContext);

    const fetchCartItems = async (user_id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/carritos/usuario/${user_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const carrito = response.data;
            if (carrito && carrito.listaProductos) {
                updateCartItems(carrito.listaProductos);
            }
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const updateCartItems = (listaProductos) => {
        const parsedCartItems = parseCartItems(listaProductos);
        setCartItems(parsedCartItems);
    };

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === product.id);
            if (itemIndex !== -1) {
                const newItems = [...prevItems];
                newItems[itemIndex].quantity += 1;
                return newItems;
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const parseCartItems = (listaProductos) => {
        // Ejemplo de función de parseo, ajusta según la estructura real
        const items = listaProductos.split(',').map(item => {
            const [id, quantity] = item.split(':');
            return {
                id: parseInt(id),
                quantity: parseInt(quantity)
            };
        });
        return items;
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        fetchCartItems(user_id);
    }, [user_id]);

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalAmount, updateCartItems, fetchCartItems, user_id }}>
            {children}
        </CartContext.Provider>
    );
};
