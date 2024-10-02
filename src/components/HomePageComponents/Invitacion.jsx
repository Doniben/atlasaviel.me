import invitacion from '../../assets/img/invitacion.png'

export const Invitacion = () => {
  return (
    <div className="container-fluid py-5">
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
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Tu nombre"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Tu correo"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select border-0 px-4"
                      style={{height: '47px'}}
                    >
                      <option selected>Selecciona una categoría de regalo</option>
                      <option value="1">Pañales y cuidado del bebé</option>
                      <option value="2">Mobiliario y decoración</option>
                      <option value="3">Alimentación</option>
                      <option value="4">Juguetes y entretenimiento</option>
                      <option value="5">Seguridad</option>
                      <option value="6">Ropa y accesorios</option>
                      <option value="7">Baño</option>
                      <option value="8">Transporte y paseo</option>
                      <option value="9">Otros</option>
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
          <div className="col-lg-5 mb-lg-0">
            <img className='img-fluid rounded mb-5 mb-lg-0' src={invitacion} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
