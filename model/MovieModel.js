const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    bgImg: {
      type: String,
      required: true,
    },
    cardImg: {
      type: String,
      required: true,
    },
    logoImg: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

module.exports = Movie;
