import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/Auth/AuthContext";

function AdminCategoriesPage() {
    const { token } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [categoryItems, setCategoryItems] = useState([]);

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
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/categorias`, authConfig)
                    .then(response => {
                        const data = response.data;
                        setCategoryItems(data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the category data!", error);
                    });
            }
        }
    }, [isAdmin]);

    const handleDeleteCategory = (id) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/categorias/${id}`, {
            headers: { 
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            console.log("Categoria eliminada");
        }).catch((error) => {
            console.error("Error deleting category", error);
        });
    };

    return (
        <div>
            <h1>Categorías</h1>
            {isAdmin ? (
                <div>
                    <div className='products-button-section'>
                        <Link to = {`/category-form`} className="create-link">Crear Categoría</Link> 
                        <Link to = {`/admin`} className="create-link">Volver</Link>
                    </div>
                    <h2>eres admin</h2>
                </div>
            ) : (
                <p>No tienes permisos para ver esta página</p>
            )}
        </div>
    );
}

export default AdminCategoriesPage;