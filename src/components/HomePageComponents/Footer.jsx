export const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <a
            href="#"
            className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
            style={{ fontSize: '40px', lineHeight: '40px' }}
          >
            <i className="flaticon-043-teddy-bear" aria-label="Teddy Bear Icon"></i>
            <span className="text-white">Atlas Aviel</span>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Contáctanos</h3>
          <div className="d-flex mb-3">
            <h4 className="fa fa-envelope text-primary" aria-label="Correo"></h4>
            <div className="pl-3">
              <h5 className="text-white">Correo</h5>
              <p>tao_toons@yahoo.es</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-phone-alt text-primary" aria-label="Teléfono"></h4>
            <div className="pl-3">
              <h5 className="text-white">Teléfono</h5>
              <p>+52 722 6165464</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Links rápidos</h3>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2"></i>Mi familia
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2"></i>Mis papás
            </a>
            <a className="text-white" href="#">
              <i className="fa fa-angle-right mr-2"></i>Baby Shower
            </a>
          </div>
        </div>
      </div>
      <div
        className="container-fluid pt-5"
        style={{ borderTop: '1px solid rgba(23, 162, 184, 0.2)' }}
      >
        <p className="m-0 text-center text-white">
          &copy; <a className="text-primary font-weight-bold" href="https://atlasaviel.me">https://atlasaviel.me</a>.
          Todos los derechos reservados.
          <br />Developed by
          <a className="text-primary font-weight-bold" href="https://doniben.com"> Doniben Jimenez</a>
          <br />2024
        </p>
      </div>
    </div>
  );
};

