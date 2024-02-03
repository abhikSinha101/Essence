"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Gradient from "@/components/landing-page/Gradient";
import HeroTopbar from "@/components/shared/HeroTopbar";
import { AppWindow } from "lucide-react";
import {
  additionalLinks,
  footer,
  footerLinks,
  socialMediaLinks,
} from "@/constants";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import EssenceCover from "@/components/cards/EssenceCover";
import localFont from "next/font/local";
import { MoveRight } from "lucide-react";

export const eubergine = localFont({
  src: "../fonts/eubergine/free/Eubergine-Font.ttf",
  display: "swap",
});

const Home = () => {
  const currentYear = new Date();
  const formattedYear = format(currentYear, "yyyy");

  return (
    <Gradient>
      <section className={` hero_page custom-scrollbar_lp items-center`}>
        <div className="container px-20">
          <div className="flex w-full items-center justify-center">
            <HeroTopbar />
          </div>

          <div className="flex flex-col items-center my-4 h-128 gap-20 justify-center">
            <div className="flex flex-col items-center  justify-center w-full">
              <Image
                src="./assets/Hero-SubText.svg"
                width={512}
                height={512}
                alt="subtext"
              />
              <Link
                href="/main"
                className="rounded-3xl py-2 px-3 justify-start bg-btn-color"
              >
                <p>Connect {"  -->"}</p>
              </Link>
            </div>

            <div className="flex flex-row gap-40 items-center w-full justify-center">
              <div className="flex flex-row w-60 items-center gap-1 bg-transparent justify-center">
                <div className="w-fit">
                  <p className="text-center text-small-regular">20+</p>
                </div>
                <div className="w-fit">
                  <p className="text-center text-small-regular">
                    Users per month
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-60 gap-1 bg-transparent justify-center">
                <div className="w-fit">
                  <p className="text-center text-small-regular">3.2K</p>
                </div>
                <div className="w-fit">
                  <p className="text-center text-small-regular">
                    Messages sent last month
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-60 gap-1 bg-transparent justify-center">
                <div className="w-fit">
                  <p className="text-center text-small-regular">20+</p>
                </div>
                <div className="w-fit">
                  <p className="text-center text-small-regular">
                    Users enjoying private networking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="flex flex-col items-center gap-12 my-12"></section>

          <div className="flex flex-col gap-2 items-center justify-center w-full h-144 my-4">
            Hi
            <div className="flex w-[80%] h-12 rounded-3xl bg-nav">FYQ</div>
          </div>

          <section className="flex flex-col items-center gap-12 my-20"></section>

          {/**TODO: fix this card */}
          <div className="rounded-lg flex flex-row p-8 w-full h-96 items-center gap-16 mb-8 justify-between backdrop-blur-sm bg-glassmorphism_display">
            <div className="flex h-full w-full flex-col justify-between items-center pb-4">
              <Image
                src="./assets/Hero-SubText.svg"
                width={256}
                height={256}
                alt="subtext"
                className="w-full h-56"
              />

              <Link
                href="/"
                className="rounded-3xl py-2 px-3 justify-start bg-btn-color"
              >
                <p>Connect</p>
              </Link>
            </div>
            <div className="flex h-full w-full flex-col justify-center items-center ">
              <div className="flex flex-col items-center justify-center w-full h-56 my-4">
                <EssenceCover />
              </div>
            </div>
          </div>
        </div>

        <section className="flex-row px-20 container mb-2 ">
          <div className="flex flex-col p-6 gap-2 w-full rounded-lg  bg-glassmorphism_display backdrop-blur-sm">
            <div className="flex flex-row px-10 justify-between w-full ">
              <div className="top-0 w-28 h-fit items-start">
                <Image
                  src="/assets/Essence.svg"
                  alt="essencelogo"
                  width={120}
                  height={120}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-row w-full py-6 gap-4 justify-between  max-md:flex-col">
              <div className="w-96 max-md:w-full mb-4 max-md:mb-0">
                <div className="w-full h-40 rounded-lg">
                  <Image
                    src="./assets/rock3.svg"
                    height={160}
                    width={160}
                    alt="rock"
                    className="w-full h-full  object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full py-6 gap-8 items-center max-md:place-content-end max-md:flex-col max-md:gap-1">
                <div className="flex flex-col gap-1 rounded-xl items-center w-full h-28 pt-2">
                  {footerLinks.map((links) => {
                    return (
                      <Link href="/" className=" text-small-regular">
                        {links.label}
                      </Link>
                    );
                  })}
                </div>

                <div className=" flex flex-col gap-1 rounded-xl items-center w-full h-28 pt-2">
                  {socialMediaLinks.map((links) => {
                    return (
                      <Link href="/" className=" text-small-regular">
                        {links.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-1 rounded-xl items-center w-full h-28 pt-2">
                  {additionalLinks.map((links) => {
                    return (
                      <Link href="/" className=" text-small-regular">
                        {links.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-1 rounded-xl items-center w-full h-28 pt-2">
                  {footer.map((links) => {
                    return (
                      <Link href="/" className="text-small-regular">
                        {links.link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full px-10 justify-between max-sm:hidden">
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
