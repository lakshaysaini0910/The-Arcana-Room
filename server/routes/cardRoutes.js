const express = require("express");
const router = express.Router();

const RiderWaiteCard  = require("../models/RiderWaiteCard");

router.get("/:deckId", async (req, res) => {
    try {
        const{deckId } = req.params;

        if(deckId !== "rider-waite") {
            return res.status(404).json({ message: "Deck not found" });
        }

        const cards = await RiderWaiteCard.find();
        res.json(cards);
            
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;