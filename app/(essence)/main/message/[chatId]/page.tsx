import {
  fetchUser,
  fetchUserById,
  fetchUsers,
} from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";

import PostMessage from "@/components/messenger/PostMessage";
import { fetchChatId, fetchChats } from "@/lib/actions/chat.action";

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
  //console.log(chatPartner);

  return (
    <section className="flex flex-col h-full">
      <div className="overflow-y-auto flex-1 custom-scrollbar_hidden">
        {chatQuery._id}
      </div>
      <div className="my-2 bottom-10 bg-transparent">
        <PostMessage />
      </div>
    </section>
  );
};

export default page;
