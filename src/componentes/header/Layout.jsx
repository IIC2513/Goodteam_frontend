import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import './Layout.css';
import Cart from './Cart';

const Layout = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <>
            <Navbar toggleCart={toggleCart} cartItems={0}/>
            <div className="content">
                <Outlet/>
            </div>
            <Cart isOpen={cartOpen} onClose={toggleCart} />
        </>
    );
};

export default Layout;