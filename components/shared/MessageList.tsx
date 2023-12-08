"use client";

import { fetchMessagesForChat } from "@/lib/actions/chat.action";
import { useEffect, useState } from "react";

interface params {
  chatId: string;
}
interface Message {
  _id: string;
  text: string;
  createdAt: string; // adjust the type accordingly
}
function MessageList({ chatId }: params) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await fetchMessagesForChat(chatId);
        setMessages(fetchedMessages.reverse());
      } catch (error: any) {
        console.error("Error fetching messages:", error.message);
      }
    };

    fetchMessages();
  }, [chatId]);

  return (
    <section className="overflow-y-auto flex-1 flex flex-col-reverse custom-scrollbar_hidden">
      {messages.map((message) => (
        <p key={message._id}>{message.text}</p>
      ))}
      <p>Old Message</p>
    </section>
  );
}

export default MessageList;
