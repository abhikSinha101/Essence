import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  return (
    <section className="flex flex-col h-full">
      <div className="flex flex-col items-center text-center">
        Start a conversation.
      </div>
    </section>
  );
};

export default Page;
