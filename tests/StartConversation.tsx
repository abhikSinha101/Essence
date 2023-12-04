/*import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import MessageButton from "./MessageButton";

interface Params {
  accountId: string;
  messageId: string;
}

async function StartConversation({ accountId, messageId }: Params) {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  const userId = userInfo.id;

  if (!userInfo?.onBoarded) redirect("/onboarding");

  return (
    <>
      <MessageButton
        userId={userId}
        accountId={accountId}
        messageId={messageId}
      />
    </>
  );
}

export default StartConversation;*/
