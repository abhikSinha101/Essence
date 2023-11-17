import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroTopbar() {
  return (
    <nav className="topbar">
      <div className="flex items-center p-4 max-lg:hidden place-content-center h-full">
        <Link href="/main">
          <Image
            src="./assets/menu.svg"
            alt="essencelogo"
            width={36}
            height={36}
            className="p-1"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center p-4 max-lg:hidden place-content-center  h-full">
        <Link href="/main">
          <Image
            src="./Essencelogo.svg"
            alt="essencelogo"
            width={120}
            height={120}
            className="p-1"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

export default HeroTopbar;
