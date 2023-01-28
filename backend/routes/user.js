const express = require('express');
const router = express.Router();

const user  = require('../controllers/user');

// router login
router.post('/login', user.loginUser)


// router signup
router.post('/signup', user.signupUser)

module.exports = router


