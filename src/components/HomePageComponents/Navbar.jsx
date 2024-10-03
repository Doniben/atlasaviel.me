import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid bg-light position-relative shadow">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link
          to="/"
          className="navbar-brand font-weight-bold text-secondary"
          style={{ fontSize: '50px' }}
        >
          <i className="flaticon-043-teddy-bear"></i>
          <span className="text-primary">Atlas Aviel</span>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${isCollapsed ? '' : 'show'}`}
        >
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to="/about" className="nav-item nav-link">Significado</Link>
            <Link to="/gallery" className="nav-item nav-link">Galería</Link>
            <Link to="/babyshower" className="nav-item nav-link">Babyshower</Link>
            <Link to="/contact" className="nav-item nav-link">Contacto</Link>
          </div>
          <Link to="/rsvp" className="btn btn-primary px-4">Confirmar asistencia</Link>
        </div>
      </nav>
    </div>
  );
};

