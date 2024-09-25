const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["appartement", "studio", "maison", "villa"],
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
