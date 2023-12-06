/*import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Message from "../models/conversation.model";
import Conversation from "../models/conversation.model";

interface Params {
  senderUserId: string;
  conversationId: string;
  content: string;
}

export async function sendMessage(
  senderUserId: string,
  conversationId: string,
  content: string
) {
  try {
    connectToDB();

    const conversation = await Conversation.findById(conversationId);

    const message = new Message({
      conversationId: conversationId,
      sender: senderUserId,
      content: content,
    });

    await message.save();

    await Conversation.findByIdAndUpdate(conversationId, { exchange: true });
    return message;
  } catch (error: any) {
    throw new Error(`Failed to send message: ${error.message}`);
  }
}*/
