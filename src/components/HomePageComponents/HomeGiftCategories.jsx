
import './HomeGiftCategories.css'; // Estilos personalizados

const categories = [
  {
    icon: "flaticon-050-fence",
    title: "Ropa y accesorios",
    description: "Bodies, pijamas, baberos, gorros, calcetines, zapatos para cada ocasión..."
  },
  {
    icon: "flaticon-022-drum",
    title: "Pañales y cuidado del bebé",
    description: "Pañales, cremas para el cambio, toallitas húmedas, talco, shampoo suave..."
  },
  {
    icon: "flaticon-030-crayons",
    title: "Mobiliario y decoración",
    description: "Cunas, sillas, muebles organizadores, alfombras, cuadros, lámparas de noche..."
  },
  {
    icon: "flaticon-025-sandwich",
    title: "Alimentación",
    description: "Biberones, platos, vasos antiderrames, cucharas, baberos, sillas de comer..."
  },
  {
    icon: "flaticon-025-sandwich",
    title: "Juguetes y entretenimiento",
    description: "Sonajeros, peluches, libros interactivos, juguetes de madera..."
  },
  {
    icon: "flaticon-047-backpack",
    title: "Seguridad",
    description: "Monitores de bebé, protectores de esquinas, barreras para escaleras, cámaras..."
  },
  {
    icon: "flaticon-017-toy-car",
    title: "Baño",
    description: "Tinas de baño, termómetros de agua, toallas con capucha, esponjas suaves, juguetes de baño..."
  },
  {
    icon: "flaticon-017-toy-car",
    title: "Transporte y paseo",
    description: "Coches, portabebés, sillas para auto, cobijas de paseo, mochilas ergonómicas..."
  },
  {
    icon: "flaticon-047-backpack",
    title: "Otros",
    description: "Libros, artículos personalizados, souvenirs, regalos temáticos, detalles únicos..."
  },
];

export const HomeGiftCategories = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center pb-2">
        <p className="section-title px-5">
          <span className="px-2">A Atlas le gustaría...</span>
        </p>
        <h1 className="mb-4">Escoge lo que más te gusta</h1>
      </div>
      <div className="container pb-3">
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-lg-4 col-md-6 pb-1" key={index}>
              <div className="category-card d-flex bg-light shadow-sm border-top rounded mb-4">
                <i className={`${category.icon} h1 font-weight-normal text-primary mb-3`}></i>
                <div className="pl-4">
                  <h4>{category.title}</h4>
                  <p className="m-0">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

