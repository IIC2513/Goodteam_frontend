import ProductsData from "../../components/Products/ProductsData";
import ProductSlider from "../../components/Products/ProductSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainPage.css';

function MainPage(){
    const { productItems } = ProductsData;
    console.log(productItems);
  return (
    <>
    <div>
      <h1>Main Page</h1>
    </div>
    <div className="heading">
        <i className="fa fa-bolt"></i>
        <h2>Ofertas Destacadas</h2>
    </div>
    <ProductSlider productItems={productItems}/>
    <div className="heading">
        <i className="fa fa-line-chart"></i>
        <h2>Productos más vendidos</h2>
    </div>
    <ProductSlider productItems={productItems}/>

    </>
  );
}
export default MainPage;