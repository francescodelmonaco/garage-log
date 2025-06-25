const express = require("express");
const router = express.Router();
const vehiclesController = require("../controllers/vehiclesController");

// Rotte CRUD per i veicoli
router.get("/", vehiclesController.index);
router.get("/:id", vehiclesController.show);
router.post("/", vehiclesController.store);
router.put("/:id", vehiclesController.update);
router.delete("/:id", vehiclesController.destroy);

module.exports = router;