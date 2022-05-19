const Message = require('../model/Message')
class MessageController {

    async add(req, res) {
        const newMessage = new Message(req.body);
        console.log(req.body);

        try {
            const savedMessage = await newMessage.save();
            res.status(200).json(savedMessage);
            // const savedTestMessage = await testMessage.save();
            // res.status(200).json(savedTestMessage);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getMess(req, res) {
        try {
            const messages = await Message.find({
                conversationId: req.params.conversationId,
            });
            res.status(200).json(messages);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getLastMessage(req, res) {
        try {
            const messages = await Message.find({
                conversationId: req.params.conversationId,
            }).sort({ createdAt: -1 }).limit(1);
            res.status(200).json(messages);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new MessageController;