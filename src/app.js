import axios from "axios";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

const app = express();
const API = process.env.API_KEY;

app.use(morgan("dev"));

const getBeers = async (req, res) => {
  const beers = await axios.get(
    `https://api.brewerydb.com/v2/beers/?key=${API}`
  );
  console.log(beers.data);
  res.json(beers.data.data);
};

app.get("/", (req, res) => res.send("Hello"));
app.get("/data", getBeers);

export default app;
