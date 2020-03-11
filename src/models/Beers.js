import mongoose from "mongoose";

const beerSchema = mongoose.Schema({
  id: String,
  name: String,
  abv: Number,
  description: String,
  picture: String
});

const Beer = mongoose.model("Beer", beerSchema);

export default Beer;
