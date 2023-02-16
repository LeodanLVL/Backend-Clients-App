// Path: api/client

// Imports
const { param, body } = require("express-validator");
const { Router } = require("express");

const {
  getClients,
  getClientById,
  insertClient,
  updateClient,
  deleteClient,
} = require("../controllers/client");

// Router object
const router = new Router();

// Routes
router.get("/", [], getClients);
router.get("/:id", [], getClientById);
router.post("/new", [], insertClient);
router.put("/update/:id", [], updateClient);
router.delete("/delete/:id", [], deleteClient);

module.exports = router;
