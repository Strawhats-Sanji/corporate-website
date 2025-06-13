"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Framer from "./Framer";
import { slideUp } from "@/lib/animation";

export default function Banner() {
  const handleApply = () => {
    console.log("applied");
  };
  return (
    <div className="relative  max-h-[800px] lg:h-[150vh] h-screen w-full bg-gradient-to-b from-[#574419] to-[#956E26] flex flex-col items-center gap-4 p-10">
      <Framer animation={slideUp(0.4)}>
        <h2 className="text-white text-center md:w-[60%] pt-10 z-10 mx-auto">
          Wherever You Go, We have Got You Covered
        </h2>
      </Framer>
      {/* <Framer animation={slideUp(0.6)}>
        <Button
          text=""
          buttonFn={handleApply}
          custom={" !bg-white mt-5  relative z-10"}
        />
      </Framer> */}
      <Image
        className=" absolute bottom-0 object-cover md:object-contain w-full h-full left-0 z-0"
        src="/card-bg.png"
        alt="banner"
        height={1500}
        width={1500}
      />
      <Image
        className=" absolute bottom-0 object-contain w-full h-full left-0 z-0"
        src="/bg-summit.png"
        alt="banner"
        height={500}
        width={500}
      />
    </div>
  );
}
