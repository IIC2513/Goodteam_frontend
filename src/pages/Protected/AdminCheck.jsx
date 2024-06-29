import React, { useState, useEffect, useContext } from "react";
import { NavLink} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../components/Auth/AuthContext";
import './AdminCheck.css';

function AdminCheck() {
    const { token } = useContext(AuthContext);
    // const [msg, setMsg] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [productItems, setProductItems] = useState([]);
    // const [newProduct, setNewProduct] = useState({ nombre: '', stock: 0, precio: 0.0, imagen: '', categoriaId: 0 });

    console.log(productItems);
    
    const config = {
        method: 'get',
        url: `${import.meta.env.VITE_BACKEND_URL}/scope-example/protectedadmin`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        axios(config).then((response) => {
            console.log("Enviaste un token bueno y estas logueado y eres admin!!!");
            console.log(response);
            // setMsg("Enviaste un token bueno y estas logueado y eres admin!!!");
            setIsAdmin(true);
        }).catch((error) => {
            console.log("Hubo un error, no estas logueado o tu token expiró.");
            // setMsg("Hubo un error, no estas logueado o tu token expiró o no eres admin.");
            console.log(error);
            setIsAdmin(false);
        });
    }, []);

    useEffect(() => {
        if (isAdmin) {
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos`)
                .then(response => {
                    const data = response.data;
                    setProductItems(data);
                })
                .catch(error => {
                    console.error("There was an error fetching the product data!", error);
                });
        }
    }, [isAdmin]);


    return (
        <div>
            {isAdmin ? (
                <div className="admin-nav-column">
                    <NavLink to="/admin-products" className="adminpage-link">Productos</NavLink>
                    <NavLink to="/admin-users" className="adminpage-link">Usuarios</NavLink>
                    <NavLink to="/admin-orders" className="adminpage-link">Ordenes</NavLink>
                    <NavLink to="/admin-categories" className="adminpage-link">Categorias</NavLink>
                </div>
            ) : (
                <p>No tienes permisos para ver esta sección.</p>
            )}
        </div>
    );
}

export default AdminCheck;
