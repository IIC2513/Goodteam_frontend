import React from 'react';
import ProductsData from "../../components/Products/ProductsData";
import ProductSlider from "../../components/Products/ProductSlider";
import AdSlider from "../../components/Ads/AdSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainPage.css';
import { CartProvider } from '../../components/header/CartContext';

function MainPage() {
    const { productItems } = ProductsData;

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
                <ProductSlider productItems={productItems} />
            </div>
            <div className="heading">
                <i className="fa fa-line-chart"></i>
                <h2>Productos más vendidos</h2>
            </div>
            <div className="product-slider">
                <ProductSlider productItems={productItems} />
            </div>
        </CartProvider>
    );
}

export default MainPage;