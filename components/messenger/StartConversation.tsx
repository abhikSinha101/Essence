import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {
  createConversation,
  createMessage,
} from "@/lib/actions/conversation.actions";

interface Params {
  accountId: string;
}

async function StartConversation({ accountId }: Params) {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  const userId = userInfo._id;

  if (!userInfo?.onBoarded) redirect("/onboarding");

  await createConversation({ userId_1: userId, userId_2: accountId });

  return (
    <>
      <h1>
        {accountId} {""} {userInfo.id}
      </h1>
    </>
  );
}

export default StartConversation;
