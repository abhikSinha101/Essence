import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  senderId: { type: String, required: true },
  revicerId: { type: String },
  text: { type: String },
  timeStamp: { type: Number },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
