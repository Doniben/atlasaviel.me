/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export const Categories = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  console.log("Categories: ", categories)
  useEffect(() => {
    // Llamar al endpoint para obtener las categorías con el número de productos
    fetch('https://2ylegiy3g3.execute-api.us-east-1.amazonaws.com/dev/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.Result === 'success') {
          setCategories(data.value);
        } else {
          console.error('Failed to fetch categories:', data.message);
        }
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="container-fluid pt-5">
      <div className="text-center pb-2">
        <h1 className="mb-4">Categorías</h1>
      </div>
      <div className="container pb-3">
        <div className="row">
          {categories.map((category, index) => (
            <div
              className="col-lg-4 col-md-6 pb-1"
              key={index}
              onClick={() => onCategorySelect(category.name)}
              style={{ cursor: 'pointer' }} 
            >
              <div className="category-card d-flex bg-light shadow-sm border-top rounded mb-4">
                <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                  <img className="img-fluid category-img" src={category.img} alt={category.name} />
                </div>
                <div className="pl-4 d-flex flex-column justify-content-center">
                  <h4>{category.name}</h4>
                  <small className="text-body">{category.count} Productos</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};






