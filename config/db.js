const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.qbmgm.mongodb.net/disney-dev?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log("DB CONNECTION SUCCESSFUL".cyan.underline);
  } catch (error) {
    console.error(`Error:${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
