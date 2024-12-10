"use client"

import { HTMLAttributes, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/app/_lib/utils";
import Link from "next/link";
import allImage from "../../../../public/angle4.jpg"
import lampImage from "../../../../public/industrial3.jpg"
import curioImage from "../../../../public/pom.jpg"

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string| StaticImageData; title: string; link: { pathname: string, query: { type: string }} };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string | StaticImageData; title: string; link: {pathname: string, query: { type: string }}}[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        " relative flex h-full w-1/6 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className,
      )}
      {...props}
    >
    <Link href={item.link}>
      <Image
        src={item.image}
        alt="carousel link"
        className={cn("h-full w-auto object-cover", {
          "blur-[2px]  ": index !== activeItem,
        })}
        fill
        quality={60}
      />
    
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          {item.title}
        </div>
      )}
      </Link>
    </div>
  );
};

const items = [
  {
    image:
      allImage,
    title: "Browse All",
    link: {
      pathname: "/shop",
      query: { type: "all" },
    },
  },
  {
    image:
      lampImage,
    title: "Browse Lamps",
    link:{
      pathname: "/shop",
      query: { type: "lamps" },
    },
  },
  {
    image:
      curioImage,
    title: "Browse Curios",
    link:{
      pathname: "/shop",
      query: { type: "curios" },
    },
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
    }, 2000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div style={{ WebkitTouchCallout: 'none' }} className={cn(" flex h-96 w-full gap-1", className)} >
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
          onTouchStart={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onTouchEnd={() => {
            setIsHovering(false);
          }
          }
        />
      ))}
    </div>
  );
}
