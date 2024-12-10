import Image from "next/image";
import lamp from "../../../public/blue2.5.jpg";

export default function LampSection() {
  return (
    <div className="mt-12 py-8 max-w-screen-xl   relative rounded-md z-1 flex flex-col mx-auto w-4/5 bg-secondary opacity-85 justify-center items-center h-auto text-center">
      <div className="container mx-auto px-4 h-full">
        <h1 className="text-4xl font-bold text-center">Mac Lamp</h1>
        <h2 className="text-2xl mt-2 mb-8">by Terence Conran</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
          <div className="mx-4 rounded-sm  max-w-lg relative overflow-hidden h-96">
            <Image
              src={lamp}
              alt="vintage lamp"
              className="object-cover"
              fill
            />
            
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Why They Matter</h2>
            <ul className="list-disc pl-4 md:pl-0 space-y-8">
              <li>
                The Mac Lamps represent a shift towards modernist ideals in
                post-war Britain, emphasizing practicality and aesthetic
                simplicity.
              </li>
              <li>
                With their innovative use of materials and adjustable forms,
                these lamps were a breakthrough in blending art with utility.
              </li>
              <li>
                Terence Conran&#39;s Mac Lamps remain collector&#39;s items,
                cherished for their historical value and timeless appeal in
                design.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xl mb-8 text-pretty">
          Terence Conran, a renowned British designer and entrepreneur, is
          celebrated for his contributions to modern design, particularly in
          furniture and lighting. His Mac Lamps are a quintessential example of
          mid-20th-century industrial design, blending functionality with sleek,
          minimalist aesthetics.
          <br /><br />
          Designed in the 1950s, these lamps showcase Conran&#39;s commitment to
          democratizing good design by making it both accessible and stylish.
          The Mac Lamps were inspired by Scandinavian design principles,
          featuring clean lines, practical adjustability, and efficient use of
          materials. <br /><br />
          Their understated elegance, combined with high functionality, made
          them iconic in contemporary interiors. They embodied Conran&#39;s
          philosophy that everyday objects should enhance life through
          thoughtful design.
        </p>
      </div>
    </div>
  );
}
