import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import './Landing_page.css';

function Landing_page() {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <div className="landing-left">
          <img src={logo} className="landing-logo" alt="Logo" />
          <h2 className="slogan">El mejor lugar para tus bebidas favoritas</h2>
          <div className="landing-buttons">
            <button className="landing-button">Iniciar Sesión</button>
            <button className="landing-button">Registrarse</button>
            <button className="landing-main-button">Página Principal</button>
          </div>
        </div>
        <div className="landing-right">
          <Quiz />
        </div>
      </div>
    </div>
  );
}

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { question: "¿Prefieres bebidas dulces o amargas?", options: ["Dulces", "Amargas"], points: [1, 2] },
    { question: "¿Te gustan las bebidas frías o calientes?", options: ["Frías", "Calientes"], points: [1, 2] },
    { question: "¿Prefieres cócteles o licores puros?", options: ["Cócteles", "Licores puros"], points: [1, 2] },
  ];

  const handleAnswer = (answer, point) => {
    setAnswers([...answers, point]);
    setStep(step + 1);
  };

  const renderQuestion = () => (
    <div className="quiz-question">
      <h3>{questions[step].question}</h3>
      <div className="quiz-options">
        {questions[step].options.map((option, index) => (
          <button key={option} onClick={() => handleAnswer(option, questions[step].points[index])}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  const renderResult = () => (
    <div className="quiz-result">
      <h3>Tu licor ideal es: {calculateResult()}</h3>
      <button className="quiz-main-button" onClick={() => window.location.href = '/'}>Ver Productos</button>
    </div>
  );

  const calculateResult = () => {
    const totalPoints = answers.reduce((acc, curr) => acc + curr, 0);

    if (totalPoints <= 3) return "Vino Tinto";
    if (totalPoints <= 5) return "Cerveza";
    return "Whisky";
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">¿Qué licores buscas?</div>
      {step < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
};

export default Landing_page;
