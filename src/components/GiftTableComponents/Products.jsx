import { useEffect, useState } from 'react';
import './Products.css'; // Asegúrate de crear este archivo CSS para los estilos

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada al backend para obtener los productos
    fetch('https://2ylegiy3g3.execute-api.us-east-1.amazonaws.com/dev/allProducts')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Agrega esta línea para ver la estructura de la respuesta
        if (data.Result === 'success') {
          setProducts(data.count); // Verifica que 'value' contenga un array
        } else {
          console.error('Failed to fetch products:', data.message);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4 product-hover">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={product.imgSrc} alt={product.name} />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">{product.name}</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>${product.price.toFixed(2)}</h5>
                    <h6 className="text-muted ml-2"><del>${product.price.toFixed(2)}</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <small key={index} className={`fa ${index < product.rating ? 'fa-star text-primary' : 'far fa-star'} mr-1`}></small>
                    ))}
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p> // Mensaje si no hay productos
        )}
      </div>
    </div>
  );
};



