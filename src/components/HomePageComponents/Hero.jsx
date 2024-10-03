
import heroImg from '../../assets/img/hero-foto-3.png';
import './Hero.css'; // Si decides usar estilos personalizados

export const Hero = () => {
  return (
    <section className="hero-section container-fluid bg-primary px-0 px-md-5 mb-5">
      <div className="row align-items-center px-3">
        <div className="col-lg-6 text-center text-lg-left">
          <h4 className="text-white mb-4 mt-5 mt-lg-0">Nuestro bebé pronto llegará</h4>
          <h1 className="display-3 font-weight-bold text-white">
            Gracias por acompañarnos en este momento de nuestras vidas
          </h1>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <img className="img-fluid mt-5" src={heroImg} alt="Bebé en camino" />
        </div>
      </div>
    </section>
  );
};

