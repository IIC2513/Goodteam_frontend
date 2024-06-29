import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Search.css';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/categorias`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchCategories();
}, []);

const handleSearch = async () => {
    const category = categories.find(cat => cat.nombre.toLowerCase() === searchQuery.toLowerCase());

    if (category) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos/categorias/${category.id}`);
            const products = response.data;
            navigate(`/mainpage/${category.id}`, { state: { products, categoryName: category.nombre } });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    } else {
        alert('La categoría que estas buscando no existe');
        console.error('Category not found');
    }}

const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
};


    return (
        <div className="search-container">
            <i 
            className="fa fa-search fa-lg" 
            aria-hidden="true"
            onClick={handleSearch}
            style={{ cursor: 'pointer' }}></i>
          <input 
            type="text" 
            placeholder="Buscar productos por categoría..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      );
    };
    
    export default SearchComponent;