"use client";
import { createConversation } from "@/lib/actions/conversation.actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Params {
  userId: string;
  accountId: string;
}

const MessageButton = ({ userId, accountId }: Params) => {
  const router = useRouter();

  const create = async () => {
    await createConversation({ userId_1: userId, userId_2: accountId });
    router.push(`/main/message`);
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
