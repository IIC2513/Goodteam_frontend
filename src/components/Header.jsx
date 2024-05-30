import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Logo de la empresa" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button>Ingresar</button>
        <button>Registrarse</button>
        <button>
          <img src="/carrito.png" alt="Carrito de compras" />
        </button>
      </div>
    </header>
  );
}

export default Header;
