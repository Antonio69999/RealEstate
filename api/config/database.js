require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log("Connected to MongoDB Atlas using Mongoose!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToDB;
