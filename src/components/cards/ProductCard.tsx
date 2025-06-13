"use client";
import { ProductCardInterface } from "@/lib/ProductInterface";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { ArrowRight } from "lucide-react";
import Framer from "../Framer";
import { zoomFade, zoomFadeBlur } from "@/lib/animation";
import Link from "next/link";

export default function ProductCard({
  heading,
  text,
  image,
  type,
  index,
  link,
}: ProductCardInterface) {
  return (
    <div
      className={`lg:h-[400px] group w-full relative overflow-hidden bg-[var(--primary-color)] rounded-2xl lg:p-2 ${
        type == "large"
          ? "col-span-6 md:col-span-5 lg:col-span-6"
          : type == "medium"
          ? "col-span-6 md:col-span-5 lg:col-span-6"
          : type == "small"
          ? "col-span-6 md:col-span-5 lg:col-span-4"
          : ""
      }`}
    >
      <div
        className={`grid lg:grid-cols-[7fr_5fr]  overflow-hidden h-full  justify-between ${
          type == "small" && "lg:!grid-cols-1"
        }
       
        `}
      >
        <div
          className={`p-4 py-8 relative z-10 h-full flex flex-col  gap-3 ${
            index !== 2 && ""
          } `}
        >
          <Framer animation={zoomFadeBlur}>
            <h4 className=" lg:w-[300px]">{heading}</h4>
          </Framer>
          <div className="space-y-3 ">
            <Framer animation={zoomFadeBlur}>
              <p className=" ">{text}</p>
            </Framer>
            <Framer animation={zoomFadeBlur}>
              <Link
                href={link}
                className="h-[45px] cursor-pointer hover:shadow-xl flex items-center gap-2 w-fit px-6 transition-all duration-300 hover:px-8 py-2 border rounded-lg group-hover:!shadow-lg group-hover:border-2 group-hover:!gap-3 bg-[var(--primary-color)] !text-[var(--secondary-color)] border-white "
              >
                Learn More
                <ArrowRight size={20} />
              </Link>
          
            </Framer>
          </div>
        </div>
        {image && (
          <div
            className={`overflow-hidden rounded-2xl`}
          >
            <Image
              src={image}
              height={400}
              width={400}
              className={`w-full  transition-all duration-500   h-full object-top object-cover
                 ${index == 0 && " group-hover:scale-125 "}
                 ${
                   index == 1 &&
                   " w-full lg:!w-[300px] object-cover rounded-xl  mt-4  "
                 }
                ${
                  index == 2 &&
                  " lg:absolute -bottom-2 right-0 !h-[200px] group-hover:scale-125 !w-[200px] !object-contain z-10"
                }
                  ${index == 3 && "w-full rounded-xl lg:!w-[300px] object-cover   mt-4 "}
              ${
                index == 4 &&
                "  right-8 rounded-t-10  !h-[250px] bottom-0 lg:!h-full w-full z-10 object-top !object-contain lg:!object-cover"
              }
            
              `}
              alt={heading}
            />
            {/* <Image
              className={` transition-all duration-500 hidden opacity-0 group-hover:opacity-100 lg:absolute lg:block top-[50%] group-hover:top-8 z-0 w-[220px] right-6 object-cover ${
                index !== 4 && "!hidden"
              }`}
              src="/salary.png"
              height={200}
              width={200}
              alt="salary"
            /> */}
          </div>
        )}
      </div>
    </div>
  );
}
