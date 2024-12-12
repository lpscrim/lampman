import React from "react";
import Image from "next/image";

interface ImageViewerProps {
  selectedImage: string;
  onNext: () => void;
  onPrev: () => void;
  offClick: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  selectedImage,
  onNext,
  onPrev,
  offClick,
}) => {
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center justify-center z-100 py-10 h-full">
        <div id="image-container" className="relative w-10/12 max-w-[600px] h-full p-4">
          <Image
            src={selectedImage}
            alt={selectedImage}
            fill
            className="rounded-md object-cover overflow-hidden"
          />

          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-0 text-secondary py-14 px-4 md:py-28 md:px-5 text-3xl font-extrabold md:text-5xl hover:text-secondaryh"
            onClick={onPrev}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-0 text-secondary py-14 px-4 md:py-28 md:px-5 text-3xl font-extrabold md:text-5xl hover:text-secondaryh"
            onClick={onNext}
          >
            &gt;
          </button>
        </div>
        <button onClick={offClick} className="mt-8 bg-secondary rounded-md p-4 text-lg font-semibold text-primary shadow-md hover:bg-secondaryh transition-colors duration-300">CLOSE</button>

      </div>
    </div>
  );
};

export default ImageViewer;
