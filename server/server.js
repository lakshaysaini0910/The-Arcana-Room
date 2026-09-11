require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cardRoutes = require("./routes/cardRoutes");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api/cards", cardRoutes);

const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

startServer();