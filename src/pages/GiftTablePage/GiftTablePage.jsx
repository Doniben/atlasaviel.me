import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Categories, Footer, Navbar, Products } from "../../components";

export const GiftTablePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation(); 
  const productSectionRef = useRef(null);

  useEffect(() => {
    // Extrae la categoría de los parámetros de la URL
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    console.log("URL Category (raw):", category);

    if (category) {
      const decodedCategory = decodeURIComponent(category);
      console.log("Decoded Category:", decodedCategory); 
      setSelectedCategory(decodedCategory);
    }
  }, [location.search]);

  // Realiza el scroll cuando la categoría cambia, ya sea por selección manual o por URL
  useEffect(() => {
    if (selectedCategory && productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar />
      <Categories onCategorySelect={handleCategorySelect} />
      
      {/* Título dinámico y referencia a la sección de productos */}
      <div className="text-center mt-5 pt-3" ref={productSectionRef}>
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-5 text-center">
          <span className="text-secondary pr-3">
            {selectedCategory ? `Regalos para ${selectedCategory}` : "Regalos destacados"}
          </span>
        </h2>
      </div>

      <Products selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};




