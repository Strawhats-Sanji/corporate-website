"use client";

import { GenericInterface } from "@/lib/genericInterface";
import React from "react";
import Button from "../Button";
import Framer from "../Framer";
import { fadeIn, slideUp } from "@/lib/animation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function GenericSection({
  image,
  title,
  text,
  reverse,
  customClass,
  button,
  buttonFn,
  buttonText,
  children,
}: GenericInterface) {
  const path = usePathname();
  const data = path.split("-")?.[0];

  const handleClick = () => {
    const lowerData = data.toLowerCase();
    let link = "";

    if (lowerData.includes("personal")) {
      link =
        "https://www.figma.com/proto/gEvjfJoSDIHwufznlxjrJJ/Individual-Account-Opening-Form--Update-?node-id=424-47&p=f&t=TVva5r6A8IpnITMV-1&scaling=contain&content-scaling=fixed&page-id=0%3A1";
    } else if (lowerData.includes("corporate") || lowerData.includes("business")) {
      link =
        "https://www.figma.com/proto/gEvjfJoSDIHwufznlxjrJJ/Individual-Account-Opening-Form--Update-?node-id=61-56&p=f&t=2XHn86DY3hY7sqHv-1&scaling=min-zoom&content-scaling=fixed&page-id=57%3A307&starting-point-node-id=61%3A56";
    }

    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="main pt-20 py-10">
      <div
        className={`w-full grid lg:grid-cols-2 gap-10  items-center justify-between ${customClass}`}
      >
        <div
          className={`flex flex-col gap-2  space-y-6 lg:w-[500px] ${
            reverse ? " order-2 ml-auto" : "order-1 mr-auto"
          }`}
        >
          <Framer animation={slideUp(0.5)}>
            <h3 className="font-bold">{title}</h3>
          </Framer>
          <Framer animation={slideUp(0.7)}>
            <p className="">{text}</p>
          </Framer>
          {children && <Framer animation={slideUp(0.4)}>{children}</Framer>}
          {/* {button && (
            <Framer animation={slideUp(0.8)}>
              <Button text={buttonText} type="primary" buttonFn={handleClick}>
                <ArrowRight size={20} />
              </Button>
            </Framer>
          )} */}
        </div>
       {image && <div className={`${reverse ? " lg:order-1" : "lg:order-2"}`}>
          <Framer animation={fadeIn("bottom", 0.5)}>
            <Image
              src={image}
              alt={title}
              width={800}
              height={800}
              className={`w-full h-[450px] rounded-xl object-cover 
        `}
            />
          </Framer>
        </div>}
      </div>
    </div>
  );
}
