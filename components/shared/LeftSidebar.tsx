"use client";
import { sidebarMediaLinks, sidebarDocLinks } from "@/constants";

import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  UserButton,
  useUser,
  useAuth,
} from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  const { user } = useUser();

  if (!user) {
    return null;
  }
  const userProfileImage = user?.imageUrl;
  const userProfileUserName = user?.username;
  const userProfileName = user?.fullName;

  return (
    <section className="custom-scrollbar leftsidebar ">
      <div className="flex items-center p-4 gap-20 max-lg:hidden place-content-center">
        <Link href="/main">
          <Image
            src="/assets/Essence.svg"
            alt="essencelogo"
            width={112}
            height={112}
            className="p-1"
            priority
          />
        </Link>
        <Link href="/">
          <Image
            src="/assets/slide.png"
            alt="slide"
            width={24}
            height={24}
            className="pt-1"
            priority
          />
        </Link>
      </div>

      <div className="flex w-full flex-1 flex-col gap-1 pt-2 pl-4 pr-4">
        <p className="leftsidebar_section-text">Main Menu</p>

        {sidebarMediaLinks.map((link) => {
          const isActive =
            pathname === link.route ||
            (link.route !== "/main" && pathname.startsWith(link.route));

          //if we open profile page then it wil show the user id
          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${
                isActive && "bg-light-2 items-center"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-dark-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}

        <p className="leftsidebar_section-text">Favorites</p>

        {/**Looping for links */}

        {sidebarDocLinks.map((link) => {
          return (
            <Link
              href={link.route}
              key={link.label}
              className="leftsidebar_link "
              id="sidebarlinks"
            >
              {/** hover:bg-light-2 */}
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-dark-1 max-lg:hidden text-base-regular">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="leftsidebar_profile">
        <div className="flex flex-row items-center gap-4">
          <Link href={`/profile/${userId}`} className="flex cursor-pointer">
            <Image
              src={userProfileImage}
              alt="logout"
              width={24}
              height={24}
              className="rounded-full"
            />
          </Link>

          <div className="flex flex-col gap-0">
            <p className="text-dark-1 text-small-regular">
              {userProfileUserName}
            </p>
            <p className="text-dark-3 text-subtle-medium">{userProfileName}</p>
          </div>
        </div>

        <div>
          <Image
            src="/assets/moon.svg"
            alt="theme icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </section>
  );
}

export default LeftSidebar;
