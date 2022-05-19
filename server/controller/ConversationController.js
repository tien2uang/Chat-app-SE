const Conversation = require('../model/Conversation')

class ConversationController {

    async newConv(req, res) {

            const testData = { members: ["tienquang", "quyet"] };
            const newTestConversation = new Conversation(testData);
            const newConversation = new Conversation({
                members: [req.body.senderUserName, req.body.receiverUserName],
            });

            try {
                // const savedConversation = await newConversation.save();
                // res.status(200).json(savedConversation);
                const testConversation = await newTestConversation.save();
                res.status(200).json(testConversation);
            } catch (err) {
                res.status(500).json(err);
            }

        }
        //get conv of a user
    async getConv1(req, res) {
            try {
                console.log(req.params.userName, " username data");
                const conversation = await Conversation.find({
                    members: { $in: [req.params.userName] },

                });
                res.status(200).json(conversation);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        // get conv includes two userId
    async getConv2(req, res) {
        try {
            const conversation = await Conversation.findOne({
                members: { $all: [req.params.firstUserName, req.params.secondUserName] },
            });
            res.status(200).json(conversation)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new ConversationController;