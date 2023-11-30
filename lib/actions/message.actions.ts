import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Message from "../models/conversation.model";
import Conversation from "../models/conversation.model";

interface Params {
  senderUserId: string;
  conversationId: string;
  content: string;
}

async function sendMessage({ senderUserId, conversationId, content }: Params) {
  try {
  } catch (error) {}
}
