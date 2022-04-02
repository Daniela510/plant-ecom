import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getPlants } from "../features/plants/plantSlice";
import Spinner from "../components/Spinner";
import PlantCard from "../components/PlantCard";
import PlantRow from "../components/PlantRow";

function Main() {
  const dispatch = useDispatch();
  const { plants, isLoading, isError, message } = useSelector(
    (state) => state.plants
  );
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getPlants());
    console.log(plants);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main id="main">
      {user &&
      user.isAdmin &&
      user.isAdmin ? (
        <div className="main">
          {plants ? (
            plants.map((plant) => <PlantRow plant={plant} key={plant._id} />)
          ) : (
            <Spinner />
          )}
          <div className="row">
            <>
              <Link to={`/newplant`}>
                <div className="add">
                  <p>+</p>
                </div>
              </Link>
            </>
            <p className="row__text">
              <Link to={`/newplant`}>
                <b>Add new item</b>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="main">
          {plants ? (
            plants.map((plant) => <PlantCard plant={plant} key={plant._id} />)
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </main>
  );
}

export default Main;
