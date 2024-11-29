const express = require("express");
const router = express.Router();

const isAuthenticated = require("../config/auth.js");
const createTweet = require("../controllers/tweetController.js");
const deleteTweet = require("../controllers/tweetController.js");
const getAllTweets = require("../controllers/tweetController.js");
const getFollowingTweets = require("../controllers/tweetController.js");
const likeOrDislike = require("../controllers/tweetController.js");

router.post("/create", isAuthenticated, createTweet);
router.post("/create", isAuthenticated, createTweet);
router.delete("/delete/:id", isAuthenticated, deleteTweet);
router.put("/like/:id", isAuthenticated, likeOrDislike);
router.get("/alltweets/:id", isAuthenticated, getAllTweets);
router.get("/followingtweets/:id", isAuthenticated, getFollowingTweets);

module.exports = router;
