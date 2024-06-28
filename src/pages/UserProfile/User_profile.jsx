import './User_profile.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../components/Auth/AuthContext';

function Profile() {
    const [user, setUser] = useState({
        nombre: 'Nombre Predeterminado',
        email: 'email@predeterminado.com',
        direccion: 'Dirección Predeterminada',
        isAdmin: false,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: ''
    });
    const { user_id }= React.useContext(AuthContext);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${user_id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                const data = response.data;
                setUser(data);
                setFormData({
                    nombre: data.nombre,
                    direccion: data.direccion,
                });
            })
            .catch(error => {
                console.error("There was an error fetching the user data!", error);
        });
    }, [user_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para enviar el formulario y actualizar los datos del usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${user_id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const updatedUser = response.data;
            setUser(updatedUser);
            setFormData({
                nombre: updatedUser.nombre,
                direccion: updatedUser.direccion
            });
            setIsEditing(false); // Cambiar el estado para salir del modo edición
        } catch (error) {
            console.error("Hubo un error al actualizar los datos del usuario:", error);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className='user-content'>
            <h1>User Information</h1>
                <div className='user-info'>
                    <p><strong>Nombre:</strong> {user.nombre}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Dirección:</strong> {user.direccion}</p>
                    {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nombre:
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </label>
                        <label>
                            Dirección:
                            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
                        </label>
                        <button type="submit">Guardar Cambios</button>
                    </form>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                )}
                </div>
        </div>
    );

}

export default Profile;