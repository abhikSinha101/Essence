"use client";

import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Topbar() {
  const pathname = usePathname();
  const pathShowCase = pathname.replace("", "/Comments");

  return (
    <nav className="topbar">
      <p className="capitalize mt-3 text-dark-1 text-body-normal max-xs:hidden">
        {pathShowCase}
      </p>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4",
          },
        }}
      />
    </nav>
  );
}

export default Topbar;
