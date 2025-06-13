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
    text: "Summit Bank’s Shariah-compliant trade finance supports global markets, interest-free, keeping your business ethical and thriving.",
    image: "/pages-hero/trade-bg.png",
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
      title: "Islamic Foreign Exchange (Bai al-Sarf )",
      text: "Exchange currencies the halal way. Our Islamic FX service enables seamless, interest-free currency transactions for your business. Completely free of speculation or uncertainty.",
      image: "/pages-section/islamic-exchange.png",
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
