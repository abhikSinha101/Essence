"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AlignJustify, X, Equal, Divide } from "lucide-react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

function HeroTopbar() {
  const [isOn, setIsOn] = useState(false);
  const controls = useAnimation();

  const toggleSwitch = () => {
    setIsOn(!isOn);
    controls.start(isOn ? "closed" : "open");
  };

  return (
    <nav
      className={`flex-col contrast-100  top-0 mt-4 z-20 flex h-16 w-[80%] items-center justify-between bg-nav backdrop-blur-lg ${
        isOn ? " rounded-t-lg" : "rounded-lg "
      }`}
    >
      <div className="flex w-full h-full items-center justify-between bg-transparent">
        <motion.div
          className="flex flex-row gap-2 items-center cursor-pointer w-12 h-12 place-content-center "
          onClick={toggleSwitch}
          animate={{ rotate: isOn ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 35 }}
        >
          {isOn ? <X /> : <AlignJustify />}
        </motion.div>

        <div className="flex items-center p-4 place-content-center  h-full">
          <Link href="/">
            <Image
              src="/assets/Essence.svg"
              alt="essencelogo"
              width={120}
              height={120}
              className="p-1"
              priority
            />
          </Link>
        </div>
      </div>

      {isOn && (
        <div className="flex w-full contrast-100 rounded-b-lg bg-nav backdrop-blur-lg">
          <div className="flex flex-row gap-4 w-full h-56 p-4 ">
            <div className="flex w-full">
              What ya waiting fro? Go use Essence
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default HeroTopbar;
