import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
