import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  text: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
