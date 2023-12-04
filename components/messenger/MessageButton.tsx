"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Params {
  messageId: string;
}

const MessageButton = ({ messageId }: Params) => {
  const router = useRouter();

  const create = async () => {
    router.push(`/main/message/${messageId}`);
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
