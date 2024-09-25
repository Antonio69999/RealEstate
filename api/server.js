const express = require("express");
const app = express();
const connectToDB = require("./config/database");
const authRoutes = require("./routes/auth");
const annonceRoutes = require("./routes/annonces");
const PORT = 3001;

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/annonces", annonceRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
