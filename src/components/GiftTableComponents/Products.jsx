
import './Products.css'; // Asegúrate de crear este archivo CSS para los estilos

export const Products = () => {
  const products = [
    { id: 1, name: "Product Name 1", price: 123.00, imgSrc: "img/product-1.jpg", rating: 5 },
    { id: 2, name: "Product Name 2", price: 123.00, imgSrc: "img/product-2.jpg", rating: 4.5 },
    { id: 3, name: "Product Name 3", price: 123.00, imgSrc: "img/product-3.jpg", rating: 4 },
    { id: 4, name: "Product Name 4", price: 123.00, imgSrc: "img/product-4.jpg", rating: 3 },
    { id: 5, name: "Product Name 5", price: 123.00, imgSrc: "img/product-5.jpg", rating: 5 },
    { id: 6, name: "Product Name 6", price: 123.00, imgSrc: "img/product-6.jpg", rating: 4.5 },
    { id: 7, name: "Product Name 7", price: 123.00, imgSrc: "img/product-7.jpg", rating: 4 },
    { id: 8, name: "Product Name 8", price: 123.00, imgSrc: "img/product-8.jpg", rating: 3 },
  ];

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {products.map(product => (
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
        ))}
      </div>
    </div>
  );
}

