"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Framer from "./Framer";
import { slideUp, zoomFade, zoomFadeBlur } from "@/lib/animation";

export default function FinanceSection() {
  const handleApply = () => {
    console.log("applied");
  };
  return (
    <div className="w-full py-10">
      <div className="main p-5 lg:p-10 rounded-2xl bg-[var(--inert-color)] lg:max-h-[500px] h-full grid lg:grid-cols-2 items-center gap-10">
        <div className="md:h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden">
          <Framer animation={zoomFadeBlur}>
            <Image
              className=" h-full w-full object-top object-cover"
              src="/finance.png"
              height={300}
              width={300}
              alt="finance"
            />
          </Framer>
        </div>
        <div className=" space-y-6 lg:w-[500px] mx-auto">
          <Framer animation={slideUp(0.4)}>
            <h3>
              Apply for Summit Instant finance and Transform your Financial Life!
            </h3>
          </Framer>
          <Framer animation={slideUp(0.6)}>
            <p>
              Get Millions in business finance from Summit Bank at the
              best industry rate in business finance from Summit Bank at the
              best industry rate.
            </p>
          </Framer>
          {/* <Framer animation={slideUp(0.6)}>
            <Button text="" buttonFn={handleApply} type="primary">
              <ArrowRight size={20} />
            </Button>
          </Framer> */}
        </div>
      </div>
    </div>
  );
}
