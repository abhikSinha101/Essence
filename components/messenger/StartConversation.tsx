import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {
  createConversation,
  createMessage,
} from "@/lib/actions/conversation.actions";
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

  const userId = userInfo._id;

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

export default StartConversation;
