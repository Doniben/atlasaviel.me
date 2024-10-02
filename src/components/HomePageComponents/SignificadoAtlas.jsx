import escudo from '../../assets/img/Escudo-de-armas-JB.png'

export const SignificadoAtlas = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-5 mb-lg-0"
              src={escudo}
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <p className="section-title pr-5">
              <span className="pr-2">¿Por qué Atlas Aviel?</span>
            </p>
            <h1 className="mb-4">Un gigante, una fe profunda</h1>
            <p>
              Atlas es el Titán griego que defendió con fuerza y sabiduría el antiguo régimen
              de los dioses. Durante la titanomaquia los titanes pierden la batalla, sucubiendo al
              nuevo órden del Olimpo. Es tan fuerte Atlas que su único castigo medianamente significativo
              resulta ser cargar el cielo sobre sus hombros. 
            </p>
            <p>
              En hebreo aviel significa -Dios es mi padre-, lo que asocia a nuestro bebé una fuerte conexión con lo
              divino y una fe propunda
            </p>

            <a href="" className="btn btn-primary mt-2 py-2 px-4">Lee más</a>
          </div>
        </div>
      </div>
    </div>
  )
}
