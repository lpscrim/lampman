import Image from "next/image";

export default function LampSection() {
  return (
    <div className="container mx-auto px-4 h-full">
      <h1 className="text-4xl font-bold mb-8 text-center text-text1">
        The Significance of 1950s Vintage Lamps
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            src="https://www.londonfine.co.uk/cdn/shop/products/18.7310-1_1024x1024.jpg?v=1614602289"
            alt="1950s vintage lamp"
            className="w-full h-64 object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="text-logo absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-text3 opacity-90">
            <h2 className="text-xl font-semibold">Iconic Design</h2>
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondaryh">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why They Matter</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Represent mid-century modern aesthetic</li>
            <li>Symbolize nostalgia and retro appeal</li>
            <li>Influence contemporary lighting design</li>
            <li>Appreciated for their craftsmanship and durability</li>
          </ul>
        </div>
      </div>

      <p className="text-xl mb-8">
        1950s vintage lamps continue to captivate interior designers and
        homeowners alike due to their unique blend of functionality, aesthetics,
        and historical significance. These lamps represent a pivotal moment in
        design history, bridging the gap between traditional craftsmanship and
        innovative materials.
      </p>
    </div>
  );
}
