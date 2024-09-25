const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register
const register = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(409).json({ message: "Nom d'utilisateur déjà pris" });
    }

    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Utilisateur inscrit avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'inscription" });
    next(error);
  }
};

// Login
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "1 hour",
    });
    res.status(200).json({ message: "Connexion réussie" });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
