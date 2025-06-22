"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

export default function TradeAndWorking() {
  const heroData = {
    title: "Trade & Working Capital Financing",
    text: "Summit Bank’s trade finance solutions are designed to support global commerce while upholding ethical business practices and sustainable growth.",
    image: "/pages-hero/trade.png",
    subtitle: "Trade & Working Capital Financing",
    buttonText: "Get Started",
  };

  const getStarted = () => {
    console.log("Get Started");
  };

  const allSection = [
    {
      title: "Letter of Credit (Wakalah & Murabaha-Based)",
      text: "Facilitate international trade with peace of mind. Our Shariah-compliant LC services let you import or export goods under secure terms, with Summit Bank acting as an agent or purchaser on your behalf. No interest, just structured, ethical transactions.",
      image: "/pages-section/letter-of-credit.png",
      reverse: true,
    },
    {
      title: "Foreign Currency Transactions",
      text: "Our FX services enables seamless, interest-free and less speculative transactions that supports the business needs of our partners.",
      image: "/pages-section/islamic.png",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <GenericHero
          image={heroData.image}
          title={heroData?.title}
          text={heroData?.text}
          subtitle={heroData?.subtitle}
          // buttonText={heroData?.buttonText}
          // buttonFn={getStarted}
        />
        {allSection?.map((item, index) => (
          <GenericSection
            title={item?.title}
            text={item?.text}
            image={item?.image}
            reverse={item?.reverse}
            key={index}
          />
        ))}
           <Faq  amount={3}/>
       {/* <Testimonials/>*/}
      </DefaultLayout>
    </div>
  );
}
