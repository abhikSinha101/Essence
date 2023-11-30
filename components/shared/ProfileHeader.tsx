"use client";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
}

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
}: Props) => {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 object-cover">
            <Image
              src={imgUrl}
              alt="Profile Image"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-left text-heading4-medium text-dark-1">
              {name}
              <p className="text-base-medium text-gray-500">@{username}</p>
            </h2>
          </div>
        </div>

        <Button
          className="bg-green-500 hover:bg-green-600 rounded-3xl"
          onClick={() => console.log(accountId)}
        >
          Message
          {/**start a convo with the accountId*/}
        </Button>
      </div>
      {/**TODO: teams */}

      <p className="mt-6 max-w-lg text-base-regular text-dark-1">{bio}</p>
      <div className="mt-8 h-0.5 w-full bg-light-3" />
    </div>
  );
};

export default ProfileHeader;
