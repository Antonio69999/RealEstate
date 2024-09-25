const express = require("express");
const {
  createAnnonce,
  getAnnonces,
  getAnnonce,
  updateAnnonce,
  deleteAnnonce,
} = require("../controllers/annonceController");
const router = express.Router();

router.post("/create", createAnnonce);
router.get("/get", getAnnonces);
router.get("/:id", getAnnonce);
router.put("/:id", updateAnnonce);
router.delete("/:id", deleteAnnonce);

module.exports = router;
