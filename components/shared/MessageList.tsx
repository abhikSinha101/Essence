"use client";

import { fetchMessagesForChat } from "@/lib/actions/chat.action";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface params {
  chatId: string;
  senderId: string;
  chatPartner: { image: string };
  chatUser: { name: string; image: string };
}

function MessageList({ chatId, senderId, chatPartner, chatUser }: params) {
  const [messages, setMessages] = useState<any[]>([]);

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
        <div key={message._id} className="">
          {message.senderId === senderId ? (
            <div className="flex flex-row items-start justify-end  p-1">
              <div className="flex max-w-sm flex-col bg-blue_text p-2 rounded-lg ">
                <div className="text-base-regular whitespace-normal">
                  {message.text}
                </div>
              </div>
              <div className="h-8 w-8 ml-2 mt-1">
                <Image
                  src={chatUser.image}
                  alt="profile photo"
                  width={42}
                  height={42}
                  className="rounded-full"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-start justify-start p-1">
              <div className="h-8 w-8 mr-2 mt-1">
                <Image
                  src={chatPartner.image}
                  alt="profile photo"
                  width={42}
                  height={42}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col  max-w-sm  bg-purple_text p-2 rounded-lg ">
                <div className="text-base-regular  whitespace-normal">
                  {message.text}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default MessageList;
