const Card = require("../Model/CardModel");
const Register = require("../Model/RegModel");

const saveCardDetails = async (req, res) => {
    try {
        const { userID, cardHolderName, cardNumber, expirationDate, cvv, cardType } = req.body;
        const user = await Register.findOne({ userID });
        if (!user) return res.status(404).json({ message: "User not found" });

        const newCard = new Card({ userID, cardHolderName, cardNumber, expirationDate, cvv, cardType });
        const savedCard = await newCard.save();
        res.status(200).json({ message: "Card saved successfully", cardID: savedCard._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getCardDetails = async (req, res) => {
    try {
        const { userID } = req.params;
        const card = await Card.findOne({ userID });
        if (!card) return res.status(404).json({ message: "Card details not found" });

        res.status(200).json({
            cardHolderName: card.cardHolderName,
            cardNumber: card.decryptCardNumber(),
            expirationDate: card.expirationDate,
            cvv: card.decryptCVV(),
            cardType: card.cardType,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { saveCardDetails, getCardDetails };
