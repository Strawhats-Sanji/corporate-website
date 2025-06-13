"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Framer from "./Framer";
import { fadeIn, fadeInLetters, slideUp, zoomIn } from "@/lib/animation";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroData: Record<string, any>[] = [
    {
      id: 1,
      title: "Redefining Banking for Everyday People",
      text: "Empowering your financial journey with simple, accessible, and innovative banking solutions designed for everyday life.",
      image: "/hero-1.png",
    },
    // {
    //   id: 2,
    //   title: "Redefining Banking for Everyday People",
    //   text: "Empowering your financial journey with simple, accessible, and innovative banking solutions designed for everyday life.",
    //   image: "/hero-2.png",
    // },
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
    <div
      className="pt-40 lg:pt-[200px] lg:max-h-[900px] lg:h-screen !overflow-hidden w-screen bg-cover  relative bg-[var(--primary-color)]"
      style={{
        backgroundImage: `url('/main-hero-bg.png')`,
      }}
    >
      <div className="main  flex items-center  h-full">
        <div className="h-full ">
          <div className=" space-y-7">
            <div className="flex flex-wrap gap-x-3 xl:w-[55%] 2xl:w-[45%]">
              {heroData[currentIndex].title
                ?.split(" ")
                .map((char: string, i: number) => (
                  <div className=" " key={i}>
                    <Framer
                      animation={fadeInLetters(i)}
                    >
                      <h1>{char}</h1>
                    </Framer>
                  </div>
                ))}
            </div>
            <Framer
              animation={fadeIn("up", 0.3)}
            >
              <p className="xl:w-[55%] 3xl:w-[45%]  lg:!text-2xl">{heroData[currentIndex].text}</p>
            </Framer>
            <div className="pt-4">
              {/* <Framer
                animation={slideUp(1.2)}
              >
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

          <Image
            src={heroData[currentIndex].image}
            alt={heroData[currentIndex].text}
            height={500}
            width={500}
            
            className={` relative lg:absolute bottom-0 -right-[2%] lg:h-[650px] lg:w-[650px] xl:h-[600px] xl:w-[600px] 3xl:h-[800px] 3xl:w-[800px] object-contain ${
              heroData[currentIndex].id == 2 && " -right-[6%]"
            }`}
          />
          <Image
            src={require("../../public/Medication.svg")}
            alt={heroData[currentIndex].text}
            height={300}
            width={300}
            
            className={` animate-float hidden lg:block absolute bottom-[200px] right-[300px] transition-all duration-800   3xl:right-[450px]  lg:w-[250px]  object-cover ${
              heroData[currentIndex].id == 2 && " 3xl:bottom-[350px] bottom-[270px]"
            }`}
          />
          <Image
            src={require("../../public/transaction.svg")}
            alt={heroData[currentIndex].text}
            height={300}
            width={300}
            className={` hidden lg:block absolute -bottom-[30px] transition-all duration-800 right-[2%]  lg:w-[250px] object-cover animate-[float_3s_infinite] ${
              heroData[currentIndex].id == 2 && " -bottom-[70px] right-[2%]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
