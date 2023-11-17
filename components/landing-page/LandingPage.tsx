import Gradient from "./Gradient";
import Image from "next/image";
import Link from "next/link";
import HeroTopbar from "../shared/HeroTopbar";
import HeroContent from "../shared/HeroContent";

const LandingPage = () => {
  return (
    <Gradient>
      <section className="hero_page custom-scrollbar_lp">
        <section className="flex flex-col items-center gap-64 mt-8 pb-16">
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
                className="rounded-3xl py-2 px-3 justify-start bg-purple-1"
              >
                <p>Connect</p>
              </Link>
            </div>

            <div className="flex flex-col w-full h-full">
              ESSENCE BUILD TO CONNECT
            </div>
          </div>
        </section>
      </section>
    </Gradient>
  );
};

export default LandingPage;
