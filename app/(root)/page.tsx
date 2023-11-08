import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="head-text text-left">Essence Landing Page</h1>
      <Link href="/main">
        <Image
          src="./Essencelogo.svg"
          alt="essencelogo"
          width={112}
          height={112}
          className="p-1"
        />
      </Link>
    </>
  );
}
