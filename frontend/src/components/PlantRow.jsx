import { Link } from "react-router-dom";

const PlantRow = ({ plant }) => {
  const src = "/images/" + plant.image;

  return (
    <div className="row">
      <>
        <Link to={`/edit/${plant.name}`}>
          <img src={src} alt="Not found" />
        </Link>
      </>
      <div className="row__text">
        <p className="row__text__title">
          <Link to={`/edit/${plant.name}`}> Edit <b>{plant.name}</b></Link>
        </p>
      </div>
    </div>
  );
};
export default PlantRow