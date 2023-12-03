import { fetchPerson, fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import PostMessage from "@/components/messenger/PostMessage";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  return (
    <section className="flex flex-col h-full">
      <div className="overflow-y-auto flex-1 custom-scrollbar_hidden">Text</div>
      <div className="my-2 bottom-10 bg-transparent">
        <PostMessage userId={userInfo._id} />
      </div>
    </section>
  );
};

export default page;
