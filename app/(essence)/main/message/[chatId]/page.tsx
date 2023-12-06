import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";

import PostMessage from "@/components/messenger/PostMessage";
import { fetchChatId } from "@/lib/actions/chat.action";

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

  const chatQuery = await fetchChatId(chatId);

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
