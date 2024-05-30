import React from "react";
import { Link, NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/images/logo.jpg';


export const Navbar = () => {
    return(
        <nav>
            <Link to='/' className="logo-link">
                <img src={logo} alt="La Kantina Logo" className="logo" />
            </Link>
            <ul>
                <li><NavLink to="/about_us">About us</NavLink></li>
                <li><NavLink to='/instrucciones'>Instrucciones</NavLink></li>
            </ul>
        </nav>
    );
};