import Image from "next/image";
import lamp from "../../../public/angle2.5.jpg";
import Link from "next/link";

export default function LampSection() {
  return (
    <div className="mt-12 py-8 max-w-screen-xl relative rounded-md z-1 flex flex-col mx-auto w-4/5 bg-secondary opacity-85 justify-center items-center h-auto text-center">
      <div className="container mx-auto px-4 h-full">
        <h1 className="text-4xl font-bold text-center">Anglepoise Lamp</h1>
        <h2 className="text-2xl mt-2 mb-8">by George Carwardine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
          <div>
            <h1 className="text-2xl font-semibold mb-6">
              Iconic British Design
            </h1>
            <p className="list-disc pl-5 space-y-2">
              Herbert Terry Anglepoise Lamps are iconic examples of British
              industrial design, first introduced in 1934.
              <br />
              <br />
              Designed by George Carwardine, a car designer working for Herbert
              Terry &amp; Sons, the lamps are renowned for their innovative
              spring-balanced mechanism, which allows precise and effortless
              positioning. <br />
              <br />
              The Anglepoise lamps became a symbol of functional modernist
              design, blending utility with elegance.
            </p>
          </div>
          <div className="mx-4 relative rounded-sm overflow-hidden h-96 max-w-lg">
            <Image
              src={lamp}
              alt="1950s vintage lamp"
              className="object-cover"
              fill
            />
            <div className="text-primary absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-text3 opacity-90">
              <Link target="_target" href="https://www.houseandgarden.co.uk/article/anglepoise-lamp" className="bg-primary text-secondary font-semibold px-4 py-2 rounded hover:bg-primaryh">
                About Anglepoise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
