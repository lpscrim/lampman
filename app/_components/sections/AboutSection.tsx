import Image from "next/image";

export default function LampSection() {
  return (
    <div className="container mx-auto px-4 h-full">
      <h1 className="text-4xl font-bold mb-8 text-center text-text1">
        How we do all the stuff 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
      <div>
          <h2 className="text-2xl font-semibold mb-4">Why we do stuff</h2>
          <p className="list-disc pl-5 space-y-2">
            wowuefowuebf oweifnw wkemfiw owfow rogi wom  oa sd whrghwoei weifh dj doas dohasifhowe
            a fwoie sdifh ifeh we pa sfjd j pv weweiog rngru ho dfsd i vsidmaosfm woe fwenifisd
            a sdifj wefmsidm sidv sidvhahhaoeem fl
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            src="https://www.londonfine.co.uk/cdn/shop/products/18.7310-1_1024x1024.jpg?v=1614602289"
            alt="1950s vintage lamp"
            className="w-full h-96 object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
    
        </div>

       
      </div>


    </div>
  );
}
