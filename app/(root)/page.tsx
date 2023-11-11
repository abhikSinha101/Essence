import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import LandingPage from "@/components/landing-page/LandingPage";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <LandingPage />
    </section>
  );
  //TODO figure something for gradient animation
};

export default Home;
