import { useState } from 'react'
import logo from './assets/logo.jpg'
import './Landing_page.css'

function Landing_page() {
  return (
    <>
      <div className="landing-container">
        <div className="landing-card">
          <div className="landing-left">
            {/* Logo en la carpeta assets */}
            <img src={logo} className="landing-logo" alt="Logo"/>
            <h2 className="slogan">El mejor lugar para tus bebidas favoritas</h2>
            <div className="landing-buttons">
              <button className="landing-button">Iniciar Sesión</button>
              <button className="landing-button">Registrarse</button>
              <button className="landing-main-button">Página Principal</button>
            </div>
          </div>
          <div className="landing-right">
            {/* Espacio reservado para una imagen o actividad interactiva */}
            <div className="interactive-placeholder">Contenido Interactivo</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing_page;
