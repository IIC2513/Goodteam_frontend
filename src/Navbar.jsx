import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


export const Navbar = () => {
    return(
        <nav>
            <Link to='/' className="title">
                La Kantina
            </Link>
            <ul>
                <li><Link to="/about_us">About us</Link></li>
                <li><Link>Instrucciones</Link></li>
            </ul>
        </nav>
    );
};