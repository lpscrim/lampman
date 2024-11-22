import Image from "next/image";
import hero1 from "../../local_images/hero1.jpg"
import Expandable from "../_components/animata/carousel/expandable";
import Link from "next/link";

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
      <div className="inset-0 justify-center py-20 px-8 bg-gradient-to-r from-primaryd to-primary">
        <div className=" max-w-screen-lg mx-auto ">
          <Expandable />
        </div>
      </div>
    </div>
  );
}