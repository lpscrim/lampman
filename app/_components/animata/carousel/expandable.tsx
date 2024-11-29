"use client"

import { HTMLAttributes, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/app/_lib/utils";
import Link from "next/link";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string; link: { pathname: string, query: { type: string }} };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string; link: {pathname: string, query: { type: string }}}[];
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
    <Link href={item.link}>
      <Image
        src={item.image}
        alt="carousel link"
        className={cn("h-full w-full object-cover", {
          "blur-[2px] ": index !== activeItem,
        })}
        width={1000}
        height={1000}
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
      "https://www.marthastewart.com/thmb/C8wLJr7Xpi7QjL92Nmo04sAOTS4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bedroom-interior-in-the-night-957373992-190a491be1d24bd5aabef89b0dcfd578.jpg",
    title: "Browse All",
    link: {
      pathname: "/shop",
      query: { type: "all" },
    },
  },
  {
    image:
"https://www.marthastewart.com/thmb/jXxUi2eaqcNbSTuxv2nHkT94bR4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kitchen-lamp-green-lamp-neutral-kitchen-max-pooky-0323-bd9919a357ca44f58aa1a2609c913b51-bc7662f1c92b4f0ca722ce3aad2074bc.jpeg",
    title: "Browse Lamp",
    link:{
      pathname: "/shop",
      query: { type: "lamps" },
    },
  },
  {
    image:
"https://www.marthastewart.com/thmb/E1P_I5m1ZcOyFzsL5s1F90LMnc4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TripleHeartDesign_creditMadisonStoa_-09bf3d7361e34730bd7de6f9b4d466ec-ac20d6cbd1f34c0f9df4ffb377525a2a.jpeg",    title: "Browse Curios",
    link:{
      pathname: "/shop",
      query: { type: "curios" },
    },
  },
  {
    image:
"https://www.marthastewart.com/thmb/hqz_fU0ooK-gnFbMh-_CJjcP-f0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sculpture-lamp-office-0721-2000-0a5161d2b80a4a3888d3041c6b6cc1d9.jpg",    title: "Browse Other",
    link:{
      pathname: "/shop",
      query: { type: "all" },
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
