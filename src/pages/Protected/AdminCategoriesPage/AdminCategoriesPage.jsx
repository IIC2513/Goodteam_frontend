import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/Auth/AuthContext";

function AdminCategoriesPage() {
    const { token } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [categoryItems, setCategoryItems] = useState([]);
    const [products, setProducts] = useState([]);

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

                axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos`, authConfig)
                    .then(response => {
                        const data = response.data;
                        setProducts(data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the product data!", error);
                    });
            }
        }
    }, [isAdmin]);

    const handleDeleteCategory = async (categoryId) => {
        const authConfig = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        // Obtener productos de la categoría
        const categoryProducts = products.filter(product => product.categoriaId === categoryId);

        // Eliminar cada producto
        for (let product of categoryProducts) {
            try {
                await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/productos/${product.id}`, authConfig);
                console.log(`Producto con id ${product.id} eliminado`);
            } catch (error) {
                console.error(`Error eliminando producto con id ${product.id}`, error);
            }
        }

        // Eliminar la categoría
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/categorias/${categoryId}`, authConfig);
            console.log("Categoria eliminada");
        } catch (error) {
            console.error("Error deleting category", error);
        }

        // Actualizar estado local
        setCategoryItems(prevItems => prevItems.filter(category => category.id !== categoryId));
        setProducts(prevProducts => prevProducts.filter(product => product.categoriaId !== categoryId));
    };

    const getProductCount = (id) => {
        return products.filter(product => product.categoriaId === id).length;
    }

    return (
        <div>
            <h1>Categorías</h1>
            {isAdmin ? (
                <div>
                    <div className='products-button-section'>
                        <Link to = {`/category-form`} className="create-link">Crear Categoría</Link> 
                        <Link to = {`/admin`} className="create-link">Volver</Link>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Cantidad de Productos</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryItems.sort((a, b) => a.id - b.id).map((category) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.nombre}</td>
                                    <td>{getProductCount(category.id)}</td>
                                    <td>
                                        <Link to={`/category-form/${category.id}`} className="edit-link">Editar</Link>
                                        <button onClick={() => handleDeleteCategory(category.id)} className="delete-link">Borrar</button>
                                        {/* Boton para crear producto para esta categoría */}
                                        <Link to={`/product-form`} className="create-link">Crear Producto</Link>
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

export default AdminCategoriesPage;