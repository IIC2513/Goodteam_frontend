import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img src="/hero-image.jpg" alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Bienvenido a Nuestra Licorería</h1>
        <p>Explora nuestra exclusiva selección de licores de todo el mundo.</p>
        <button className="cta-button">Ver Productos</button>
      </div>
    </section>
  );
};

export default Hero;
