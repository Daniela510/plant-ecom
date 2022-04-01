import {useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import {BsDropletFill, BsFillSunFill} from 'react-icons/bs'
import { useEffect } from "react";
import React from 'react'

const Detail = () => {
    const {name} = useParams();
    //this needs tp be from local storage
    const {plants} = useSelector((state) => state.plants)
    const targetPlants = plants.filter( plant => plant.name === name)
    const plant = targetPlants[0];
    //console.log(targetPlant[0].image);
  return (
    <div className="container">
        <img
          src={`/images/${plant.image}`}
          alt="No image found"
        />
        <div className="description">
            <h2>{plant.name}</h2>
            <p>{plant.genus}</p>
            <p>origin: {plant.origin}</p>
            <p><BsDropletFill/> {plant.water}</p>
            <p><BsFillSunFill/> {plant.light}</p>
            <p>{plant.desc}</p>
            <button className="btn-block btn">ADD TO CART</button>
        </div>
    </div>
  )
}

export default Detail