const mongoose = require("mongoose");
const crypto = require("crypto-js");
const Schema = mongoose.Schema;

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || "secret";

// Define schema for card
const CardSchema = new Schema({
    userID: { type: Number, required: true, ref: "Register" },
    cardHolderName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cvv: { type: String, required: true },
    cardType: { type: String, enum: ["Visa", "MasterCard", "Amex", "Discover"], required: true },
});

// Encrypt card number and CVV before saving
CardSchema.pre("save", function (next) {
    if (this.isModified("cardNumber")) {
        this.cardNumber = crypto.AES.encrypt(this.cardNumber, SECRET_KEY).toString();
    }
    if (this.isModified("cvv")) {
        this.cvv = crypto.AES.encrypt(this.cvv, SECRET_KEY).toString();
    }
    next();
});

// Decryption methods
CardSchema.methods.decryptCardNumber = function () {
    const bytes = crypto.AES.decrypt(this.cardNumber, SECRET_KEY);
    return bytes.toString(crypto.enc.Utf8);
};

CardSchema.methods.decryptCVV = function () {
    const bytes = crypto.AES.decrypt(this.cvv, SECRET_KEY);
    return bytes.toString(crypto.enc.Utf8);
};

module.exports = mongoose.model("Card", CardSchema);
