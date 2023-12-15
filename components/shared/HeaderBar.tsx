"use client";

import { ListFilter, X } from "lucide-react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@clerk/nextjs";

const HeaderBar = () => {
  const { userId } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const delayedToggleMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
    }, 250);
  };

  const navAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 2 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
  };

  return (
    <div className="flex justify-between w-full h-10 mt-4 rounded-md px-2 items-center">
      <div className="flex items-center max-md:hidden">
        <p>welcome to essence.</p>
      </div>
      <div className="items-center hidden max-md:flex">
        <Image
          src="/assets/Essence.svg"
          alt="essencelogo"
          width={112}
          height={112}
          className="p-1"
          priority
        />
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border border-light-3 max-md:hidden">
        <ListFilter className="h-8 w-8 mx-2 " />
        <p className="flex w-full h-full text-base-medium">Filters</p>
      </div>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            {...navAnimation}
            className="hidden z-20 max-md:bg-glassmorphism backdrop-blur-lg fixed top-0 left-0 h-full w-full justify-center max-md:flex"
          >
            <div className="flex flex-col gap-4 items-center my-32">
              <Image
                src="/assets/Essence.svg"
                alt="essencelogo"
                width={128}
                height={128}
                className="p-1 mb-2"
                priority
              />

              <Link
                href="/main"
                className="flex w-full p-2 "
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Dashboard</p>
              </Link>
              <Link
                href="/main/search"
                className="flex w-full p-2"
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Search</p>
              </Link>
              <Link
                href="/main/create-campaign"
                className="flex w-full p-2"
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Campaigns</p>
              </Link>
              <Link
                href="/main/message"
                className="flex w-full p-2"
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Messages</p>
              </Link>
              <Link
                href="/main/archive"
                className="flex w-full p-2"
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Archive</p>
              </Link>
              <Link
                href={`/profile/${userId}`}
                className="flex w-full p-2"
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Profile</p>
              </Link>
            </div>

            <Button
              className="absolute top-4 right-4 bg-transparent text-white hover:bg-transparent"
              onClick={delayedToggleMenu}
            >
              <X color="#000000" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden max-md:flex flex-row items-center">
        <Button
          className="bg-transparent hover:bg-transparent"
          onClick={delayedToggleMenu}
        >
          <Menu color="#000000" />
        </Button>
      </div>
    </div>
  );
};

export default HeaderBar;
