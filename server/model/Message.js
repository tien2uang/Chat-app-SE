const mongoose = require('mongoose');

const MessageSchema = new  mongoose.Schema(
    {
        conservationId: {
            type:String,
            require:true
        },
        sender: {
            type: String,
            require:true
        },
        text :{
            type:String, 
            require:true
        }
    },
    {timestamps:true}
);
module.exports = mongoose.model("Message",MessageSchema);