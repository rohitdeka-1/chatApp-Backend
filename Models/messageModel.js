import mongoose from "mongoose";
const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.ObjectId, ref: "chat" },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;
