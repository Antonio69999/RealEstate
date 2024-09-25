const express = require("express");
const Annonce = require("../models/Annonces");

// Create a new annonce
const createAnnonce = async (req, res, next) => {
  const {
    titre,
    prix,
    description,
    category,
    localisation,
    caractéristiques,
    images,
  } = req.body;

  try {
    const annonce = new Annonce({
      titre,
      prix,
      description,
      category,
      localisation,
      caractéristiques,
      images,
    });
    await annonce.save();
    res.status(201).json({ message: "Annonce créée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'annonce" });
    next(error);
  }
};

// Get all annonces
const getAnnonces = async (req, res, next) => {
  try {
    const annonces = await Annonce.find();
    res.status(200).json(annonces);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des annonces" });
    next(error);
  }
};

// Get a single annonce
const getAnnonce = async (req, res, next) => {
  const { id } = req.params;

  try {
    const annonce = await Annonce.findById(id);
    if (!annonce) {
      return res.status(404).json({ message: "Annonce non trouvée à cet id" });
    }
    res.status(200).json(annonce);
  } catch (error) {
    res.status(500).json({
      message:
        "Erreur lors de la récupération de l'annonce, le format de l'id n'est peut etre pas bon",
    });
    next(error);
  }
};

// Update a single annonce
const updateAnnonce = async (req, res, next) => {
  const { id } = req.params;
  const {
    titre,
    prix,
    description,
    category,
    localisation,
    caractéristiques,
    images,
  } = req.body;

  try {
    const annonce = await Annonce.findByIdAndUpdate(
      id,
      {
        titre,
        prix,
        description,
        category,
        localisation,
        caractéristiques,
        images,
      },
      { new: true }
    );
    if (!annonce) {
      return res.status(404).json({ message: "Annonce non trouvée" });
    }
    res.status(200).json({ message: "Annonce mise à jour avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'annonce" });
    next(error);
  }
};

// Delete a single annonce
const deleteAnnonce = async (req, res, next) => {
  const { id } = req.params;

  try {
    const annonce = await Annonce.findByIdAndDelete(id);
    if (!annonce) {
      return res.status(404).json({ message: "Annonce non trouvée" });
    }
    res.status(200).json({ message: "Annonce supprimée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'annonce" });
    next(error);
  }
};

module.exports = {
  createAnnonce,
  getAnnonces,
  getAnnonce,
  updateAnnonce,
  deleteAnnonce,
};
