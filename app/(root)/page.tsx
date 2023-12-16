import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Gradient from "@/components/landing-page/Gradient";
import HeroTopbar from "@/components/shared/HeroTopbar";
import HeroContent from "@/components/shared/HeroContent";

const Home = () => {
  return (
    <Gradient>
      <section className="hero_page custom-scrollbar_lp items-center">
        <div className="max-w-6xl">
          <section className="flex flex-col items-center  mt-6">
            <HeroTopbar />
            <HeroContent />
          </section>

          <section className="flex flex-col items-center gap-12 mt-8 mb-16">
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
                ESSENCE BUILD TO CONNECT
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center gap-12 mt-8 mb-16">
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
                ESSENCE BUILD TO CONNECT
              </div>
            </div>
          </section>
        </div>
      </section>
    </Gradient>
  );
};

export default Home;
