"use client";

import { useState } from "react";
import Image from "next/image";
import Stripe from "stripe";
import ImageViewer from "@/app/_components/products/ImageViewer";

type Product = Stripe.Product;

export default function ImageGallery({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = [
    { src: product.images[0], alt: "Image 1" },
    { src: product.metadata?.img1, alt: "Image 2" },
    { src: product.metadata?.img2, alt: "Image 3" },
    { src: product.metadata?.img3, alt: "Image 4" },
    { src: product.metadata?.img4, alt: "Image 5" },
  ];

  const handleOnClicked = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setCurrentImageIndex(prevIndex);
  };

  const handleOffClicked = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
          offClick={handleOffClicked}
        />
      )}

      <div className="lg:w-2/5 w-80 md:block hidden">
        <div className="group w-full max-w-[600px] h-[600px] relative overflow-hidden cursor-pointer rounded-md mb-8">
          {product.images.length > 0 ? (
            <>
            <Image
              alt={`Product ${product.id}`}
              src={product.images[0]}
              fill
              className="cursor-pointer object-cover"
              priority
              onClick={() => handleOnClicked(product.images[0] as string, 0)}
            />
             <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-1000 ease-in-out text-2xl text-logo relative flex justify-center">
              Click for full gallery
            </span>
            </>
          ) : null}
        </div>

        {product.metadata.img1 && product.metadata.img2 &&(
          <div className="flex flex-row">
          <div className="group w-full xl:max-w-[290px] max-w-[600px] h-[290px] relative overflow-hidden cursor-pointer rounded-md">
            <Image
              alt={`Product ${product.metadata.img1}`}
              src={product.metadata.img1}
              fill
              className="cursor-pointer object-cover"
              priority
              onClick={() =>
                handleOnClicked(product.metadata.img1 as string, 1)
              }
            />
            <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-1000 ease-in-out text-xl text-logo relative flex top-10 justify-center">
              Click for full gallery
            </span>
          </div>
          <div className="hidden xl:block group w-full ml-5 max-w-[290px] h-[290px] relative overflow-hidden cursor-pointer rounded-md">
            <Image
              alt={`Product ${product.metadata.img2}`}
              src={product.metadata.img2}
              fill
              className="cursor-pointer object-cover"
              priority
              onClick={() =>
                handleOnClicked(product.metadata.img1 as string, 1)
              }
            />
            <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-1000 ease-in-out text-xl text-logo relative flex top-10 justify-center">
              Click for full gallery
            </span>
          </div>
          </div>
          
          
        )}
      </div>
      <div className="md:hidden group">
        {product.images.length > 0 ? (
          <div className="w-full h-[450px] relative overflow-hidden cursor-pointer rounded-md mb-4">
            <Image
              alt={`Product ${product.id}`}
              src={product.images[0]}
              fill
              className="object-cover"
              onClick={() => handleOnClicked(product.images[0] as string, 0)}
            />
            <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-1000 ease-in-out text-xl text-primary relative flex top-96 justify-center font-bold">
              Click for full gallery
            </span>
          </div>
          
        ) : null}
        {product.metadata.img1 && ( 
        <div className="flex flex-row items-center justify-around mt-3 space-x-4 md:space-x-0 overflow-hidden">
          <div className="w-full max-w-[200px] h-[200px] relative overflow-hidden cursor-pointer rounded-md">
            {product.metadata.img1 && (
              <Image
                alt={`Product ${product.id}`}
                src={product.metadata.img1}
                fill
                className="object-cover"
                onClick={() => handleOnClicked(product.metadata.img1, 1)}
              />
            )}
          </div>

          <div className="w-full max-w-[200px] h-[200px] relative overflow-hidden cursor-pointer rounded-md">
            {product.metadata.img2 && (
              <Image
                alt={`Product ${product.id}`}
                src={product.metadata.img2}
                fill
                className="object-cover"
                onClick={() => handleOnClicked(product.metadata.img2, 2)}
              />
            )}
          </div>

          <div className="w-full max-w-[200px] h-[200px] relative overflow-hidden cursor-pointer rounded-md">
            {product.metadata.img3 && (
              <Image
                alt={`Product ${product.id}`}
                src={product.metadata.img3}
                fill
                className="object-cover"
                onClick={() => handleOnClicked(product.metadata.img3, 3)}
              />
            )}
          </div>
        </div>
        )}
      </div>
    </>
  );
}
