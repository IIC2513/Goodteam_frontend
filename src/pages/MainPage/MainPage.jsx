import ProductSlider from "../../components/Products/ProductSlider";
import AdSlider from "../../components/Ads/AdSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainPage.css';
import { CartProvider } from '../../components/header/CartContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useWebSocket from 'react-use-websocket';

function MainPage({ refreshCarrito }){
    const [productItems, setProductItems] = useState([]);
    const [message, setMessage] = useState('x');

    const {lastMessage} = useWebSocket(`${import.meta.env.VITE_BACKEND_WS_URL}/ws`, {
        onMessage: (event) => {
            const action = JSON.parse(event.data).action;
            const payload = JSON.parse(event.data).payload;

            if (action === 'add') {
                setMessage(`Nuevo producto añadido: ${payload.nombre}`);
                setProductItems((prevProductItems) => {
                    return [payload, ...prevProductItems];
                });
            } else if (action === 'delete') {
                setMessage(`Producto eliminado: ${payload.nombre}`);
                setProductItems((prevProductItems) => {
                    return prevProductItems.filter((product) => product.id !== payload.id);
                });
            } else if (action === 'update') {
                setMessage(`Producto actualizado: ${payload.nombre}`);
                setProductItems((prevProductItems) => {
                    return prevProductItems.map((product) => {
                        if (product.id === payload.id) {
                            return payload;
                        }
                        return product;
                    });
                });
            }
            console.log(productItems);
        }
    });

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos`)
            .then(response => {
                const data = response.data;
                setProductItems(data);
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
        });
    }, []);

  return (
        <CartProvider> {/* Envuelve tu aplicación con el proveedor del contexto del carrito */}
            <div className="ads">
                <AdSlider />
            </div>
            <div className="heading">
                <i className="fa fa-percent"></i>
                <h2>Ofertas Destacadas</h2>
            </div>
            <div className="product-slider">
                <ProductSlider productItems={productItems} refreshCarrito={refreshCarrito}/>
            </div>
            <div className="heading">
                <i className="fa fa-line-chart"></i>
                <h2>Productos más vendidos</h2>
            </div>
            <div className="product-slider">
                <ProductSlider productItems={productItems} refreshCarrito={refreshCarrito}/>
            </div>
            <div className="emptyspace"></div>
        </CartProvider>
    );
}

export default MainPage;