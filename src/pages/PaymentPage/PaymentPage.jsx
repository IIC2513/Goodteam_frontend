import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCardClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log('Form submitted');
  };

  return (
    <div className="payment-container">
      <h1>Pagar</h1>
      <div className="order-summary">
        <h2>Resumen del pedido</h2>
        <p>1 producto: $1.290</p>
        <p>Entrega: $2.210</p>
        <p>Total: <strong>$3.500</strong></p>
      </div>
      <div className="payment-methods">
        <h2>Selecciona una de las formas de pago aceptadas:</h2>
        <div className="card-icons">
          <img src="https://storage.googleapis.com/liquidos-public/logo-mercadopago.png" onClick={handleCardClick} />
          <img src="https://chilebets.com/wp-content/uploads/2023/05/webpay-logo.webp" onClick={handleCardClick} />
          <img src="https://storage.googleapis.com/liquidos-public/logo-chek.png" onClick={handleCardClick} />
          <img src="https://storage.googleapis.com/liquidos-public/Logo%20RedPay-V.png" onClick={handleCardClick} />
        </div>
      </div>
      {showForm && (
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Número de Tarjeta</label>
            <input type="text" id="cardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Fecha de Expiración</label>
            <input type="text" id="expiryDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre en la Tarjeta</label>
            <input type="text" id="name" required />
          </div>
          <button type="submit" className="payment-button">Realizar Pago</button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;


