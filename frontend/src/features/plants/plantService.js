import axios from "axios";

const API_URL = "/api/plants/";

//get the plants

const getPlants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const plantService = {
  getPlants
};

export default plantService;