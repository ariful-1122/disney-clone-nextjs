const Movie = require("../model/MovieModel");
const colors = require("colors");
const connectDB = require("../config/db");
const movies = require("../data/movies");

connectDB();

const importData = async () => {
  try {
    await Movie.deleteMany();

    await Movie.insertMany(movies);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Movie.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
