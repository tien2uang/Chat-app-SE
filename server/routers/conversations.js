const express = require('express')
const router = express.Router();

const conversationController = require('../controller/ConversationController')

router.post('/', conversationController.newConv)
router.getConv1('/:userId', conversationController.getConv1)
router.getConv2('/find/:firstUserId/:secondUserId', conversationController.getConv2)

module.exports = router;