const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/auth');
const userController = require('../controllers/userController');

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout", isAuthenticated, userController.logout);
router.put("/bookmark/:id", isAuthenticated, userController.bookmark);
router.get("/profile/:id", isAuthenticated, userController.getMyProfile);
router.get("/otheruser/:id", isAuthenticated, userController.getOtherUsers);
router.post("/follow/:id", isAuthenticated, userController.follow);
router.post("/unfollow/:id", isAuthenticated, userController.unfollow);

module.exports = router;
