"use client";
import { GenericHeroInterface } from "@/lib/genericHeroInterface";
import React from "react";
import Button from "../Button";
import Framer from "../Framer";
import { fadeInLetters, slideUp } from "@/lib/animation";
import { ArrowRight } from "lucide-react";

export default function GenericHero({
  title,
  text,
  subtitle,
  image,
  // buttonText,
  // buttonFn,
}: GenericHeroInterface) {
  return (
    <div className="mt-25 lg:mt-[120px]">
      <div
        className="main relative bg-center lg:max-h-[900px] lg:h-[700px] h-[70vh] !overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-black/90  bg-cover rounded-3xl p-4 lg:p-20"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="relative flex items-center z-10 h-full  lg:w-[60%]  2xl:w-[650px] ">
          <div className="flex flex-col gap-2 space-y-4">
            {subtitle && (
              <Framer animation={slideUp(0.5)}>
                <p className="text-lg !text-white">{subtitle}</p>{" "}
              </Framer>
            )}
            <div className="flex flex-wrap gap-x-3 w-full">
              {title?.split(" ").map((char: string, i: number) => (
                <div className=" " key={i}>
                  <Framer animation={fadeInLetters(i)}>
                    <h2 className="text-white font-bold">{char}</h2>
                  </Framer>
                </div>
              ))}
            </div>
            <Framer animation={slideUp(0.5)}>
              <p className=" lg:!text-2xl !text-gray-300">{text}</p>
            </Framer>
            {/* <Framer animation={slideUp(0.8)}>
              <Button
                type="primary"
                text={buttonText}
                buttonFn={buttonFn}
                custom={"h-[50px] px-10 hover:px-12"}
              >
                <ArrowRight size={20} />
              </Button>
            </Framer> */}
          </div>
        </div>
      </div>
    </div>
  );
}
