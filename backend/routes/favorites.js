const express = require("express");
const FavoriteController = require("../Controllers/FavoritesController");
const router = express.Router();

router.get("/", FavoriteController.getAllFavorites);
router.post("/", FavoriteController.addItemToFavorites);
router.delete("/:id", FavoriteController.removeItemFromFavorites);

module.exports = router;
