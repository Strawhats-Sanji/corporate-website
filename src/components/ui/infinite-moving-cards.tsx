
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    image?: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    let duration = "40s";
    if (speed === "fast") duration = "20s";
    else if (speed === "slow") duration = "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 px-8 py-6 md:w-[450px] lg:w-[600px]"
          >
            <div>
              <p className="relative z-20 leading-[1.6] !text-neutral-900 lg:h-[200px] 3xl:h-[250px] ">
                {item.quote}
              </p>
              <div className="relative z-20 mt-6 flex flex-col">
                <img
                  src={item.image || "/placeholder.jpg"}
                  width={500}
                  height={500}
                  className="h-[40px] w-[40px] object-cover rounded-full"
                  alt={item.name}
                />
                <span className="flex flex-col gap-1">
                  <span className="leading-[1.6] font-semibold">{item.name}</span>
                  <span className="leading-[1.6]">{item.title}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

