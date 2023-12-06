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

const DirectMessageCard = ({ chatId, name, imgUrl }: Props) => {
  //id person

  const router = useRouter();
  const pathname = usePathname();

  const messageClick = () => {
    router.push(`/main/message/${chatId}`);
  };

  const isCurrentRoute = pathname === `/main/message/${chatId}`;

  //bug due to looping for users
  return (
    <>
      <p className="text-tiny-medium">No Active Chats</p>
    </>
  );
};

export default DirectMessageCard;

/***<Button
        className={`user-card ${
          isCurrentRoute
            ? "bg-light-2 hover:bg-light-2"
            : "bg-light-1 hover:bg-light-1"
        } `}
        onClick={messageClick}
      >
        <div className="user-card_avatar">
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
      </Button> */
