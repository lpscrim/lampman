export default function LampSection () {
    return (
<div className="container mx-auto px-4 h-screen">
<h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
  The Significance of 1950s Vintage Lamps
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {/* Image container */}
  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src="/vintage-lamp.jpg" alt="1950s vintage lamp" className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-white opacity-90">
      <h2 className="text-xl font-semibold">Iconic Design</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>

  {/* Text content */}
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
  1950s vintage lamps continue to captivate interior designers and homeowners alike due to their unique blend of functionality, aesthetics, and historical significance. These lamps represent a pivotal moment in design history, bridging the gap between traditional craftsmanship and innovative materials.
</p>

<div className="flex flex-wrap justify-center gap-4">
  {[1, 2, 3, 4, 5].map((num) => (
    <div key={num} className="rounded-full bg-yellow-200 p-2 text-xs font-medium text-yellow-800">
      {num}
    </div>
  ))}
</div>
</div>

    ) 
}