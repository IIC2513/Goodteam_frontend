import React, { useState } from 'react';
import axios from "axios";

function CategoryForm({ category }) {
    const token = localStorage.getItem("token");
    const [nombre, setNombre] = useState(category.nombre || "");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!nombre) {
                setModalMessage("Por favor ingresa el nombre de la categoría.");
                setModalOpen(true);
                return;
            }

            const requestData = {
                nombre
            };

            const response = category.id
                ? await axios.put(
                    `${import.meta.env.VITE_BACKEND_URL}/categorias/${category.id}`,
                    requestData,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                )
                : await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/categorias`,
                    requestData,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

            if (response.status === 200 || response.status === 201) {
                setModalMessage(
                    `¡Categoría ${category.id ? "actualizada" : "creada"} exitosamente!`
                );
                setModalOpen(true);
                setTimeout(() => {
                    window.location.href = "/admin-categories";
                }, 2000);
            }
        } catch (error) {
            console.error("Error:", error.message);
            setModalMessage("Hubo un error al crear la categoría.");
            setModalOpen(true);
        }
    };

    const handleGoBack = () => {
        window.location.href = "/admin-categories";
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
                <label htmlFor="nombre">Nombre de la Categoría:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input type="submit" value="Volver" onClick={handleGoBack} />
                <input type="submit" value={category.id ? "Actualizar" : "Crear"} />
            </form>
        </div>
    );
}

export default CategoryForm;
