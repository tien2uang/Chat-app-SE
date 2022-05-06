const express = require('express')
const router = express.Router();

const conversationController = require('../controller/ConversationController')

router.get('/:userId', conversationController.getConv1);
router.get('/find/:firstUserId/:secondUserId', conversationController.getConv2);
router.post('/', conversationController.newConv);

module.exports = router;