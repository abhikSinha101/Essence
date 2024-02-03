"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const EssenceCover = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["-15.5deg", "15.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["15.5deg", "-15.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement; // Cast e.target to HTMLButtonElement

    const rect = target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    y.set(0);
    x.set(0);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="w-full h-full rounded-xl items-center"
    >
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image
          src="/covers/main.png"
          fill
          objectPosition="center center"
          className="rounded-xl object-contain place-content-center"
          alt="Cover Image"
        />
      </div>
    </motion.button>
  );
};

export default EssenceCover;
