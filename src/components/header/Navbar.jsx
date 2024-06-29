import React, { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/cart.svg';
import LogoutButton from "../Auth/Logout";
import { AuthContext } from "../Auth/AuthContext";
import { CartContext } from "./CartContext";
import SearchComponent from "./Search";

export const Navbar = ({ cartItems: propCartItems, toggleCart }) => {
    const [menuAbierto, setMenuAbierto] = useState(false)

    const { token } = React.useContext(AuthContext);
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return(
        <nav>
            <div className="left-container">
                <Link to='/' className="logo-link">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
            

            <div className="search-container">
                <SearchComponent />
            </div>
            <div className="cart" onClick={toggleCart}>
                <img src={cartIcon} alt="Carrito" className="cart-icon" />
                <span className="cart-count">{cartCount}</span>
            </div>
            <div className="menu" onClick={() => {
                setMenuAbierto(!menuAbierto)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuAbierto ? "abierto" : ""}>
                <li><NavLink to="/mainpage">Productos</NavLink></li>
                <li><NavLink to="/about_us">About us</NavLink></li>
                <li><NavLink to='/DocsPage'>Instrucciones</NavLink></li>
                <li><NavLink to="/admin" className="admin-link">Admin</NavLink></li>
                <li><div className="auth-buttons">
                    {token !== "null" ? (
                        <> 
                            <NavLink to="/profile" className="profile-link">Perfil</NavLink>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="login-link">Iniciar sesión</NavLink>
                        </>
                    )}
                </div></li>
            </ul>
        </nav>
    );
};