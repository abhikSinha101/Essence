"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current && typeof window !== "undefined") {
      // Access window object only on the client side
      const canvas = canvasRef.current;

      // Your canvas-related code here

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Rest of your canvas-related code
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-light-2">
      <div className="text-center text-black items-center min-h-screen">
        <div className="flex w-full place-content-center p-4">
          <Link href="/main">
            <Image
              src="/Essencelogo.svg"
              alt="Essence Logo"
              width={120}
              height={120}
              className="p-2"
              priority
            />
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Essence</h1>
        <p className="text-lg">
          Unlock the power of 3D experiences with Essence.
        </p>
        <Link href="/main">
          <div className="bg-black text-light-1 px-6 py-3 rounded-full mt-8 inline-block">
            Get Started
          </div>
        </Link>
      </div>

      <Box />
      <Canvas ref={canvasRef} id="canv" className="canvas-container">
        <ambientLight intensity={2} />
      </Canvas>
    </div>
  );
}

export default LandingPage;
