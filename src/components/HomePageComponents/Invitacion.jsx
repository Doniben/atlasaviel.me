import { useContext, useState } from 'react';
import invitacion from '../../assets/img/bebfesto.jpeg';
import { GuestContext } from '../../context/GuestContext';
import { useNavigate } from 'react-router-dom'; // Usa el hook `useNavigate`

export const Invitacion = () => {
  const { setGuestData } = useContext(GuestContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    giftCategory: '',
  });

  // Instancia el hook `useNavigate`
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Actualiza el contexto con los datos del invitado
    setGuestData({
      name: formData.name,
      email: formData.email,
    });

    // Redirige usando el hook `navigate`
    navigate(`/babyshower?category=${encodeURIComponent(formData.giftCategory)}`);
  };

  return (
    <div id="invitacion" className="container-fluid py-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">BABYSHOWER</span>
          </p>
          <h1 className="mb-4">Te esperamos!</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="card border-0 mb-5">
              <div className="card-header bg-secondary text-center p-4">
                <h1 className="text-white m-0">Confirma tu asistencia</h1>
              </div>
              <div className="card-body rounded-bottom bg-primary p-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Tu nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Tu correo"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select border-0 px-4"
                      style={{ height: '47px' }}
                      name="giftCategory"
                      value={formData.giftCategory}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona una categoría de regalo</option>
                      <option value="Pañales y cuidado del bebé">Pañales y cuidado del bebé</option>
                      <option value="Mobiliario y decoración">Mobiliario y decoración</option>
                      <option value="Alimentación">Alimentación</option>
                      <option value="Juguetes y entretenimiento">Juguetes y entretenimiento</option>
                      <option value="Seguridad">Seguridad</option>
                      <option value="Ropa y accesorios">Ropa y accesorios</option>
                      <option value="Baño">Baño</option>
                      <option value="Transporte y paseo">Transporte y paseo</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>
                  <div>
                    <button
                      className="btn btn-secondary btn-block border-0 py-3"
                      type="submit"
                    >
                      Asistiré
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid rounded mb-5 mb-lg-0" src={invitacion} alt="Invitación Baby Shower" />
          </div>
        </div>
      </div>
    </div>
  );
};

