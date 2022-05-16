const Message = require('../model/Message')
class MessageController {

    async add(req, res) {
        const newMessage = new Message(req.body);
        const testData = {
            conversationId: "628122970634a159debd952b",
            sender: "6280c85a5f029943b9a91923",
            text: "tesst lasst"
        };
        const testMessage = new Message(testData);
        try {
            // const savedMessage = await newMessage.save();
            // res.status(200).json(savedMessage);
            const savedTestMessage = await testMessage.save();
            res.status(200).json(savedTestMessage);
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