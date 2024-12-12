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
        {product.images.length > 0 ? (
          <Image
            alt={`Product ${product.id}`}
            src={product.images[0]}
            className="cursor-pointer rounded-md object-center "
            width={512}
            height={342}
            priority
            onClick={() => handleOnClicked(product.images[0] as string, 0)}
          />
        ) : null}
        {product.metadata.img1 ? (
          <Image
            alt={`Product ${product.metadata.img1}`}
            src={product.metadata.img1}
            className=" mt-6 cursor-pointer rounded-md object-center"
            width={512}
            height={682.5}
            priority
            onClick={() => handleOnClicked(product.metadata.img1 as string, 1)}
          />
        ) : null}
      </div>
      <div className="md:hidden">
        {product.images.length > 0 ? (
          <div className="w-full h-[450px] relative overflow-hidden cursor-pointer rounded-md mb-4">
            <Image
              alt={`Product ${product.id}`}
              src={product.images[0]}
              fill
              className="object-cover"
              onClick={() => handleOnClicked(product.images[0] as string, 0)}
            />
          </div>
        ) : null}
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
      </div>
    </>
  );
}
