"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Framer from "./Framer";
import { fadeIn, fadeInLetters, slideUp, zoomIn } from "@/lib/animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroData: Record<string, any>[] = [
    {
      id: 1,
      title: "Partnership",
      text: "Partnership is at our core. We do not serve customers, We stand with people. Supporting their goals every step of the way.",
      image: "/carousel/partnership.jpg",
    },
    {
      id: 2,
      title: "Success",
      text: "We succeed when our partners do. Their growth is how we measure ours.",
      image: "/carousel/success.jpg",
    },
    {
      id: 3,
      title: "Reinvention",
      text: "Grounded in partnership, driven by reinvention. We innovate to elevate our partners and lead the industry forward.",
      image: "/carousel/innovation.jpg",
    },
    {
      id: 4,
      title: "Beyond Numbers",
      text: "Beyond numbers... We build smarter tools, deeper trust, and real impact.",
      image: "/carousel/beyond.jpg",
    },
  ];

  const openAccount = () => {
    console.log("account opening");
  };

  const minutes = 5 * 3600;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, minutes); // 2 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className=" lg:max-h-[900px] lg:h-screen !overflow-hidden w-screen  relative "
    >
      <CarouselContent className="h-[800px]">
        {heroData.map((data: any, i: number) => (
          <CarouselItem
            key={i}
            className="bg-cover relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#1b1302]/80  before:z-0  bg-top"
            style={{
              backgroundImage: `url(${data?.image})`,
            }}
          >
            <div className="main relative z-20 pt-[280px]">
              <div className="xl:w-[55%] 3xl:w-[45%]    space-y-6">
                <Framer animation={slideUp(0.5)}>
                  <h1 className=" text-white">{data?.title}</h1>
                </Framer>
                <Framer>
                  <p className="lg:!text-2xl !text-gray-300">
                    {data?.text}
                  </p>
                </Framer>
                {/* <Framer animation={slideUp(1.2)}>
                  <Button
                    text="Open Account"
                    type="primary"
                    buttonFn={openAccount}
                  >
                    <ArrowRight size={20} color="white" />
                  </Button>
                </Framer> */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
