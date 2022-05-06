const express = require("express");
const app = express();
const mongoose = require("mongoose");
const messageRouter = require("./routers/messages")
const conversationRouter = require("./routers/conversations")
const authRouter = require('./routers/authRoutes');


const dbURI = 'mongodb+srv://hfghfg123456:hfghfg123456@profile.hxemy.mongodb.net/Database?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err));



app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);
app.listen(8800, () => {
    console.log("Backend server is running!");
  });
