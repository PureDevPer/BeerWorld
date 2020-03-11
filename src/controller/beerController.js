import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API = process.env.API_KEY;

export const getBeer = async (req, res) => {
  const {
    data: { data }
  } = await axios.get(`https://api.brewerydb.com/v2/beers/?key=${API}`);
  res.send(data);
};

export const postBeer = (req, res) => {
  console.log(req.body);
};
