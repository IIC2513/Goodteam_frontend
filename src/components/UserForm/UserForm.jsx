import React, {useState} from 'react';

import axios from "axios";

function UserForm({ user }) {
    const token = localStorage.getItem("token");
    const [username, setUsername] = useState(user.nombre || "");
    const [email, setEmail] = useState(user.email || "");
    const [password, setPassword] = useState(user.password || "");
    const [address, setAddress] = useState(user.direccion || "");
    const [isAdmin, setIsAdmin] = useState(user.isAdmin || "false");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!username || !email || !password || !address) {
                setModalMessage("Por favor completa todos los campos obligatorios.");
                setModalOpen(true);
                return;
            }

            const requestData = {
                username,
                email,
                password,
                address,
                isAdmin
            };

            const response = user.id
                ? await axios.put(
                    `${import.meta.env.VITE_BACKEND_URL}/usuarios/${user.id}`,
                    requestData,
                    {
                        headers: {
                            "Authenticacion": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                )
                : await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/signup`,
                    requestData,
                    {
                        headers: {
                            "Authenticacion": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

            if (response.status === 200 || response.status === 201) {
                setModalMessage(
                    `¡Usuario ${user.id ? "actualizado" : "creado"} exitosamente!`
                );
                setModalOpen(true);
                setTimeout(() => {
                    window.location.href = "/admin-users"; 
                }, 2000);
            }
        } catch (error) {
            console.error("Error:", error.message);
            setModalMessage("Hubo un error al crear el usuario!");
            setModalOpen(true);
        }
    };

    const handleGoBack = () => {
        window.location.href = "/admin-users"; 
    }

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
                <label htmlFor="username">Nombre:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="direccion">Dirección:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="isAdmin">Es Admin:</label>
                <select
                    id="isAdmin"
                    value={isAdmin.toString()} 
                    onChange={(e) => setIsAdmin(e.target.value === "true")}
                >
                <option value="false">No</option>
                <option value="true">Sí</option>
                </select>
                <input type="submit" value="Volver" onClick={handleGoBack} />
                <input type="submit" value={user.id ? "Actualizar" : "Crear"} />
            </form>
        </div>
    );
}

export default UserForm;