"use client"; 
import Image from "next/image";
import React from "react";
import Framer from "./Framer";
import { fadeInLetters } from "@/lib/animation";

export default function Partners() {
  const partners = [
    "/partners/piggyvest.png",
    "/partners/bamboohr.png",
    "/partners/opay.png",
    "/partners/paystack.png",
    "/partners/kuda.png",
  ];

  return (
    <div className="py-10 lg:max-h-[350px] flex items-center justify-center flex-col h-full lg:h-[400px]">
      <h3 className="py-10">Our Trusted Partners</h3>
      <div className="main flex items-center justify-center gap-6">
        {partners?.map((res, index) => (
          <Framer animation={fadeInLetters(index)} key={index}>
            <Image
              className="h-[30px] lg:h-[50px] object-contain w-full"
              key={index}
              src={res}
              alt=""
              width={400}
              height={400}
            />
          </Framer>
        ))}
      </div>
    </div>
  );
}
