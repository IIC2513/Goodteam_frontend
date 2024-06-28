import ProductSlider from "../../components/Products/ProductSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainPage.css';
import { CartProvider } from '../../components/header/CartContext';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MainPageCat({ refreshCarrito }){
    const location = useLocation();
    const {products, categoryName} = location.state || { products: [], categoryName: ''};
  return (
        <CartProvider> {/* Envuelve tu aplicación con el proveedor del contexto del carrito */}
            <div className="heading">
                <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
            </div>
            <div className="product-slider">
                <ProductSlider productItems={products} refreshCarrito={refreshCarrito}/>
            </div>
            <div className="emptyspace"></div>
        </CartProvider>
    );
}

export default MainPageCat;