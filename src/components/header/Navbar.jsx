import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/cart.svg';
import lupaIcon from '../../assets/search.svg';
import LogoutButton from "../Auth/Logout";
import { AuthContext } from "../Auth/AuthContext";


export const Navbar = ({ cartItems, toggleCart }) => {
    const [menuAbierto, setMenuAbierto] = useState(false)
    const { token } = React.useContext(AuthContext);

    return(
        <nav>
            <div className="left-container">
                <Link to='/' className="logo-link">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <div className="auth-buttons">
                    {token !== "null" ? (
                        <> 
                            <LogoutButton />
                            <NavLink to="/profile" className="profile-link">Perfil</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="login-link">Iniciar sesión</NavLink>
                            <NavLink to="/login" className="register-link">Registrarse</NavLink>
                        </>
                    )}
                </div>
                <NavLink to="/admin" className="admin-link">Admin</NavLink>
            </div>
            

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
                <li><NavLink to='/DocsPage'>Instrucciones</NavLink></li>
            </ul>
        </nav>
    );
};