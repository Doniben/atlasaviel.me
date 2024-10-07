/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Products.css'; 

export const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("price");

  useEffect(() => {
    console.log("Selected Category in Products:", selectedCategory); // Depuración: Ver la categoría seleccionada

    // Llamada al backend para obtener los productos
    fetch('https://2ylegiy3g3.execute-api.us-east-1.amazonaws.com/dev/allProducts')
      .then(response => response.json())
      .then(data => {
        if (data.Result === 'success') {
          console.log("Fetched Products:", data.count); // Depuración: Ver los productos obtenidos
          setProducts(data.count);
        } else {
          console.error('Failed to fetch products:', data.message);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Filtrar productos por la categoría seleccionada
  let filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  console.log("Filtered Products:", filteredProducts); // Depuración: Ver los productos filtrados por categoría

  // Ordenar productos según el criterio seleccionado
  filteredProducts = filteredProducts.sort((a, b) => {
    if (sortCriteria === "price") {
      return a.price - b.price;
    } else if (sortCriteria === "stock") {
      return b.stock - a.stock;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="container-fluid pt-5 pb-3 text-center">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-5 ">
        <span className="text-secondary pr-3">Regalos destacados</span>
      </h2>

      {/* Filtros */}
      <div className="d-flex justify-content-end mb-5">
        <select 
          className="custom-select filter-select"
          onChange={(e) => setSortCriteria(e.target.value)} 
          value={sortCriteria}
        >
          <option value="price">Ordenar por precio</option>
          <option value="stock">Ordenar por stock</option>
          <option value="name">Ordenar por nombre</option>
        </select>
      </div>

      {/* Renderizado de los productos */}
      <div className="row px-xl-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4 product-hover">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid product-img-fixed" src={product.imgSrc} alt={product.name} />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                  </div>
                </div>
                <div className="text-center py-4 product-details">
                  <a className="h6 text-decoration-none text-truncate" href="">{product.name}</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>${product.price.toFixed(2)}</h5>
                    <h6 className="text-muted ml-2"><del>${product.price.toFixed(2)}</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <small key={index} className={`fa ${index < product.rating ? 'fa-star text-primary' : 'far fa-star'} mr-1`}></small>
                    ))}
                    <small>(Disponibles: {product.stock})</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>
    </div>
  );
};



