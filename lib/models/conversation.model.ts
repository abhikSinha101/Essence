import mongoose from "mongoose";
const messageSchema = require("./message.model");

const conversationSchema = new mongoose.Schema({
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ],
  exchange: { type: Boolean, default: false },

  //message: [messageSchema],
});

const Conversation =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", conversationSchema);

export default Conversation;
