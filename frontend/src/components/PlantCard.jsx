import {Link} from "react-router-dom";

const PlantCard = ({ plant }) => {
    const src = "/images/" + plant.image
  
    return (
      <div className="card">
        <><Link to={`/detail/${plant.name}`}>
        <img
          src={src}
          alt="No image found"
        /></Link></>
        <div className="card__text">
            <p className="card__text__title"><Link to={`/detail/${plant.name}`}>{plant.name}</Link></p>
          <p>{Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'EUR' }).format(plant.price)} <button className="btn">+</button></p>
        </div>
      </div>
    )
  }

export default PlantCard