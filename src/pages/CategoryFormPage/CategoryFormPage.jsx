import React, {useState, useEffect} from 'react';
import axios from "axios";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import "../ProductFormPage/ProductFormPage.css";
import { useParams } from "react-router-dom";

function CategoryFormPage() {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                if (id) {
                    // Si hay un ID en los parámetros, se trata de editar una categoría existente
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/categorias/${id}`);
                    setCategory(response.data);
                } else {
                    // Si no hay un ID en los parámetros, se está creando una nueva categoría
                    setCategory({nombre: ""});
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
                <CategoryForm category={category} />
            )}
        </div>
    );
}

export default CategoryFormPage;