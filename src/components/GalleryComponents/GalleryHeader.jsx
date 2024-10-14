export const GalleryHeader = () => {
  return (
    <div className="container-fluid bg-primary mb-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "400px" }}
      >
        <h3 className="display-3 font-weight-bold text-white">Gallery</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0">
            <a className="text-white" href="/">
              Home
            </a>
          </p>
          <p className="m-0 px-2">/</p>
          <p className="m-0">Gallery</p>
        </div>
      </div>
    </div>
  );
};