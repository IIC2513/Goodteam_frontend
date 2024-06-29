import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/Auth/AuthContext";

function AdminUsersPage() {
    const { token } = useContext(AuthContext);
    // const [msg, setMsg] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [userItems, setUserItems] = useState([]);

    const config = {
        mothod: 'get',
        url: `${import.meta.env.VITE_BACKEND_URL}/scope-example/protectedadmin`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const authConfig = {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            };
            axios(config).then((response) => {
                console.log("Enviaste un token bueno y estas logueado y eres admin!!!");
                console.log(response);
                setIsAdmin(true);
            }).catch((error) => {
                console.log("Hubo un error, no estas logueado o tu token expiró.");
                console.log(error);
                setIsAdmin(false);
            });

            if (isAdmin) {
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuarios`, authConfig)
                    .then(response => {
                        const data = response.data;
                        setUserItems(data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the user data!", error);
                    });
            }
        }
        
    }, [isAdmin]);

    const handleDeleteUser = (id) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${id}`, {
            headers: { 
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            setUserItems(userItems.filter(user => user.id !== id));
        }).catch((error) => {
            console.error("There was an error deleting the user!", error);
        });
    };

    return (
        <div>
            <h1>Usuarios</h1>
            {isAdmin ? (
                <div>
                    <div className="products-button-section">
                        <Link to = {`/user-form`} className="create-link">Crear Usuario</Link>
                        <Link to = {`/admin`} className="create-link">Volver</Link>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Es Admin</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userItems.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? 'Si' : 'No'}</td>
                                    <td>{user.direccion}</td>
                                    <td>
                                        <Link to={`/user-form/${user.id}`} className="edit-link">Editar</Link>
                                        <button onClick={() => handleDeleteUser(user.id)} className="delete-link">Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No tienes permisos para ver esta página.</p>
            )}
            {/* <h1>{msg}</h1> */}
        </div>
    );
}

export default AdminUsersPage;