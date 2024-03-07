const mongoose = require("mongoose");
require('dotenv').config();

let bucket;

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;
bucket = new mongoose.mongo.GridFSBucket(db, { bucketName: "Photo" })
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("connect", () => console.log("Connected to MongoDB"));
