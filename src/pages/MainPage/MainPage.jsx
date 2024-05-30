import ProductRow from "../../components/Products/ProductRow";
import ProductsData from "../../components/Products/ProductsData";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainPage(){
    const { productItems } = ProductsData;
    console.log(productItems);
  return (
    <>
    <div>
      <h1>Main Page</h1>
    </div>
    <ProductRow productItems={productItems} />
    <ProductRow productItems={productItems} />
    </>
  );
}
export default MainPage;