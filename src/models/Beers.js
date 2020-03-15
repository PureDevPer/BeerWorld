import mongoose from "mongoose";

const beerSchema = mongoose.Schema({
  id: {
    type: String,
    required: "ID is required"
  },
  name: String,
  abv: Number,
  description: String,
  picture: String,
  isFavorite: {
    type: Boolean,
    required: "isFavorite is required"
  }
});

const Beer = mongoose.model("Beer", beerSchema);

export default Beer;
