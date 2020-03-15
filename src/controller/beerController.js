import axios from "axios";
import dotenv from "dotenv";
import Beer from "../models/Beers";

dotenv.config();

const API = process.env.API_KEY;

export const getBeer = async (req, res) => {
  const {
    data: { data }
  } = await axios.get(`https://api.brewerydb.com/v2/beers/?key=${API}`);
  res.send(data);
};

export const postBeer = async (req, res) => {
  const {
    body: { id, picture, name, abv, description, isFavorite }
  } = req;

  try {
    const hasBeers = await Beer.findOne({ id });
    console.log(hasBeers);
    if (hasBeers) updateBeer(hasBeers._id, isFavorite);
    else createBeer(id, picture, name, abv, description, isFavorite);
  } catch (error) {
    res.send("Something is wrong!");
  }
};

const createBeer = async (id, picture, name, abv, description, isFavorite) => {
  const beers = await Beer({
    id,
    picture,
    name,
    abv,
    description,
    isFavorite
  });
  await beers.save();
};

export const readBeer = async (req, res) => {
  try {
    const beers = await Beer.find({});
    res.json(beers);
  } catch (error) {
    res.send("Something Wrong!");
  }
};

const updateBeer = async (id, isFavorite) =>
  await Beer.findOneAndUpdate({ _id: id }, { isFavorite: !isFavorite });

export const deleteBeer = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    await Beer.findOneAndDelete({ _id: id });
    const beers = await Beer.find({});
    res.json(beers);
  } catch (error) {
    res.send("Someting Wrong");
  }
};
