const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middleware/auth"); 
const tweetController = require("../controllers/tweetController");

router.post("/create", isAuthenticated, tweetController.createTweet);
router.delete("/delete/:id", isAuthenticated, tweetController.deleteTweet);
router.put("/like/:id", isAuthenticated, tweetController.likeOrDislike);
router.get("/alltweets", isAuthenticated, tweetController.getAllTweets); 
router.get("/followingtweets", isAuthenticated, tweetController.getFollowingTweets);

module.exports = router;
