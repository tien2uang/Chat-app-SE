const express = require('express')
const router = express.Router();
const authController = require('../controller/authController')

<<<<<<< HEAD

// router.get('/sign-up', authController.signup_index);
// router.get('/log-in', authController.login_index);
=======
>>>>>>> ccd9f7d5f991ae90b2d611bd8b6db6d4466c8204
router.post('/sign-up', authController.signup_post);
router.post('/log-in', authController.login_post);

module.exports = router;