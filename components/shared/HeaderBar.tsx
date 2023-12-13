"use client";

import { ListFilter, X } from "lucide-react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const delayedToggleMenu = () => {
    setTimeout(() => {
      toggleMenu();
    }, 250);
  };

  return (
    <AnimatePresence mode="wait">
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

        {isMenuOpen && (
          <motion.div className="hidden z-20 max-md:bg-glassmorphism backdrop-blur-lg fixed top-0 left-0 h-full w-full justify-center max-md:flex">
            <div className="flex flex-col gap-4 items-center my-32">
              <Image
                src="/assets/Essence.svg"
                alt="essencelogo"
                width={112}
                height={112}
                className="p-1 mb-2"
                priority
              />

              <Link
                href="/main"
                className="flex w-full p-2"
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
                href="/main"
                className="flex w-full p-2"
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Profile</p>
              </Link>
              <Link
                href="/main/archive"
                className="flex w-full p-2"
                onClick={delayedToggleMenu}
              >
                <p className="w-full text-center  text-black">Archive</p>
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
        <div className="hidden max-md:flex flex-row items-center">
          <Button
            className="bg-transparent hover:bg-transparent"
            onClick={toggleMenu}
          >
            <Menu color="#000000" />
          </Button>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default HeaderBar;
