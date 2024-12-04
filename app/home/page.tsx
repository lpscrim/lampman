import Image from "next/image";
import Expandable from "../_components/animata/carousel/expandable";
import Link from "next/link";
import LampSection from "../_components/sections/LampSection";
import AboutSection from "../_components/sections/AboutSection";
import { Suspense } from "react";
import background from "../../public/workshop1.webp";
import hero1 from "../../public/heroD.webp";

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
            <Expandable className="w-full min-w-72" />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<p>Loading</p>}>
        <div className="relative pb-20 h-fit">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={background}
              alt="Background Image"
              className="object-cover object-center brightness-50 blur-sm scale-105 mt-6"
              quality={10}
              fill
            />
          </div>
          <div id="about">
            <div className="max-w-screen-lg relative rounded-md z-1 flex flex-col top-8 mx-auto w-4/5 bg-secondary opacity-85 justify-center items-center h-auto text-center">
              <h1 className="text-3xl font-bold leading-tight mt-4 mb-2">
                About
              </h1>
              <div className="flex flex-row">
                <p className="text-sm  font-bold leading-tight h-5/6 mt-2 mb-4 px-6 lg:text-base text-pretty">
                  At [LAMPMAN], we’re passionate about breathing new life into
                  the past.<br></br>Specializing in the restoration and
                  refurbishment of antique lamps, we transform forgotten
                  treasures into stunning, functional pieces for modern homes.{" "}
                  <br></br>
                  Beyond lighting, our collection boasts a fascinating array of
                  oddities and curios—unique finds that spark curiosity and tell
                  their own stories. <br></br>
                  Whether you’re looking for a one-of-a-kind statement piece or
                  a touch of vintage charm, we’re here to help you bring
                  character and wonder into your space. <br></br>
                </p>
              </div>
            </div>
            <Suspense fallback={<p>Loading</p>}>
              <AboutSection />
            </Suspense>
            <Suspense fallback={<p>Loading</p>}>
              <LampSection />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
