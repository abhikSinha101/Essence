import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import ThreeScene from "./ThreeScene";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <ThreeScene />
      {/* Other elements */}
    </main>
  );
};

export default Home;
