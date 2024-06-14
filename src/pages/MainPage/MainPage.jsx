import ProductsData from "../../components/Products/ProductsData";
import ProductSlider from "../../components/Products/ProductSlider";
import AdSlider from "../../components/Ads/AdSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainPage(){
    const [productItems, setProductItems] = useState([]);
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
    console.log(productItems);
  return (
        <>
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
        </>
    );
}
export default MainPage;