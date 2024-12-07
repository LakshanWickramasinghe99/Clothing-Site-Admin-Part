const express = require("express");
const multer = require("multer"); // Import multer
const path = require('path');
const regController = require("../Controllers/RegController");

const router = express.Router();

// Set up multer for file upload handling
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/'); // Ensure 'uploads' is the folder where files are saved
    },
    filename: function (req, file, cb) {
        cb(null, `${req.params.userID}-profile${path.extname(file.originalname)}`); //Custom file name
    }
});

const upload = multer({ storage });

// Update user profile (PUT request with multer to handle the profile picture)
router.put('/:userID', upload.single('profilePicture'), regController.updateUserProfile);


// Route for user registration (POST request)
router.post("/", regController.registerUser);


// Get user profile by userID (GET request)
router.get('/:userID', regController.getUserProfile);



// Delete user profile (DELETE request)
router.delete('/:userID', regController.deleteUserProfile);

module.exports = router;
