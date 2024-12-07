const express = require("express");
const router = express.Router();
const cardController = require("../Controllers/CardController");

router.post("/", cardController.saveCardDetails);
router.get("/:userID", cardController.getCardDetails);

module.exports = router;
