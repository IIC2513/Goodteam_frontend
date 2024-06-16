import React, { useState } from "react";

import axios from "axios";

function ProductForm({ product }) {
  const [nombre, setNombre] = useState(product.nombre || "");
  const [stock, setStock] = useState(product.stock || "");
  const [precio, setPrecio] = useState(product.precio || "");
  const [categoriaId, setCategory] = useState(product.categoriaId|| "");
  const [imagen, setImagen] = useState(product.imagen || "");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!nombre || !stock || !precio || !categoriaId || !imagen) {
        setModalMessage("Por favor completa todos los campos obligatorios.");
        setModalOpen(true);
        return;
      }

      if (isNaN(precio) || parseFloat(precio) <= 0) {
        setModalMessage("El precio debe ser un número positivo.");
        setModalOpen(true);
        return;
      }

      const requestData = {
        nombre,
        stock,
        precio,
        categoriaId,
        imagen,
      };

      const response = product.id
        ? await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/productos/${product.id}`,
            requestData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
        : await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/productos`,
            requestData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

      if (response.status === 200 || response.status === 201) {
        setModalMessage(
          `¡Producto ${product.id ? "actualizado" : "creado"} exitosamente!`
        );
        setModalOpen(true);
        setTimeout(() => {
          window.location.href = "/admin"; // Redirige a la página de administrador
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("Ocurrió un error al procesar la solicitud.");
      setModalOpen(true);
    }
  };

  const handleGoBack = () => {
    window.location.href = "/admin"; // Redirige a la página de administrador
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalMessage("");
  };

  return (
    <div className="form">
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del producto:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          placeholder="Nombre del producto (*)"
          onChange={(event) => setNombre(event.target.value)}
        />

        <label htmlFor="stock">Stock:</label>
        <input
          type="text"
          id="stock"
          name="stock"
          value={stock}
          placeholder="Cantidad de productos en stock (*)"
          onChange={(event) => setStock(event.target.value)}
        />

        <label htmlFor="precio">Precio:</label>
        <input
          type="text"
          id="precio"
          name="precio"
          value={precio}
          placeholder="Precio del producto (*)"
          onChange={(event) => setPrecio(event.target.value)}
        />

        <label htmlFor="categoria">Categoría:</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          value={categoriaId}
          placeholder="ID de la categoría (*)"
          onChange={(event) => setCategory(event.target.value)}
        />

        <label htmlFor="imagen">Imagen:</label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          value={imagen}
          placeholder="Pega la URL de la imagen del producto (*)"
          onChange={(event) => setImagen(event.target.value)}
        />

        <input type="submit" value="Volver" onClick={handleGoBack} />
        <input type="submit" value={product.id ? "Actualizar" : "Crear"} />
      </form>
    </div>
  );
}

export default ProductForm;

