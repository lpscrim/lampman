"use client"
import { useRef, useState } from "react";
import { cn } from "../../../_lib/utils";

export default function SplitText({
  text = "ANIMATA",
}: {
  text: string;
}) {
  const [activeIndex, setIndex] = useState<number>();
  const timer = useRef<NodeJS.Timeout>();

  const letterClassName =
    "inline h-1/2 select-none overflow-y-hidden leading-none transition-all duration-300 ease-out whitespace-pre";

  return (
    <div
      className={cn(
        "relative mx-auto font-black uppercase text-logo  text-md sm:text-xl md:text-3xl lg:text-4xl",
      )}
    >
    <div className="invisible leading-none">{text}</div>
      <div className="absolute top-0 flex h-full">
        {text.split("").map((letter, index) => (
          <div
            onMouseEnter={() => {
              if (timer.current) {
                clearTimeout(timer.current);
              }
              setIndex(index);
            }}
            onMouseLeave={() => {
              timer.current = setTimeout(() => {
                setIndex(undefined);
              });
            }}
            key={index}
            className="relative inline-flex h-full flex-col leading-none"
          >
            {/** top half */}
            <span
              className={cn(letterClassName, {
                "-translate-y-5": index === activeIndex,
                "-translate-y-3":
                  activeIndex !== undefined &&
                  (index === activeIndex - 1 || index === activeIndex + 1),
                "-translate-y-1":
                  activeIndex !== undefined &&
                  (index === activeIndex - 2 || index === activeIndex + 2),
              })}
            >
              {letter}
            </span>

            {/** bottom half */}
            <span
              className={cn(letterClassName, {
                "translate-y-5": index === activeIndex,
                "translate-y-3":
                  activeIndex !== undefined &&
                  (index === activeIndex - 1 || index === activeIndex + 1),
                "translate-y-1":
                  activeIndex !== undefined &&
                  (index === activeIndex - 2 || index === activeIndex + 2),
              })}
            >
              <span className="absolute -translate-y-1/2 leading-none">
                {letter}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
