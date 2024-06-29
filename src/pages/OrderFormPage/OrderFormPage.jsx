import React, {useState, useEffect} from 'react';
import axios from "axios";
import OrderForm from "../../components/OrdersForm/OrdersForm";
import "../ProductFormPage/ProductFormPage.css";
import { useParams } from "react-router-dom";

function OrderFormPage() {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                if (id) {
                    // Si hay un ID en los parámetros, se trata de editar una orden existente
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ordenes/${id}`);
                    setCategory(response.data);
                } else {
                    // Si no hay un ID en los parámetros, se está creando una nueva orden
                    setCategory({fechaOrden: "", costo: "", usuarioId: ""});
                }
            } catch (error) {
                console.error("Error fetching category:", error);
            } finally {
                setLoading(false); // Indicamos que la carga ha finalizado
            }
        };

        fetchCategory();
    }, [id]);

    return (
        <div className="content">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <OrderForm order={category} />
            )}
        </div>
    );
}

export default OrderFormPage;