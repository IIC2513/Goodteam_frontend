// src/pages/DocsPage/DocsPage.jsx
import React, { useState, useEffect } from 'react';
import Section from '../../components/Section/Section.jsx';
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

  const sections = [
    {
      title: 'Página de Inicio',
      description: 'La página de inicio ofrece una introducción a nuestra aplicación, mostrando una vista previa de nuestras bebidas favoritas. Puedes iniciar sesión, registrarte o explorar la página principal desde aquí.',
      gifPath: landingGif,
    },
    {
      title: 'Página Sobre Nosotros',
      description: 'La página \'Sobre Nosotros\' proporciona información sobre nuestro equipo y nuestra misión. Es una buena forma de conocer a las personas detrás de la aplicación.',
      gifPath: aboutGif,
    },
    {
      title: 'Página Principal',
      description: 'La página principal muestra todos los productos disponibles en un carrusel interactivo. Puedes navegar por nuestra selección de bebidas y encontrar información detallada sobre cada producto.',
      gifPath: mainGif,
    },
    {
      title: 'Navegación',
      description: 'La barra de navegación se encuentra en la parte superior de todas las páginas, permitiéndote moverte fácilmente entre la página de inicio, sobre nosotros, y la página principal.',
      gifPath: navbarGif,
    },
  ];

  return (
    <div className="docs-container">
      <h1>Guía de Uso de la Aplicación</h1>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          gifPath={section.gifPath}
          activeSection={activeSection}
          toggleSection={toggleSection}
        />
      ))}
    </div>
  );
};

export default DocsPage;
