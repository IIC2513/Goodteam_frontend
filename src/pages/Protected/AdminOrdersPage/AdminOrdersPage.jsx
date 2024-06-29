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
                    <h2>eres admin</h2>
                    {/* Reemplazar h2 por tabla */}
                </div>
                 
            ) : (
                <p>No tienes permisos para ver esta página</p>
            )}
        </div>
    );
}

export default AdminOrdersPage;