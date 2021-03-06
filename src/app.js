import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import {
  getBeer,
  postBeer,
  readBeer,
  deleteBeer
} from "./controller/beerController";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => res.send("Hello"));
app.get("/data/:id", getBeer);
app.post("/data", postBeer);
app.get("/beers", readBeer);
app.get("/delete/:id", deleteBeer);

export default app;
