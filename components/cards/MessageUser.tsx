"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  chatId: string;
  name: string;
  imgUrl: string;
}

const MessageUser = ({ chatId, name, imgUrl }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const messageClick = () => {
    router.push(`/main/message/${chatId}`);
  };

  const isCurrentRoute = pathname === `/main/message/${chatId}`;

  return (
    <>
      <Button
        className="user-card-nav w-full mt-1 bg-light-1 hover:bg-light-2"
        onClick={messageClick}
      >
        <div className="user-card_avatar-nav">
          <Image
            src={imgUrl}
            alt="logo"
            width={32}
            height={32}
            className="rounded-full "
          />
        </div>
        <div className="flex-1 text-ellipsis">
          <h3 className="text-start text-base-medium text-dark-1">{name}</h3>
        </div>
      </Button>
    </>
  );
};

export default MessageUser;
