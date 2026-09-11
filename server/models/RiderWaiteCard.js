const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    deckId: String,
    deckName: String,
    number: Number,
    name: String,
    arcana: String,
    suit: String,
    imageName: String,
    keywords: [String],
    meaning: {
        upright: String,
        reversed: String
    }
});

module.exports = mongoose.model(
    "RiderWaiteCard",
    cardSchema,
    "riderWaiteCards"
);