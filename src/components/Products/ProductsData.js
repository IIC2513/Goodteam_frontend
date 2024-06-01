import corona from "../../assets/ProductsImages/corona.jpg";
import pisco from "../../assets/ProductsImages/pisco.png";
import vino from "../../assets/ProductsImages/vino.png";
import aperol from "../../assets/ProductsImages/aperol.jpg";
import fernet from "../../assets/ProductsImages/Fernet.png";
import gin from "../../assets/ProductsImages/Gin.jpg";

const ProductsData = {
    productItems: [
        {
          id: 1,
          discount: 50,
          img: corona,
          name: "Cerveza Corona Extra 330cc",
          price: "1.290",
        },
        {
          id: 2,
          discount: 40,
          img: pisco,
          name: "Pisco Alto del Carmen 35° 1L",
          price: "5.690",
        },
        {
          id: 3,
          discount: 40,
          img: vino,
          name: "Vino Gato Negro 700cc",
          price: "1.990",
        },
        {
          id: 4,
          discount: 40,
          img: aperol,
          name: "Aperol 750cc",
          price: "9.890",
        },
        {
          id: 5,
          discount: 50,
          img: fernet,
          name: "Fernet Branca 750cc",
          price: "10.290",
        },
        {
          id: 6,
          discount: 50,
          img: gin,
          name: "Gin Bombay Sapphire 750cc",
          price: "12.490",
        },
      ],
    };
export default ProductsData;