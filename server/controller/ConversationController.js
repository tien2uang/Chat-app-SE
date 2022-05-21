const Conversation = require('../model/Conversation')
const Message = require('../model/Message')
class ConversationController {

    async newConv(req, res) {


            console.log(req.body);
            try {
                const data = req.body;
                const newConversation = new Conversation({ members: data.members });
                const savedConversation = await newConversation.save();
                console.log(savedConversation);
                const newMessage = new Message({
                    conversationId: savedConversation._id,
                    sender: data.sender,
                    text: data.text
                });
                const savedMessage = await newMessage.save();
                
                res.status(201).json(savedConversation);

            } catch (err) {
                res.status(500).json(err);
            }

        }
        //get conv of a user
    async getConv1(req, res) {
            try {

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