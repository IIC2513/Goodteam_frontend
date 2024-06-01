import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/images/logo.jpg';
import cartIcon from '../../assets/cart.svg';
import lupaIcon from '../../assets/search.svg';


export const Navbar = ({ cartItems, toggleCart }) => {
    const [menuAbierto, setMenuAbierto] = useState(false)

    return(
        <nav>
            <Link to='/mainpage' className="logo-link">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <div className="search-container">
                <img src={lupaIcon} alt="Buscar" className="search-icon" />
                <input type="text" placeholder="Buscar productos..." className="search-input" />
            </div>
            <div className="menu" onClick={() => {
                setMenuAbierto(!menuAbierto)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuAbierto ? "abierto" : ""}>
                <li className="cart" onClick={toggleCart}>
                    <div>
                        <img src={cartIcon} alt="Carrito" className="cart-icon" />
                        <span className="cart-count">{cartItems}</span>
                    </div>
                </li>
                <li><NavLink to="/mainpage">Productos</NavLink></li>
                <li><NavLink to="/about_us">About us</NavLink></li>
                <li><NavLink to='/instrucciones'>Instrucciones</NavLink></li>
            </ul>
        </nav>
    );
};