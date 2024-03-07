const mongoose = require("mongoose");
require('dotenv').config();

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("connect", () => console.log("Connected to MongoDB"));
