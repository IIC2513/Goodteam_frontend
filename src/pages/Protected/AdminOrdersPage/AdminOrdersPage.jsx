import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/Auth/AuthContext";

function AdminOrdersPage() {
    const { token } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [orderItems, setOrderItems] = useState([]);

    const config = {
        method: 'get',
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
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/ordenes`, authConfig)
                    .then(response => {
                        const data = response.data;
                        setOrderItems(data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the order data!", error);
                    });
            }
        }
    }, [isAdmin]);

    const handleDeleteOrder = (id) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/ordenes/${id}`, {
            headers: { 
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            setOrderItems(orderItems.filter(order => order.id !== id));
            console.log("Orden eliminada");
        }).catch((error) => {
            console.error("Error deleting order", error);
        });
    };

    return (
        <div>
            <h1>Ordenes</h1>
            {isAdmin ? (
                <div>
                    <div className="products-button-section">
                        <Link to = {`/orders-form`} className="create-link">Crear Orden</Link>
                        <Link to = {`/admin`} className="create-link">Volver</Link>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Costo</th>
                                <th>ID Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.sort((a, b) => a.id - b.id).map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.fechaOrden}</td>
                                    <td>{order.costo}</td>
                                    <td>{order.usuarioId}</td>
                                    <td>
                                        <Link to={`/orders-form/${order.id}`} className="edit-link">Editar</Link>
                                        <button onClick={() => handleDeleteOrder(order.id)} className="delete-link">Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 
            ) : (
                <p>No tienes permisos para ver esta página</p>
            )}
        </div>
    );
}

export default AdminOrdersPage;