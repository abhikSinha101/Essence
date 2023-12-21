import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Gradient from "@/components/landing-page/Gradient";
import HeroTopbar from "@/components/shared/HeroTopbar";
import { AppWindow } from "lucide-react";
import { additionalLinks, footerLinks, socialMediaLinks } from "@/constants";
import { format } from "date-fns";

const Home = () => {
  const currentYear = new Date();
  const formattedYear = format(currentYear, "yyyy");

  return (
    <Gradient>
      <section className={` hero_page custom-scrollbar_lp items-center`}>
        <div className="container px-20">
          <HeroTopbar />

          <div className="flex flex-col items-center my-4 h-112 justify-center">
            <Image
              src="./assets/Hero-SubText.svg"
              width={512}
              height={512}
              alt="subtext"
            />
          </div>

          <section className="flex flex-col items-center gap-12 my-8"></section>

          <div className="flex flex-col items-center justify-center w-full h-96 my-4">
            <AppWindow />
            <p className="text-center">
              Image of essence which can be moveable with pointer
            </p>
          </div>

          <section className="flex flex-col items-center gap-12 my-8"></section>

          <div className="hero_card">
            <div className="flex flex-col items-center w-full justify-between">
              <Image
                src="./assets/Hero-SubText.svg"
                width={256}
                height={256}
                alt="subtext"
                className="w-full"
              />
              <Link
                href="/"
                className="rounded-3xl py-2 px-3 justify-start bg-btn-color"
              >
                <p>Connect</p>
              </Link>
            </div>

            <div className="flex flex-col w-full h-full">3 pics of essence</div>
          </div>
          <div className="hero_card">
            <div className="flex flex-col items-center w-full justify-between">
              <Image
                src="./assets/Hero-SubText.svg"
                width={256}
                height={256}
                alt="subtext"
                className="w-full"
              />
              <Link
                href="/"
                className="rounded-3xl py-2 px-3 justify-start bg-btn-color"
              >
                <p>Connect</p>
              </Link>
            </div>

            <div className="flex flex-col w-full h-full">
              Details about this website and my contact
            </div>
          </div>
        </div>

        <section className="flex-row px-20 container mb-2">
          <div className="flex flex-col p-6 gap-2 w-full rounded-lg  bg-glassmorphism_display backdrop-blur-sm">
            <div className="flex flex-row justify-between w-full ">
              <div className="top-0 w-28 h-fit items-start">
                <Image
                  src="/assets/Essence.svg"
                  alt="essencelogo"
                  width={120}
                  height={120}
                  priority
                />
              </div>

              <div>Icons</div>
            </div>

            <div className="flex flex-row w-full py-6 gap-4 justify-between">
              <div className="flex w-full p-2">
                We rock at this business, Signature
              </div>
              <div className="flex flex-row w-full py-6 gap-8 place-content-end">
                <div className="flex flex-col gap-1 rounded-xl items-center w-full h-28 ">
                  {footerLinks.map((links) => {
                    return (
                      <Link href="/" className=" text-small-regular">
                        {links.label}
                      </Link>
                    );
                  })}
                </div>

                <div className=" flex flex-col gap-1 rounded-xl items-center w-full h-28 ">
                  {socialMediaLinks.map((links) => {
                    return (
                      <Link href="/" className=" text-small-regular">
                        {links.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-1 rounded-xl items-center w-full h-28">
                  {additionalLinks.map((links) => {
                    return (
                      <Link href="/" className=" text-small-regular">
                        {links.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p className=" text-small-medium">
                ©{formattedYear} Vivid, All rights reserved.
              </p>
              <Link href="/" className="text-small-medium">
                Vivid M.
              </Link>
            </div>
          </div>
        </section>
      </section>
    </Gradient>
  );
};

export default Home;
