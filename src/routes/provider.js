// Path: api/provider

const { param, body } = require("express-validator");

// Controllers
const {
  getProviders,
  getProviderById,
  insertProvider,
  updateProvider,
  deleteProvider,
} = require("../controllers/provider");

const { Router } = require("express");

// Router object
const router = new Router();

// Routes
router.get("/", [], getProviders);
router.get("/:id", [], getProviderById);
router.post("/new", [], insertProvider);
router.put("/update/:id", [], updateProvider);
router.delete("/delete/:id", [], deleteProvider);

module.exports = router;
