import ProductsData from "../../components/Products/ProductsData";
import ProductSlider from "../../components/Products/ProductSlider";
import AdSlider from "../../components/Ads/AdSlider";
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