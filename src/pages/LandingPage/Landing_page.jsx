import logo from '../../assets/logo.jpg';
import whisky from './../../assets/whisky.png';
import botellas from './../../assets/botellas.png';
import './Landing_page.css';
import Quiz from '../../components/Quiz/Quiz.jsx';

function Landing_page() {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <div className="landing-left">
          <img src={logo} className="landing-logo" alt="Logo" />
          <h2 className="slogan">El mejor lugar para tus bebidas favoritas</h2>
          <p className="subslogan">Explora nuestra amplia selección de productos seleccionados, 
          desde los clásicos favoritos hasta las últimas novedades, todo disponible
          para una entrega rápida y conveniente en la puerta de tu hogar. </p>
          <div className="landing-buttons">
            <button className="landing-button">Iniciar Sesión</button>
            <button className="landing-button">Registrarse</button>
            <button className="landing-main-button">Página Principal</button>
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
  );
}
export default Landing_page;
