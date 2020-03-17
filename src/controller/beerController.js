import axios from "axios";
import dotenv from "dotenv";
import Beer from "../models/Beers";

dotenv.config();

const API = process.env.API_KEY;

export const getBeer = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const {
      data: { data }
    } = await axios.get(
      `https://api.brewerydb.com/v2/beers/?key=${API}&p=${id}`
    );
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const postBeer = async (req, res) => {
  const {
    body: { id, picture, name, abv, description, isFavorite }
  } = req;

  try {
    const hasBeers = await Beer.findOne({ id });
    if (hasBeers) updateAndDeleteBeer(hasBeers._id);
    else createBeer(id, picture, name, abv, description, isFavorite);
  } catch (error) {
    res.json(error);
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
    res.json(error);
  }
};

const updateAndDeleteBeer = async (id, isFavorite) =>
  await Beer.findOneAndDelete({ _id: id });

export const deleteBeer = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    await Beer.findOneAndDelete({ _id: id });
    const beers = await Beer.find({});
    res.json(beers);
  } catch (error) {
    res.json(error);
  }
};
