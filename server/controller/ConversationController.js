const Conversation = require('../model/Conversation')

class ConversationController {

    async newConv(req, res) {

            const testData = { members: ["6280c85a5f029943b9a91923", "6280dc0cf3c926431b373e7d"] };
            const newTestConversation = new Conversation(testData);
            const newConversation = new Conversation({
                members: [req.body.senderId, req.body.receiverId],
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
                const conversation = await Conversation.find({
                    members: { $in: [req.params.userId] },

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
                members: { $all: [req.params.firstUserId, req.params.secondUserId] },
            });
            res.status(200).json(conversation)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new ConversationController;