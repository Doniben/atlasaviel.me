import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Categories, Footer, Navbar, Products } from "../../components";

export const GiftTablePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation(); // Hook para acceder a la ubicación actual

  useEffect(() => {
    // Extrae la categoría de los parámetros de la URL
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    console.log("URL Category (raw):", category); // Depuración: Ver la categoría sin decodificar

    if (category) {
      const decodedCategory = decodeURIComponent(category);
      console.log("Decoded Category:", decodedCategory); // Depuración: Ver la categoría decodificada
      setSelectedCategory(decodedCategory); // Decodifica y establece la categoría seleccionada
    }
  }, [location.search]); // Solo se ejecuta cuando cambia la URL

  return (
    <div>
      <Navbar />
      <Categories onCategorySelect={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};



