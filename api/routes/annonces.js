const express = require("express");
const {
  createAnnonce,
  getAnnonces,
  getAnnonce,
  updateAnnonce,
  deleteAnnonce,
} = require("../controllers/annonceController");
const router = express.Router();
const verifyToken = require("../middleware/auth");

router.post("/create", verifyToken, createAnnonce);
router.get("/get", verifyToken, getAnnonces);
router.get("/:id", verifyToken, getAnnonce);
router.put("/:id", verifyToken, updateAnnonce);
router.delete("/:id", verifyToken, deleteAnnonce);

module.exports = router;