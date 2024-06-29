import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "../../components/UserForm/UserForm";
import "../ProductFormPage/ProductFormPage.css";
import { useParams } from "react-router-dom";

function UserFormPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (id) {
                    // Si hay un ID en los parámetros, se trata de editar un usuario existente
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${id}`);
                    setUser(response.data);
                } else {
                    // Si no hay un ID en los parámetros, se está creando un nuevo usuario
                    setUser({nombre: "", apellido: "", email: "", password: "", isAdmin: ""});
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false); // Indicamos que la carga ha finalizado
            }
        };

        fetchUser();
    }, [id]);

    return (
        <div className="content">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <UserForm user={user} />
            )}
        </div>
    );
}

export default UserFormPage;