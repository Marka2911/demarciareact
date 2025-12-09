import img from "../img/org1.jpg";

function Comentaris() {
  return (
    <div className="comentaris-wrapper">
      <div className="left-side-container">
        <div className="img-container">
          <img src={img} alt="img" className="img-container-img" />
        </div>
      </div>
      <div className="right-side-container">
        <div className="name-container">Name</div>
        <div className="description-container">Description</div>
        <div className="img-container">
          <img src={img} alt="img" className="img-container-img" />
        </div>
      </div>
    </div>
  );
}

export default Comentaris;
