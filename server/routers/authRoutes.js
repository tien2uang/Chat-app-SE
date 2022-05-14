const express = require('express')
const router = express.Router();
const authController = require('../controller/authController')


// router.get('/sign-up', authController.signup_index);
// router.get('/log-in', authController.login_index);
router.post('/sign-up', authController.signup_post);
router.post('/log-in', authController.login_post);

module.exports = router;