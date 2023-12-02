"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

const DirectMessageCard = ({
  id,
  name,
  username,
  imgUrl,
  personType,
}: Props) => {
  //this id is the person's id to which i wanna have convo?

  const router = useRouter();
  const pathname = usePathname();

  const messageClick = () => {
    router.push(`/main/message/${id}`);
  };

  const isCurrentRoute = pathname === `/main/message/${id}`;
  return (
    <>
      {}
      <Button
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
      </Button>
    </>
  );
};

export default DirectMessageCard;
