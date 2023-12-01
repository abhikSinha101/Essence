"use client";
import { createConversation } from "@/lib/actions/conversation.actions";
import { Button } from "../ui/button";

interface Params {
  userId: string;
  accountId: string;
}

const MessageButton = ({ userId, accountId }: Params) => {
  const create = async () => {
    await createConversation({ userId_1: userId, userId_2: accountId });
  };
  return (
    <Button
      className="rounded-3xl bg-red-600 hover:bg-red-500"
      onClick={create}
    >
      Message
    </Button>
  );
};

export default MessageButton;
