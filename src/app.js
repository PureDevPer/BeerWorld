import axios from "axios";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

const getBeers = async (req, res) => {
  const beers = await axios.get(
    "https://api.brewerydb.com/v2/beers/?key=caf39f22327a121842bbbb02e55bfd9a"
  );
  console.log(beers.data);
  res.json(beers.data.data);
};

app.get("/", (req, res) => res.send("Hello"));
app.get("/data", getBeers);

export default app;
