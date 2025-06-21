"use client";
import React from "react";
import Framer from "../Framer";
import { fadeIn, fadeInLetters, slideUp } from "@/lib/animation";
import Button from "../Button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import ProductsSection from "@/components/section/ProductsSection";

interface HeroInterface {
  title: string;
  text: string;
  boxOne:string;
  boxTwo:string;
  boxThree:string;
}
export default function AccountHero({ title, text, boxOne, boxTwo, boxThree }: HeroInterface) {
  const path = usePathname();
  const data = path.split("-")?.[0];

  const allFeatures = [
    {
      title: "Current Account (Qard)",
      text: "Enjoy unrestricted banking with full control, ethical standards, and seamless access to your funds anytime, anywhere.",
      link: "https://yourdomain.com/current-account"
    },
    {
      title: "Savings Account (Qard)",
      text: "Save with confidence through a secure, future-focused savings account designed to grow with your goals.",
      link: "https://yourdomain.com/savings-account"
    },
    {
      title: "Savings Account (Mudarabah)",
      text: "Earn potential returns while maintaining access to your funds. A flexible account designed for responsible growth.",
      link: "https://yourdomain.com/investment-savings-account"
    },
  ];

  const openAccount = () => {
    const lowerData = data.toLowerCase();
    let link = "";

    if (lowerData.includes("individual")) {
      link =
        "https://www.figma.com/proto/gEvjfJoSDIHwufznlxjrJJ/Individual-Account-Opening-Form--Update-?node-id=424-47&p=f&t=TVva5r6A8IpnITMV-1&scaling=contain&content-scaling=fixed&page-id=0%3A1";
    } else if (lowerData.includes("business")) {
      link =
        "https://www.figma.com/proto/gEvjfJoSDIHwufznlxjrJJ/Individual-Account-Opening-Form--Update-?node-id=130-555&p=f&t=2XHn86DY3hY7sqHv-1&scaling=min-zoom&content-scaling=fixed&page-id=57%3A307&starting-point-node-id=61%3A56";
    }

    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className=" h-[800px] pt-20 py-10 max-h-[900px] lg:h-screen overflow-hidden w-screen bg-cover  relative bg-[var(--primary-color)]"
      style={{
        backgroundImage: `url('/main-hero-bg.png')`,
      }}
    >
      <div className="main pt-10 text-center flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex items-center flex-col lg:w-[600px] mx-auto justify-center space-y-7">
            {/* <div className="flex flex-wrap justify-center gap-x-3">

              <ProductsSection features={allFeatures} />

              {title?.split(" ").map((char: string, i: number) => (
                <div className=" " key={i}>
                  <Framer animation={fadeInLetters(i)}>
                    <h1>{char}</h1>
                  </Framer>
                </div>
              ))}
            </div> */}
            <div className="flex flex-wrap justify-center gap-x-3">

              <ProductsSection features={allFeatures} />

            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
