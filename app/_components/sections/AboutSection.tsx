import workshop from "../../../public/workshop2.jpg"
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="py-8 max-w-screen-lg relative rounded-md z-1 flex flex-col mx-auto w-4/5 bg-secondary opacity-90 justify-center items-center h-auto text-center">

    <div className="container mx-auto p-6 h-full">
      <h1 className="text-3xl font-bold leading-tight mb-2">About</h1>
      <div className="flex flex-row">
        <p className="text-md h-5/6 mt-2 mb-4 px-6 lg:text-base text-pretty">
          Specializing in the restoration and refurbishment of
          antique lamps and antiques, we transform forgotten classic items into stunning,
          functional pieces for modern homes.<br></br><br></br>
          Each item is refurbished with care, ensuring that the original functionality is 
          restored whilst the iconic look is tastefully preserved.<br></br><br></br>
          Whether you&#39;re looking for a one-of-a-kind statement piece or a
          touch of vintage charm, our selection of lamps and curios will bring 
          authentic character and style into your home. <br></br>
        </p>
      </div>
      <div className="mx-4 relative overflow-hidden h-96 rounded-sm">
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
