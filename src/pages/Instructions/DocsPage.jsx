// src/pages/DocsPage.jsx
import React, { useState, useEffect } from 'react';
import landingGif from '../../assets/gifs/Landing_page_gif.gif';
import aboutGif from '../../assets/gifs/AboutUs_page_gif.gif';
import mainGif from '../../assets/gifs/Main_page_gif.gif';
import navbarGif from '../../assets/gifs/Navbar_gif.gif';

import './DocsPage.css';

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#F3DFB9';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.minHeight = '100vh';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.display = '';
      document.body.style.justifyContent = '';
      document.body.style.alignItems = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="docs-container">
      <h1>Guía de Uso de la Aplicación</h1>
      
      <div className="section">
        <h2 onClick={() => toggleSection('landing')}>
          {activeSection === 'landing' ? '▲' : '▼'} Página de inicio 
        </h2>
        {activeSection === 'landing' && (
          <div className="section-content">
            <p>
              La página de inicio es la primera página que verás al ingresar a la aplicación. Acá puedes acceder a páginas para iniciar sesión, registrarse (aun no implementado) o ir directamente a la página de los productos. Además, ofrece un pequeño quiz para identificar qué tipo de tragos podrían gustarte según tus preferencias personales.
            </p>
            <img src={landingGif} alt="Landing Page GIF" className="gif"/>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('about')}>
          {activeSection === 'about' ? '▲' : '▼'} About Us
        </h2>
        {activeSection === 'about' && (
          <div className="section-content">
            <p>
              La página de "About Us" contiene información general sobre La Kantina, junto con los miembros del equipo que trabajaron en el desarrollo de la aplicación. Si te interesa saber más sobre un miembro en específico, puedes acceder a una pequeña descripción haciendo clic a un boton en su tarjeta.
            </p>
            <img src={aboutGif} alt="About Us Page GIF" className="gif"/>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('main')}>
          {activeSection === 'main' ? '▲' : '▼'} Página Principal
        </h2>
        {activeSection === 'main' && (
          <div className="section-content">
            <p>
              En la página principal se muestran todos los productos disponibles en la aplicación a modo de carrusel, puedes desplazar hacia la izquierda o derecha para ver más productos. Si te interesa comprar un producto en específico, puedes seleccionar las cantidades que desees.
            </p>
            <img src={mainGif} alt="Main Page GIF" className="gif"/>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('navbar')}>
          {activeSection === 'navbar' ? '▲' : '▼'} Barra de Navegación
        </h2>
        {activeSection === 'navbar' && (
          <div className="section-content">
            <p>
              La barra de navegación tiene todos los elementos necesarios para navegar por la aplicación. Puedes acceder a la página de inicio seleccionando el logo de La Kantina, o a otras páginas como "About Us" o "Products" haciendo clic en los botones correspondientes.
            </p>
            <img src={navbarGif} alt="Navbar GIF" className="gif"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsPage;

