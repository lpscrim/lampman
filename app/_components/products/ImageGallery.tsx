"use client";

import { useState } from "react";
import Link from "next/link";
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
  }


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
      
      <div className="xl:w-2/5 lg:w-2/5 w-80 md:block hidden">
        {product.images.length > 0 ? (

            <Image
              alt={`Product ${product.id}`}
              src={product.images[0]}
              className="rounded-md object-center"
              width={512}
              height={342}
              priority
              onClick={() => handleOnClicked(product.images[0] as string, 0)}
            />

        ) : null }
        {product.metadata.img1 ? (
            <Image
              alt={`Product ${product.metadata.img1}`}
              src={product.metadata.img1}
              className="rounded-md object-center "
              width={512}
              height={682.5}
              priority
              onClick={() => handleOnClicked(product.metadata.img1 as string, 1)}
            />
        ) : null}
      </div>
      <div className="md:hidden">
        {product.images.length > 0 ? (
            <Image
              alt={`Product ${product.id}`}
              src={product.images[0]}
              className="w-full h-auto object-cover rounded-md"
              width={800}
              height={800}
              onClick={() => handleOnClicked(product.images[0] as string, 0)}
            />
        ) : null}
        <div className="flex flex-row items-center justify-between mt-3 space-x-4 md:space-x-0 overflow-hidden ">
          {product.metadata.img1 ? (
      
              <Image
                alt={`Product ${product.id}`}
                src={product.metadata.img1}
                width={200}
                height={200}
                className="rounded-md"
                onClick={() => handleOnClicked(product.metadata.img1 as string, 1)}
              />
          ) : null}
          {product.metadata.img2 ? (
              <Image
                alt={`Product ${product.id}`}
                src={product.metadata.img2}
                className="rounded-md"
                width={200}
                height={200}
                onClick={() => handleOnClicked(product.metadata.img1 as string, 2)}
              />
          ) : null}
          {product.metadata.img3 ? (

              <Image
                alt={`Product ${product.id}`}
                src={product.metadata.img3}
                className="rounded-md"
                width={200}
                height={200}
                onClick={() => handleOnClicked(product.metadata.img1 as string, 3)}
              />
          ) : null}
        </div>
      </div>
    </>
  );
}
