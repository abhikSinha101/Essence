"use client";

import { fetchMessagesForChat } from "@/lib/actions/chat.action";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";

interface Message {
  _id: string;
  text: string;
  senderId: string;
  // Add other message properties as needed
}
interface params {
  chatId: string;
  senderId: string;
  chatPartner: { image: string };
  chatUser: { name: string; image: string };
}

function MessageList({ chatId, senderId, chatPartner, chatUser }: params) {
  const [messages, setMessages] = useState<Message[]>([]);

  React.useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await fetchMessagesForChat(chatId);
      setMessages(fetchedMessages.reverse());
    };

    fetchMessages();

    const pusher = new Pusher(
      process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
      {
        cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
      }
    );

    const channel = pusher.subscribe(`my-channel`);

    channel.bind("my-event", (data: any) => {
      console.log(data);

      setMessages((prevMessages) => [data, ...prevMessages]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [chatId]);

  console.log(messages);

  return (
    <section className="overflow-y-auto flex-1 flex flex-col-reverse custom-scrollbar_hidden">
      {messages.map((message) => (
        <div key={message._id}>
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
