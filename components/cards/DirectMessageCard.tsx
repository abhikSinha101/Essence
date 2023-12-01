"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
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
  return (
    <Button className="user-card bg-light-2 hover:bg-light-2">
      <div className="user-card_avatar">
        <Link href={`/profile/${id}`}>
          <Image
            src={imgUrl}
            alt="logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="flex-1 text-ellipsis">
        <h3 className="text-start text-base-medium text-dark-1">{name}</h3>
      </div>
    </Button>
  );
};

export default DirectMessageCard;
