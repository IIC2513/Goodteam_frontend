import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Auth/AuthContext";
import './AdminCheck.css';

function AdminCheck() {
    const { token } = useContext(AuthContext);
    const [setMsg] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [productItems, setProductItems] = useState([]);
    // const [newProduct, setNewProduct] = useState({ nombre: '', stock: 0, precio: 0.0, imagen: '', categoriaId: 0 });

    const config = {
        method: 'get',
        url: `${import.meta.env.VITE_BACKEND_URL}/scope-example/protectedadmin`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        axios(config).then(() => {
            console.log("Enviaste un token bueno y estas logueado y eres admin!!!");
            setMsg("Enviaste un token bueno y estas logueado y eres admin!!!");
            setIsAdmin(true);
        }).catch((error) => {
            console.log("Hubo un error, no estas logueado o tu token expiró.");
            setMsg("Hubo un error, no estas logueado o tu token expiró o no eres admin.");
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

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewProduct(prevState => ({ ...prevState, [name]: value }));
    // };

    // const handleCreateProduct = () => {
    //     axios.post(`${import.meta.env.VITE_BACKEND_URL}/productos`, newProduct, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then(response => {
    //         setProductItems([...productItems, response.data]);
    //         setNewProduct({ nombre: '', stock: 0, precio: 0.0, imagen: '', categoriaId: 0 });
    //     }).catch(error => {
    //         console.error("There was an error creating the product!", error);
    //     });
    // };

    const handleDeleteProduct = (id) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/productos/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            setProductItems(productItems.filter(product => product.id !== id));
        }).catch(error => {
            console.error("There was an error deleting the product!", error);
        });
    };

    // const handleUpdateProduct = (id, updatedProduct) => {
    //     axios.put(`${import.meta.env.VITE_BACKEND_URL}/productos/${id}`, updatedProduct, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then(response => {
    //         setProductItems(productItems.map(product => (product.id === id ? response.data : product)));
    //     }).catch(error => {
    //         console.error("There was an error updating the product!", error);
    //     });
    // };

    return (
        <div>
            <h1>Productos</h1>
            {isAdmin ? (
                <div>
                <Link to = {`/product-form`} className="create-link">Crear Producto</Link>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Imagen</th>
                                <th>ID Categoria</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productItems.sort((a, b) => a.id - b.id).map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.nombre}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.precio}</td>
                                    <td><img src={product.imagen} alt={product.nombre} width="50" /></td>
                                    <td>{product.categoriaId}</td>
                                    <td>
                                        <Link to={`/product-form/${product.id}`} className="edit-link">Editar</Link>
                                        <button onClick={() => handleDeleteProduct(product.id)} className="delete-link">Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <h1>{msg}</h1> */}
                </div>
            ) : (
                <p>No tienes permisos para ver esta sección.</p>
            )}
        </div>
    );
}

export default AdminCheck;
