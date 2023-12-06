"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Params {
  chatId: string;
}

const MessageButton = ({ chatId }: Params) => {
  const router = useRouter();

  const create = () => {
    router.push(`/main/message/${chatId}`);
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
