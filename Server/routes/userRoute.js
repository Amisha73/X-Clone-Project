const express = require('express');

const isAuthenticated = require('../config/auth.js');
const Login = require('../controllers/userController.js');
const Signup = require('../controllers/userController.js');
const bookmark = require('../controllers/userController.js');
const follow = require('../controllers/userController.js');
const getMyProfile = require('../controllers/userController.js');
const getOtherUsers = require('../controllers/userController.js');
const logout = require('../controllers/userController.js');
const unfollow = require('../controllers/userController.js');

const router = express.Router();

router.post("/signup",Signup);
router.post("/login",Login);
router.get("/logout",logout);
router.put("/bookmark/:id",isAuthenticated, bookmark)
router.get("/profile/:id",isAuthenticated, getMyProfile);
router.get("/otheruser/:id",isAuthenticated, getOtherUsers);
router.post("/follow/:id",isAuthenticated, follow);
router.post("/unfollow/:id",isAuthenticated, unfollow);

module.exports = router