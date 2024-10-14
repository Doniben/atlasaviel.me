import { useState } from "react";
import { Image } from "antd";
//import "antd/dist/antd.css";
import galleryImages from "./galleryImages.json";

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Todas");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredImages = galleryImages.filter((image) =>
    activeFilter === "Todas" ? true : image.category === activeFilter
  );

  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Our Gallery</span>
          </p>
          <h1 className="mb-4">Memorias que nos acompañarán siempre</h1>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
            <li
                className={`btn btn-outline-primary m-1 ${
                  activeFilter === "Todas" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("Todas")}
              >
                Todas
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  activeFilter === "Mis papás" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("Mis papás")}
              >
                Mis papás
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  activeFilter === "Mis ecografías" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("Mis ecografías")}
              >
                Mis ecografías
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  activeFilter === "Embarazo de mami" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("Embarazo de mami")}
              >
                Embarazo de mami
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <Image.PreviewGroup>
            {filteredImages.map((image) => (
              <div
                className="col-lg-4 col-md-6 mb-4 portfolio-item"
                key={image.id}
              >
                <div className="position-relative overflow-hidden mb-2">
                  <Image className="img-fluid w-100" src={image.src} alt="" />
                </div>
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
};
