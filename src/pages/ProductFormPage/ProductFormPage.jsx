import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../../components/ProductForm/ProductForm";
import "./ProductFormPage.css";
import { useParams } from "react-router-dom";

function FormPage() {
  const { id } = useParams();
  const [producto, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("id", id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          // Si hay un ID en los parámetros, se trata de editar un producto existente
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos/${id}`);
          setProduct(response.data);
        } else {
          // Si no hay un ID en los parámetros, se está creando un nuevo producto
          setProduct({ nombre: "", stock: "", precio: "", imagen: "", categoriaId: ""});
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Indicamos que la carga ha finalizado
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="content">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductForm product={producto} />
      )}
    </div>
  );
}

export default FormPage;