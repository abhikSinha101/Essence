"use client";
import Gradient from "./Gradient";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <Gradient>
      <section className="absolute w-full flex flex-col gap-20 z-30 max-h-full overflow-y-auto custom-scrollbar_lp">
        <div className="topbar">
          <div className="flex items-center p-2 gap-24 max-lg:hidden place-content-center">
            <Link href="/main">
              <Image
                src="./Essencelogo.svg"
                alt="essencelogo"
                width={112}
                height={112}
                className="p-1"
                priority
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center p-2 gap-24  place-content-center">
          <Link href="/main">
            <Image
              src="./Essencelogo.svg"
              alt="essencelogo"
              width={112}
              height={112}
              className="p-1"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center p-2 gap-24  place-content-center">
          <Link href="/main">
            <Image
              src="./Essencelogo.svg"
              alt="essencelogo"
              width={112}
              height={112}
              className="p-1"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center p-2 gap-24  place-content-center">
          <Link href="/main">
            <Image
              src="./Essencelogo.svg"
              alt="essencelogo"
              width={112}
              height={112}
              className="p-1"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center p-2 gap-24  place-content-center">
          <Link href="/main">
            <Image
              src="./Essencelogo.svg"
              alt="essencelogo"
              width={112}
              height={112}
              className="p-1"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center p-2 gap-24  place-content-center">
          <Link href="/main">
            <Image
              src="./Essencelogo.svg"
              alt="essencelogo"
              width={112}
              height={112}
              className="p-1"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center p-2 gap-24  place-content-center">
          <Link href="/main">
            <Image
              src="./Essencelogo.svg"
              alt="essencelogo"
              width={112}
              height={112}
              className="p-1"
              priority
            />
          </Link>
        </div>
      </section>
    </Gradient>
  );
};

export default LandingPage;
