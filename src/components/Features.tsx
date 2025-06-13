"use client";
import Image from "next/image";
import React from "react";
import Framer from "./Framer";
import { fadeIn, fadeInLetters } from "@/lib/animation";

export default function Features() {
  const features = [
    {
      title: "Instant Transaction",
      text: "Make money transfers immediately without complications or delays.",
      image: "/speed.svg",
    },
    {
      title: "Guaranteed Security",
      text: "Protect your financial information with our digitally advanced security.",
      image: "/secure.svg",
    },
    {
      title: "Extensive Global Coverage",
      text: "Access our global network that covers more than 169 countries for your international transactions.",
      image: "/world.svg",
    },
  ];
  return (
    <div
      className=" bg-cover bg-left relative max-h-[1100px] lg:h-[90vh] h-full w-full flex items-center justify-center py-10 overflow-hidden"
      style={{
        backgroundImage: `url('/orange-bg.png')`,
      }}
    >
      <div className="main grid lg:grid-cols-2  h-full">
        <div className="h-full flex flex-col lg:gap-6 justify-center text-white ">
          {features?.map((item, index) => (
            <div
              className="flex not-last:border-b py-6 items-center gap-5"
              key={index}
            >
              <Image
                className="h-[50px] w-[50px] object-cover"
                src={item.image}
                height={80}
                width={80}
                alt={item.title}
              />
              <div className="">
                <Framer animation={fadeInLetters(index)}>
                  <h4 className=" py-4">{item.title}</h4>
                </Framer>
                <Framer animation={fadeInLetters(index)}>
                  <p className="!text-white">{item.text}</p>
                </Framer>
              </div>
            </div>
          ))}
        </div>
        <Framer animation={fadeIn('up', 0.5)}>
          <Image
            className="relative lg:absolute -bottom-10 lg:bottom-0 w-fit object-contain h-full -right-10 md:-right-[25%] lg:right-0 z-0"
            src="/feature.png"
            alt="banner"
            height={500}
            width={500}
          />
        </Framer>
      </div>
    </div>
  );
}
