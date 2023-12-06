"use server";

import Chat from "../models/chat.model";
import { connectToDB } from "../mongoose";

export async function generateChatId(userId1: string, userId2: string) {
  try {
    connectToDB();

    const sortedUserIds = [userId1, userId2].sort();
    const combinedChatId = sortedUserIds.join("--");

    const existingChat = await Chat.findOne({
      id: combinedChatId,
    });

    if (existingChat) {
      return existingChat._id;
    } else {
      const newChat = await Chat.create({
        id: combinedChatId,
        participants: [userId1, userId2],
      });
      return newChat._id;
    }
  } catch (error: any) {
    throw new Error(`error generating chatId ${error.message}`);
  }
}

export async function fetchChatId(chatId: string) {
  try {
    connectToDB();

    return await Chat.findById(chatId);
  } catch (error) {}
}
