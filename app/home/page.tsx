import Image from "next/image";
import Expandable from "../_components/animata/carousel/expandable";
import Link from "next/link";
import LampSectionB from "../_components/sections/LampSectionB";
import LampSectionA from "../_components/sections/LampSectionA";
import AboutSection from "../_components/sections/AboutSection";
import { Suspense } from "react";
import background from "../../public/workshop1.jpg";
import hero1 from "../../public/heroD.jpg";

export default function Home() {
  return (
    <div className="text-text1">
      <div className="z-0 relative h-screen overflow-hidden">
        <div className="absolute inset-0 brightness-50 ">
          <Image
            src={hero1}
            alt="Background Image"
            className="object-center object-cover"
            fill
            quality={80}
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to LAMPMAN
          </h1>
          <p className="text-lg   mb-8">
            Discover amazing LAMP and LAMP that await you.
          </p>
          <Link
            href="/shop"
            className="bg-logo text-text2 hover:bg-primary py-2 px-6 rounded-full text-lg font-semibold transition duration-200 ease-in-out transform hover:scale-105"
          >
            Take me to the LAMPS
          </Link>
        </div>
      </div>

      <div className="inset-0 justify-center  py-20 h-3/5 px-8 bg-gradient-to-r from-primaryd to-primary">
        <div className=" max-w-screen-lg mx-auto ">
          <Suspense fallback={<p>Loading</p>}>
            <Expandable/>
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<p>Loading</p>}>
        <div className="relative pb-20 h-fit">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={background}
              alt="Background Image"
              className="object-cover object-center brightness-[0.3]"
              quality={40}
              fill
            />
          </div>
          <div className="py-20" id="about">
            <Suspense fallback={<p>Loading</p>}>
              <div className="py-12">
              <AboutSection />
              </div>
            </Suspense>
            <Suspense fallback={<p>Loading</p>}>
            <div className="py-12">
              <LampSectionA />
            </div>
            </Suspense>
            <Suspense fallback={<p>Loading</p>}>
            <div className="py-12">
              <LampSectionB />
            </div>
            </Suspense>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
