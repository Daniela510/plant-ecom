const PlantCard = ({ plant }) => {
    const src = "/images/" + plant.image
  
    return (
      <div className="card">
        <img
          src={src}
          alt="No image found"
        />
        <div className="card__text">
            <p className="card__text__title">{plant.name}</p>
          <p>{Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'EUR' }).format(plant.price)} <button className="btn">+</button></p>
        </div>
      </div>
    );
  };
export default PlantCard