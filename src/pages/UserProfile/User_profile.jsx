import './User_profile.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: ''
    });
    const userId = 1;

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuarios/id`)
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
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className='user-content'>
            <h1>User Information</h1>
                <div className='user-info'>
                    <p><strong>Nombre:</strong> {user.nombre}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Dirección:</strong> {user.direccion}</p>
                    <p><strong>Admin:</strong> {user.isAdmin ? 'Yes' : 'No'}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
        </div>
    );

}

export default Profile;