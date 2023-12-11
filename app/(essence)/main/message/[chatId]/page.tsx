import {
  fetchUser,
  fetchUserById,
  fetchUsers,
} from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";

import PostMessage from "@/components/messenger/PostMessage";
import {
  associateMessageWithChat,
  fetchChatId,
  fetchChats,
} from "@/lib/actions/chat.action";
import MessageList from "@/components/shared/MessageList";
import Pusher from "pusher-js";

interface Props {
  params: {
    chatId: string;
  };
}

const page = async ({ params }: Props) => {
  const { chatId } = params;

  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onBoarded) redirect("/onboarding");

  //using chatQuery split the Id to make a partnerId and userId
  const chatQuery = await fetchChatId(chatId);

  //fetched Chats   (Kyu?)
  const chats = await fetchChats();
  const chatIDs = chats.map((IDs) => IDs.id);

  const ChatSplitId = chatQuery.id;
  const [userId1, userId2] = ChatSplitId.split("--");

  const chatPartnerId = userInfo._id.toString() === userId1 ? userId2 : userId1;
  const chatPartner = await fetchUserById(chatPartnerId);
  const chatUser = await fetchUserById(userInfo._id);

  return (
    <section className="flex flex-col h-full">
      <MessageList
        chatId={chatId}
        senderId={userInfo._id}
        chatPartner={chatPartner}
        chatUser={chatUser}
      />

      <div className="my-2 bottom-10 bg-transparent">
        <PostMessage
          chatId={chatId}
          senderId={userInfo._id}
          receiverId={chatPartnerId}
        />
      </div>
    </section>
  );
};

export default page;
