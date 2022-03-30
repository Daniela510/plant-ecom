const PlantCard = ({ plant }) => {
    const src = "/images/" + plant.image
  
    return (
      <div >
        <img
          src={src}
          alt="No image found"
        />
        <div>
            <h2>{plant.name}</h2>
          <p>Description: {plant.desc}</p>
        </div>
      </div>
    );
  };
export default PlantCard