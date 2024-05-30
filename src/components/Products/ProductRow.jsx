import React from "react";
import ProductSlider from "./ProductSlider";
import './ProductSlider.css';

const ProductRow = ({ productItems}) => {
  return (
    <>
      <section className="flash background">
        <div className="flashdeal container">
          <div className="heading">
            <i className="fa fa-bolt"></i>
            <h2>Productos</h2>
          </div>
          <ProductSlider productItems={productItems}/>
        </div>
      </section>
    </>
  );
};

export default ProductRow;