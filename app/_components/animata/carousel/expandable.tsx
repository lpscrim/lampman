"use client"

import { HTMLAttributes, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/app/_lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-1/6 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <Image
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
        width={800}
        height={800}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          {item.title}
        </div>
      )}
    </div>
  );
};

const items = [
  {
    image:
      "https://www.collagerie.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0567%2F2960%2F0181%2Ffiles%2FPaleFire_8_185_390b0a4d-5356-4230-8f9f-eee4501ec1d1.jpg%3Fv%3D1683812134&w=1024&q=75",
    title: "Browse All",
  },
  {
    image:
      "https://www.collagerie.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0567%2F2960%2F0181%2Ffiles%2FPaleFire_3_161_07cc5197-4135-4a7b-8430-eb925bd7c60c.jpg%3Fv%3D1683812134&w=640&q=75",
    title: "Browse Lamp",
  },
  {
    image:
      "https://www.collagerie.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0567%2F2960%2F0181%2Ffiles%2FPalefire_Pavillion_Brick_016_49471ad0-9229-4cfe-9515-287c88c1a4c8.jpg%3Fv%3D1683812123&w=640&q=75",
    title: "Browse Curios",
  },
  {
    image:
      "https://www.collagerie.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0567%2F2960%2F0181%2Ffiles%2FPaleFire_8_185_390b0a4d-5356-4230-8f9f-eee4501ec1d1.jpg%3Fv%3D1683812134&w=1024&q=75",
    title: "Browse Other",
  },
  
];

export default function Expandable({ list = items, autoPlay = true, className }: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
