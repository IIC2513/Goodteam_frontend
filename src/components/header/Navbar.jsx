import React, { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/cart.svg';
import lupaIcon from '../../assets/search.svg';
import { CartContext } from "./CartContext";


export const Navbar = ({ toggleCart }) => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const { cartItems } = useContext(CartContext);

    return(
        <nav>
            <Link to='/' className="logo-link">
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
                        <span className="cart-count">{cartItems.length}</span>
                    </div>
                </li>
                <li><NavLink to="/mainpage">Productos</NavLink></li>
                <li><NavLink to="/about_us">About us</NavLink></li>
                <li><NavLink to='/DocsPage'>Instrucciones</NavLink></li>
            </ul>
        </nav>
    );
};