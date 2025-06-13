"use client";
import React from "react";
import Framer from "./Framer";
import { fadeIn } from "@/lib/animation";
import Button from "./Button";

export default function Discover() {
  const handleApply = () => {
    console.log("hello");
  };
  return (
    <div className="w-full py-10">
      <div
        className="main flex items-center justify-center flex-col  py-10 max-h-[800px] lg:h-[90vh] bg-cover  rounded-3xl"
        style={{
          backgroundImage: `url('/red-bg.png')`,
        }}
      >
        <div className="space-y-4 p-4 lg:p-10 lg:w-2/3 text-center text-white flex items-center justify-center flex-col">
          <Framer animation={fadeIn("down", 0.4)}>
            <h2>Banking Made Easy, Anytime, Anywhere</h2>
          </Framer>
          <Framer animation={fadeIn("up", 0.8)}>
            <p className="!text-white 2xl:w-[800px]">
              Discover the convenience of banking from the palm of your hand and
              experience banking on the go quickly and securely
            </p>
          </Framer>
          <div className="pt-4">
            {/* <Framer animation={fadeIn("up", 0.9)}> */}
              {/* <Button text="" buttonFn={handleApply} /> */}
            {/* </Framer> */}
          </div>
        </div>
      </div>
    </div>
  );
}
