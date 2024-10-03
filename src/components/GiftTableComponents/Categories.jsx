

const categories = [
  {
    image: 'path-to-image-1.jpg',
    name: 'Pañales y cuidado del bebé',
    productsCount: 120
  },
  {
    image: 'path-to-image-2.jpg',
    name: 'Mobiliario y decoración',
    productsCount: 80
  },
  {
    image: 'path-to-image-3.jpg',
    name: 'Alimentación',
    productsCount: 60
  },
  {
    image: 'path-to-image-4.jpg',
    name: 'Juguetes y entretenimiento',
    productsCount: 150
  },
  {
    image: 'path-to-image-5.jpg',
    name: 'Seguridad',
    productsCount: 50
  },
  {
    image: 'path-to-image-6.jpg',
    name: 'Ropa y accesorios',
    productsCount: 100
  },
];

export const Categories = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center pb-2">
        <h1 className="mb-4">Categorías</h1>
      </div>
      <div className="container pb-3">
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-lg-4 col-md-6 pb-1" key={index}>
              <div className="category-card d-flex bg-light shadow-sm border-top rounded mb-4">
                <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                  <img className="img-fluid" src={category.image} alt={category.name} />
                </div>
                <div className="pl-4 d-flex flex-column justify-content-center">
                  <h4>{category.name}</h4>
                  <small className="text-body">{category.productsCount} Productos</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


