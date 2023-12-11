"use server";

import Chat from "../models/chat.model";
import Message from "../models/message.model";
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
  } catch (error: any) {
    throw new Error(`error fetching chatIds ${error.message}`);
  }
}

export async function fetchChats() {
  try {
    connectToDB();

    return await Chat.find();
  } catch (error: any) {
    throw new Error(`error fetching chats ${error.message}`);
  }
}

export async function fetchChatViaUserId(userId: string, personId: string) {
  try {
    connectToDB();

    const chat = await Chat.findOne({
      participants: { $all: [userId, personId] },
    });

    return chat;
  } catch (error: any) {
    throw new Error(`error fetching chats via id ${error.message}`);
  }
}

//
export async function createMessage(
  chatId: string,
  senderId: string,
  receiverId: string,
  text: string
) {
  try {
    connectToDB();

    const message = await Message.create({
      id: chatId,
      senderId,
      receiverId,
      text,
    });

    const Pusher = require("pusher");
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_KEY as string,
      key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
      secret: process.env.PUSHER_APP_SECRET as string,
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
      useTLS: true,
    });

    pusher.trigger("my-channel", "my-event", {
      message: chatId,
      senderId,
      receiverId,
      text,
    });

    return message;
  } catch (error: any) {
    throw new Error(`error creating message ${error.message}`);
  }
}

export async function associateMessageWithChat(
  chatId: string,
  messageId: string
) {
  try {
    connectToDB();

    const chat = await Chat.findById(chatId);

    chat.messages.push(messageId);

    await chat.save();
  } catch (error: any) {
    throw new Error(`error associating message ${error.message}`);
  }
}

export async function fetchMessagesForChat(chatId: string) {
  try {
    const chat = await Chat.findById(chatId);

    const messageIds = chat.messages;

    const messages = await Message.find({
      _id: { $in: messageIds },
      id: chatId,
    });

    return messages;
  } catch (error: any) {
    throw new Error(`Error fetching messages for chat: ${error.message}`);
  }
}
