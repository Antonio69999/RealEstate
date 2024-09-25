const mongoose = require("mongoose");
const { Schema } = mongoose;

const annonceSchema = new mongoose.Schema({
  titre: String,
  prix: Number,
  description: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  localisation: {
    ville: String,
    codePostal: String,
  },
  caractéristiques: {
    chambre: Number,
    salleDeBain: Number,
    balcon: Boolean,
    jardin: Boolean,
    parking: Boolean,
  },
  date: { type: Date, default: Date.now },
  images: [String],
});

const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;
