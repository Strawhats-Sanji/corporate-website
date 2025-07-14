"use client";
import { IslamicFinanceCardInterface } from "@/lib/IslamicFinanceInterface";
import Image from "next/image";
import React from "react";
import Framer from "../Framer";
import { slideUp } from "@/lib/animation";

export default function IslamicFinanceCard({
  image,
  title,
  text,
}: IslamicFinanceCardInterface) {
  return (
    <div className=" p-5 lg:p-10 bg-white w-full rounded-xl min-h-[270px]">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <Image
          src={image}
          alt={title}
          height={60}
          width={60}
          
        />
        <Framer animation={slideUp(0.5)}>
          <h5 className="">{title}</h5>
        </Framer>
        <Framer animation={slideUp(0.6)}>
          <p className="">{text}</p>
        </Framer>
      </div>
    </div>
  );
}
