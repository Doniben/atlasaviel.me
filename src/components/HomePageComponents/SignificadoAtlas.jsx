import escudo from '../../assets/img/Escudo-de-armas-JB.png';
import './SignificadoAtlas.css';

export const SignificadoAtlas = () => {
  return (
    <section className="significado-atlas-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-5 mb-lg-0"
              src={escudo}
              alt="Escudo de armas"
            />
          </div>
          <div className="col-lg-7">
            <p className="section-title pr-5">
              <span className="pr-2">¿Por qué Atlas Aviel?</span>
            </p>
            <h1 className="mb-4">Un nombre con fuerza, un corazón lleno de fe</h1>
            <p>
              <strong>Atlas</strong> no solo es el titán de la mitología griega que sostuvo el cielo sobre
              sus hombros, también es un símbolo de fortaleza y resistencia. Queremos que nuestro pequeño Atlas
              crezca con esa misma fuerza interior, capaz de afrontar cualquier desafío con sabiduría y valentía.
            </p>
            <p>
              <strong>Aviel</strong>, en hebreo, significa &quot;Dios es mi padre&quot;, un recordatorio de que siempre estará
              rodeado de amor divino. Este nombre refleja una conexión profunda con lo espiritual y nuestra esperanza
              de que Atlas crezca con un corazón lleno de fe, amabilidad, y compasión.
            </p>
            <a href="" className="btn btn-primary mt-2 py-2 px-4">Lee más</a>
          </div>
        </div>
      </div>
    </section>
  );
};

