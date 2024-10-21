require("dotenv").config({ path: ".env.local" });
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    console.log("Authorization header missing");
    return res.status(401).json({ message: "Accès refusé, header manquant" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("Token missing in Authorization header");
    return res.status(401).json({ message: "Accès refusé, token manquant" });
  }

  try {
    // console.log("Token:", token);
    // console.log("Secret Key:", process.env.JWT_TOKEN);
    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = verified;
    next();
  } catch (err) {
    console.error("Erreur de vérification du token :", err);
    res.status(400).json({ message: "Token invalide" });
  }
};

module.exports = verifyToken;
