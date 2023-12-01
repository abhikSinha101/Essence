"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Message from "../models/conversation.model";
import Conversation from "../models/conversation.model";

interface Params {
  message: string;
  creator: string;
}

interface params {
  userId_1: string;
  userId_2: string;
}

//make a start convo function
export async function createMessage({ message, creator }: Params) {
  try {
    connectToDB();

    //creating message
    await Conversation.create({ message, creator });
  } catch (error: any) {
    throw new Error(`Failed to create message: ${error.message}`);
  }
}

//conversation is working
export async function createConversation({ userId_1, userId_2 }: params) {
  console.log("creating");
  try {
    // Check if a conversation already exists
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
    });

    return newConversation._id;
  } catch (error: any) {
    throw new Error(`Failed to start conversation: ${error.message}`);
  }
}
