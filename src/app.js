import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

const app = express();
const API = process.env.API_KEY;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getBeers = async (req, res) => {
  const {
    data: { data }
  } = await axios.get(`https://api.brewerydb.com/v2/beers/?key=${API}`);
  // console.log(beers.data);
  // beers.data.data.map(i => console.log(i.id));
  res.send(data);
};

app.get("/", (req, res) => res.send("Hello"));
app.get("/data", getBeers);

export default app;
