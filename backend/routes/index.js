const express = require("express");
const router = express.Router();

const passport = require("passport");
const jwtStrategy = require("../strategies/jwt");
// const facebookTokenStrategy = require("../strategies/facebookToken");

passport.use(jwtStrategy);
// passport.use(facebookTokenStrategy);

const authRouter = require("./auth/auth");
const postsRouter = require("./posts/posts");
const usersRouter = require("./users/users");

router.use("/auth", authRouter);
router.use("/posts", postsRouter);
router.use("/users", usersRouter);

module.exports = router;