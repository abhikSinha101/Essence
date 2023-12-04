/*"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Message from "../models/conversation.model";
import Conversation from "../models/conversation.model";

//conversation is working
export async function createConversation(userId_1: string, userId_2: string) {
  try {
    connectToDB();
    const existingConversation = await Conversation.findOne({
      participants: { $all: [userId_1, userId_2] },
    });

    if (existingConversation) {
      // Conversation already exists, you may want to handle this case
      console.log(
        `Conversation already exists with ID: ${existingConversation._id}`
      );
      return existingConversation._id;
    }

    // Create a new conversation
    const newConversation = await Conversation.create({
      participants: [userId_1, userId_2],
      exchange: true,
    });

    return newConversation._id;
  } catch (error: any) {
    throw new Error(`Failed to start conversation: ${error.message}`);
  }
}

export async function fetchConversation(userId: string, personId: string) {
  try {
    connectToDB();
    //fetch conversation via userid & personId
    const conversation = Conversation.findOne({
      participants: { $all: [userId, personId] },
    });

    return conversation;
  } catch (error: any) {
    throw new Error(`Failed to fetch conversation: ${error.message}`);
  }
}

//make a start convo function
export async function sendMessage(conversationId: string) {
  try {
    connectToDB();
    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      throw new Error("Conversation not found");
    }

    //conversation.messages.push("dwad");

    return conversation;
  } catch (error: any) {
    throw new Error(`Failed to sending message: ${error.message}`);
  }
}
*/
