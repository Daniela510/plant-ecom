import {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast} from "react-toastify";
import { getPlants } from "../features/plants/plantSlice";
import Spinner from "../components/Spinner";
import PlantCard from "../components/PlantCard";


function Main() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { plants, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.plants
  );
  useEffect( () => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getPlants())
    console.log(plants);
  }, [])


  if (isLoading){
    return <Spinner/>
  }

  return <main className="main">
    {plants ? (plants.map((plant) => (
        <PlantCard plant={plant} key={plant._id}/>
    ))) : (<Spinner/>)}
  </main>
}

export default Main