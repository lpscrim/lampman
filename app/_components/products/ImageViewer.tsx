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
        <div
          id="image-container"
          className="relative w-10/12 max-w-[600px] h-full p-4"
        >
          <Image
            src={selectedImage}
            alt={selectedImage}
            fill
            className="rounded-md object-cover overflow-hidden"
          />

          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-0 text-secondary py-14 px-4 md:py-28 md:px-5 text-3xl font-extrabold md:text-5xl hover:text-primary"
            onClick={onPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
            >
              <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-0 text-secondary py-14 px-4 md:py-28 md:px-5 text-3xl font-extrabold md:text-5xl hover:text-primary"
            onClick={onNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
            >
              <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
            </svg>
          </button>
        </div>
        <button
          onClick={offClick}
          className="mt-8 bg-primary rounded-md p-4 text-lg font-semibold text-secondary shadow-md hover:bg-primaryh transition-colors duration-300"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
