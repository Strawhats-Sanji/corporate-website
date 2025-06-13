import Image from "next/image";
import React from "react";
import Framer from "../Framer";
import { fadeIn, slideUp } from "@/lib/animation";

export default function SectionHero({
  title,
  text,
  image,
  subtitle,
  customClass,
  textClass,
  imageClass,
  mainClass,
}: {
  title?: string;
  text?: string;
  image?: any;
  customClass?: any;
  textClass?: any;
  imageClass?: any;
  mainClass?: any;
  subtitle?: string;
}) {
  return (
    <div
      className={`w-full mt-[240px] main flex flex-col justify-center items-center text-center   ${mainClass}`}
    >
      <div className="lg:w-[800px] mx-auto space-y-6">
        {subtitle && (
          <Framer animation={slideUp(0.6)}>
            <h5 className={`text-center font-bold ${customClass}`}>
              {subtitle}
            </h5>
          </Framer>
        )}
        {title && (
          <Framer animation={slideUp(0.6)}>
            <h2>{title}</h2>
          </Framer>
        )}
        <Framer animation={slideUp(0.8)}>
          <p className={textClass}>{text}</p>
        </Framer>
      </div>
      {image && (
        <div className="w-full">
          <Framer animation={fadeIn("up", 0.9)}>
            <Image
              src={image}
              alt={image}
              width={900}
              height={900}
              className={`w-full h-[400px] lg:h-[500px] object-cover object-center mt-10 rounded-2xl ${imageClass}`}
            />
          </Framer>
        </div>
      )}
    </div>
  );
}
