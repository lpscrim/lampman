import Image from "next/image";
import hero1 from "../../local_images/hero1.jpg";
import workshop1 from "../../local_images/workshop1.jpg";
import Expandable from "../_components/animata/carousel/expandable";
import Link from "next/link";
import LampSection from "../_components/products/LampSection";

export default function Home() {
  return (
    <div className="">
      <div className="relative bg-gradient-to-r from-primary to-secondary h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero1}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
            width={1000}
            height={1000}
            priority={true}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to LAMPMAN
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing LAMP and LAMP that await you.
          </p>
          <Link
            href="/shop"
            className="bg-logo text-text2 hover:bg-primary py-2 px-6 rounded-full text-lg font-semibold transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Take me to the LAMPS
          </Link>
        </div>
      </div>

      <div className="inset-0 justify-center  py-20 h-3/5 px-8 bg-gradient-to-r from-primaryd to-primary">
        <div className=" max-w-screen-lg mx-auto ">
          <Expandable className="w-full min-w-72" />
        </div>
      </div>
      <div className="relative pb-20 h-fit">
        <div className="absolute inset-0">
          <Image
            src={workshop1}
            alt="Background Image"
            className="object-cover object-center w-full h-full blur-sm"
            width={8000}
            height={8000}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div id="about">
          <div className="max-w-screen-lg text-text1 relative rounded-md z-1 flex flex-col top-8 mx-auto w-4/5 bg-secondary opacity-90 justify-center items-center h-auto text-center">
            <h1 className="text-3xl font-bold leading-tight mt-4 mb-2">
              About
            </h1>
            <div className="flex flex-row">
              <p className="text-sm  font-bold leading-tight h-5/6 mt-2 mb-4 px-6 lg:text-base text-pretty">
                At [LAMPMAN], we’re passionate about breathing new life into the
                past.<br></br>Specializing in the restoration and refurbishment
                of antique lamps, we transform forgotten treasures into
                stunning, functional pieces for modern homes. <br></br>
                Beyond lighting, our collection boasts a fascinating array of
                oddities and curios—unique finds that spark curiosity and tell
                their own stories. <br></br>
                Whether you’re looking for a one-of-a-kind statement piece or a
                touch of vintage charm, we’re here to help you bring character
                and wonder into your space. <br></br>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 max-w-screen-lg text-text1 relative rounded-md z-1 flex flex-col top-8 mx-auto w-4/5 bg-secondary opacity-90 justify-center items-center h-auto text-center">
            <LampSection />
          </div>
        </div>
      </div>
    </div>
  );
}
