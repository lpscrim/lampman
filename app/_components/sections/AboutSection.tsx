import workshop from "../../../public/workshop2.jpg"
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="max-w-screen-lg relative rounded-md z-1 flex flex-col top-8 mx-auto w-4/5 bg-secondary opacity-90 justify-center items-center h-auto text-center">

    <div className="container mx-auto p-6 h-full">
      <h1 className="text-3xl font-bold leading-tight mt-4 mb-2">About</h1>
      <div className="flex flex-row">
        <p className="text-md font-bold leading-tight h-5/6 mt-2 mb-4 px-6 lg:text-base text-pretty">
          At [LAMPMAN], we&#39re passionate about breathing new life into the
          past.<br></br>Specializing in the restoration and refurbishment of
          antique lamps, we transform forgotten treasures into stunning,
          functional pieces for modern homes. <br></br>
          Beyond lighting, our collection boasts a fascinating array of oddities
          and curios—unique finds that spark curiosity and tell their own
          stories. <br></br>
          Whether you&#39re looking for a one-of-a-kind statement piece or a
          touch of vintage charm, we&#39re here to help you bring character and
          wonder into your space. <br></br>
        </p>
      </div>
      <div className="relative overflow-hidden h-96 bg-white border-slate-50">
        <Image 
          alt="workshop"
          fill
          className="object-cover"
          src={workshop}
        />
      </div>
    </div>
    </div>
  );
}
{
}
