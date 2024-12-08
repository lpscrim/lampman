import Image from "next/image";
import lamp from "../../../public/angle2.5.jpg";

export default function LampSection() {
  return (
    <div className="mt-12 pt-6 max-w-screen-xl   relative rounded-md z-1 flex flex-col top-8 mx-auto w-4/5 bg-secondary opacity-85 justify-center items-center h-auto text-center">
      <div className="container mx-auto px-4 h-full">
        <h1 className="text-4xl font-bold text-center">Anglepoise Lamp</h1>
        <h2 className="text-2xl mt-2 mb-8">by George Carwardine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
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
          <div className="relative overflow-hidden h-96 max-w-lg">
            <Image
              src={lamp}
              alt="1950s vintage lamp"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
