const UserController = require('../controller/UserController');
const express = require('express')
const router = express.Router();

router.post('/add', UserController.addUser);

router.get('/:id', UserController.getUserInfomation);
router.get("/:id/friends", UserController.getFriends);
router.put("/:id", UserController.updateUserInfomation);

module.exports = router;