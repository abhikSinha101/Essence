"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

const UserCard = ({ id, name, username, imgUrl, personType }: Props) => {
  //this id is the person's id to which i wanna have convo?

  const router = useRouter();
  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image
          src={imgUrl}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 text-ellipsis">
        <h4 className="text-base-medium text-dark-1">{name}</h4>
        <p className="text-small-medium text-gray-1 ">@{username}</p>
      </div>
      <Button
        className="bg-[#EB455F] hover:bg-red-500"
        onClick={() => {
          router.push(`/profile/${id}`);
        }}
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
