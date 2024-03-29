// Initiate the server and connect to the database
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const passport = require("passport");
const path = require("path");
const helmet = require("helmet");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const commentRoute = require("./routes/comments");
const postRoute = require("./routes/posts");
const uploadRouter = require("./routes/uploads");
require("dotenv").config();
require("./utils/mongoConfig");

const app = express();

// Middleware
app.use(passport.initialize());
//app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/login", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/upload", uploadRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
