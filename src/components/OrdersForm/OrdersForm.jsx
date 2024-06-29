import React, {useState} from 'react';

import axios from "axios";

function OrderForm({ order }) {
    const [fechaOrden, setFecha] = useState(order.fechaOrden || "");
    const [costo, setCosto] = useState(order.costo || "");
    const [usuarioId, setUsuario] = useState(order.usuarioId || "");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        if (!fechaOrden || !costo || !usuarioId) {
          setModalMessage("Por favor completa todos los campos obligatorios.");
          setModalOpen(true);
          return;
        }
  
        if (isNaN(costo) || parseFloat(costo) <= 0) {
          setModalMessage("El costo debe ser un número positivo.");
          setModalOpen(true);
          return;
        }
  
        const requestData = {
          fechaOrden,
          costo,
          usuarioId,
        };
  
        const response = order.id
          ? await axios.put(
              `${import.meta.env.VITE_BACKEND_URL}/ordenes/${order.id}`,
              requestData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
          : await axios.post(
              `${import.meta.env.VITE_BACKEND_URL}/ordenes`,
              requestData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
  
        if (response.status === 200 || response.status === 201) {
          setModalMessage(
            `Orden ${order.id ? "actualizada" : "creada"} exitosamente!`
          );
          setModalOpen(true);
          setTimeout(() => {
            window.location.href = "/admin-orders"; // Redirige a la página de administrador
          }, 2000);
        }
      } catch (error) {
        console.error("Error:", error.message);
        setModalMessage("Ocurrió un error al procesar la solicitud.");
        setModalOpen(true);
      }
    };
  
    const handleGoBack = () => {
      window.location.href = "/admin-orders"; // Redirige a la página de administrador
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setModalMessage("");
    };
  
    return (
      <div className="form">
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>{modalMessage}</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fechaOrden">Fecha de la Orden:</label>
          <input
            type="text"
            id="fechaOrden"
            name="fechaOrden"
            value={fechaOrden}
            placeholder="Fecha de orden del producto (YYYY-MM-DD) (*)"
            onChange={(event) => setFecha(event.target.value)}
          />
  
          <label htmlFor="costo">Costo:</label>
          <input
            type="text"
            id="costo"
            name="costo"
            value={costo}
            placeholder="Costo de la orden (*)"
            onChange={(event) => setCosto(event.target.value)}
          />
  
          <label htmlFor="user_id">ID Usuario:</label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            value={usuarioId}
            placeholder="Aquí coloca el id del usuario (*)"
            onChange={(event) => setUsuario(event.target.value)}
          />
  
          <input type="submit" value="Volver" onClick={handleGoBack} />
          <input type="submit" value={order.id ? "Actualizar" : "Crear"} />
        </form>
      </div>
    );
}

export default OrderForm;