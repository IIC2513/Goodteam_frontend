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
        <h2 onClick={() => toggleSection('landing')} className="section-header">
          Página de Inicio {activeSection === 'landing' ? '▲' : '▼'}
        </h2>
        {activeSection === 'landing' && (
          <div className="section-content fade-in">
            <p>
              La página de inicio ofrece una introducción a nuestra aplicación, mostrando una vista previa de nuestras bebidas favoritas. Puedes iniciar sesión, registrarte o explorar la página principal desde aquí.
            </p>
            <img src={landingGif} alt="Landing Page GIF" className="gif"/>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('about')} className="section-header">
          Página Sobre Nosotros {activeSection === 'about' ? '▲' : '▼'}
        </h2>
        {activeSection === 'about' && (
          <div className="section-content fade-in">
            <p>
              La página 'Sobre Nosotros' proporciona información sobre nuestro equipo y nuestra misión. Es una buena forma de conocer a las personas detrás de la aplicación.
            </p>
            <img src={aboutGif} alt="About Us Page GIF" className="gif"/>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('main')} className="section-header">
          Página Principal {activeSection === 'main' ? '▲' : '▼'}
        </h2>
        {activeSection === 'main' && (
          <div className="section-content fade-in">
            <p>
              La página principal muestra todos los productos disponibles en un carrusel interactivo. Puedes navegar por nuestra selección de bebidas y encontrar información detallada sobre cada producto.
            </p>
            <img src={mainGif} alt="Main Page GIF" className="gif"/>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('navbar')} className="section-header">
          Navegación {activeSection === 'navbar' ? '▲' : '▼'}
        </h2>
        {activeSection === 'navbar' && (
          <div className="section-content fade-in">
            <p>
              La barra de navegación se encuentra en la parte superior de todas las páginas, permitiéndote moverte fácilmente entre la página de inicio, sobre nosotros, y la página principal.
            </p>
            <img src={navbarGif} alt="Navbar GIF" className="gif"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsPage;

