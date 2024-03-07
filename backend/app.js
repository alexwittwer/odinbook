// Initiate the server and connect to the database
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const passport = require("passport");
const path = require("path");
const helmet = require("helmet");
require("dotenv").config();
require("./utils/mongoConfig");

const app = express();

// Middleware
app.use(passport.initialize());
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

// Routes
app.use("/api", indexRouter);

// Start server

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
