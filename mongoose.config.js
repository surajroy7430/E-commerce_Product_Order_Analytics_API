const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("");
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to db");
  }
};

module.exports = connectToDB;
