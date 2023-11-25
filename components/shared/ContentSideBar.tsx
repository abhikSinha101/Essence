"use client";
import { inter } from "@/app/fonts/fonts";
import {
  sidebarMediaLinks,
  sidebarDocLinks,
  ContentSideBarLinks,
} from "@/constants";
import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function ContentSideBar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="contentsidebar custom-scrollbar p-4">
      <div className="flex items-center p-1 max-lg:hidden place-content-center">
        <Button
          type="submit"
          className="flex flex-row gap-2 items-center bg-zinc-900 hover:bg-dark-2 "
        >
          <Image
            src="/assets/pen.png"
            alt="logout"
            width={20}
            height={20}
            priority
          />
          <p className="flex flex-1 items-center justify-center text-center text-small-regular w-full">
            New Message
          </p>
        </Button>
      </div>

      <div className="flex w-full flex-1 flex-col gap-1 ">
        <p className="leftsidebar_section-text">Main Menu</p>

        {ContentSideBarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${
                isActive && "bg-light-2 items-center"
              } `}
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

        <div className="text-dark-3 text-base-regular  max-lg:hidden pt-2 pb-2">
          Add more Favorites
        </div>
      </div>
    </section>
  );
}

export default ContentSideBar;
