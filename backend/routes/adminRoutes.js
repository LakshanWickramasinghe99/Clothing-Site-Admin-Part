const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getDashboard,
} = require("../controllers/adminController");

// Routes
router.post("/register", registerAdmin); // Admin registration
router.post("/login", loginAdmin);       // Admin login
router.get("/dashboard", getDashboard); // Protected dashboard

module.exports = router;
