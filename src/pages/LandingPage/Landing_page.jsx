import React from 'react';
import logo from '../../assets/images/logo.png';
import whisky from './../../assets/whisky.png';
import botellas from './../../assets/botellas.png';
import './Landing_page.css';
import Quiz from '../../components/Quiz/Quiz.jsx';

function Landing_page() {
  // useEffect(() => {
  //   // Guardar los estilos originales del body
  //   const originalStyles = {
  //     backgroundColor: document.body.style.backgroundColor,
  //     justifyContent: document.body.style.justifyContent,
  //     alignItems: document.body.style.alignItems,
  //     display: document.body.style.display,
  //   };

  //   // Aplicar los nuevos estilos
  //   document.body.style.backgroundColor = '#F3DFB9';
  //   document.body.style.display = 'flex';
  //   document.body.style.justifyContent = 'center';
  //   document.body.style.alignItems = 'center';

  //   // Revertir los estilos cuando el componente se desmonte
  //   return () => {
  //     document.body.style.backgroundColor = originalStyles.backgroundColor;
  //     document.body.style.display = originalStyles.display;
  //     document.body.style.justifyContent = originalStyles.justifyContent;
  //     document.body.style.alignItems = originalStyles.alignItems;
  //   };
  // }, []);

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="landing-card">
          <div className="landing-left">
            <img src={logo} className="landing-logo" alt="Logo" />
            <h2 className="slogan">El mejor lugar para tus bebidas favoritas</h2>
            <p className="subslogan">Explora nuestra amplia selección de productos seleccionados, 
            desde los clásicos favoritos hasta las últimas novedades, todo disponible
            para una entrega rápida y conveniente en la puerta de tu hogar.</p>
            <div className="landing-buttons">
              <button className="landing-button" onClick={() => window.location.href = '/Login'}>Iniciar Sesión</button>
              <button className="landing-main-button" onClick={() => window.location.href = '/Mainpage'}>Ver Productos</button>
            </div>
          </div>
          <div className="landing-right">
            <Quiz />
            <div className="image-wrapper">
              <img src={whisky} className="img-logo" alt="Logo" />
              <img src={botellas} className="img-logo" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
