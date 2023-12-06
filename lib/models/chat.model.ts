import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  id: { type: String, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;
