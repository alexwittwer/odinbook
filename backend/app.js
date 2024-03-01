const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("connect", () => {
    console.log("Connected to MongoDB");
});

const app = express();


app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes



// Start server

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});