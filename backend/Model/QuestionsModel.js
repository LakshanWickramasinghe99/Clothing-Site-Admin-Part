const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema(
    {
        userID:{
            type: Number,
            required: true,
            ref: "Register"
        },
        ageGroup:{
            type: String,
            required: true
        },
        bust:{
            type: Number,
            required: true
        },
        waist:{
            type: Number,
            required: true
        },
        hips:{
            type: Number,
            required: true
        },
        shoulderWidth:{
            type: Number,
            required: true
        },
        height:{
            type: Number,
            required: true
        },
        weight:{
            type: Number,
            required: true
        },
        bodyShape:{
            type: String,
            required: true
        },
        fastFashion:{
            type: String,
            required: true
        },
        tossedOut:{
            type: String,
            required: true
        },
        wardrobe:{
            type: String,
            required: true
        },
        greenPoints:{
            type: String,
            required: true
        },
        fashionFootprint:{
            type: String,
            required: true
        },
        fabricDetective:{
            type: String,
            required: true
        }

    }
);

module.exports = mongoose.model(
    "Questions",
    QuestionsSchema
)