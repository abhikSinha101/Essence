"use client";
import { inter } from "@/app/fonts/fonts";
import { sidebarMediaLinks, sidebarDocLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex items-center p-4 gap-24 max-lg:hidden">
        <Link href="/">
          <p className="text-heading3-bold text-dark-1 ">Essence</p>
        </Link>
        <Link href="/">
          <Image src="/assets/slide.png" alt="slide" width={24} height={24} />
        </Link>
      </div>

      <div className="flex w-full flex-1 flex-col gap-1 pl-4 pr-4">
        <p className="text-dark-3 text-subtle-medium max-lg:hidden pt-2 pb-2 ">
          Main Menu
        </p>

        {sidebarMediaLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

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

        <p className="text-dark-3 text-subtle-medium max-lg:hidden pt-6">
          Favorites
        </p>

        {/**Looping for links */}

        {sidebarDocLinks.map((link) => {
          return (
            <Link
              href={link.route}
              key={link.label}
              className="leftsidebar_link  hover:bg-light-2"
              id="sidebarlinks"
            >
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

        <div className="text-dark-3 text-base-regular  max-lg:hidden pt-2 pb-2">
          Add more Favorites
        </div>
      </div>
    </section>
  );
}

export default LeftSidebar;
