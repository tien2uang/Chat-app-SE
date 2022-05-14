const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({
        members: {
            type: Array,
            require: true
        }
    }, { timestamps: true }

);
module.exports = mongoose.model("Conversation", ConversationSchema);