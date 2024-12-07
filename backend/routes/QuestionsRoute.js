const express = require("express");
const route = express.Router();

const questionsController = require("../Controllers/QuestionsController");

// POST route for submitting questions/answers
route.post("/", questionsController.questions);

// GET route for fetching questions by userID
route.get("/:userID", questionsController.getUserQuestions);

module.exports = route;
