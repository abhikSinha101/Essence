"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  sidebarMediaLinks,
  sidebarDocLinks,
  ContentSideBarLinks,
} from "@/constants";

function ContentSideBarMenu() {
  const pathname = usePathname();
  return (
    <section>
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

      <div className="flex w-full flex-1 flex-col gap-1 mt-2">
        <p className="leftsidebar_section-text">Media</p>

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

        <p className="leftsidebar_section-text">Direct Messages</p>

        {/**Here we want to make direct message to the people with their userCard thing*/}
      </div>
    </section>
  );
}

export default ContentSideBarMenu;
