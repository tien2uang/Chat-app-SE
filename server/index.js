const express = require("express");
const app = express();
const mongoose = require("mongoose");
const messageRouter = require("./routers/messages")
const conversationRouter = require("./routers/conversations")







app.listen(8800, () => {
    console.log("Backend server is running!");
  });