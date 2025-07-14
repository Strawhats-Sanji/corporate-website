"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

export default function page() {
  const heroData = {
    title: "Grow Your Wealth Ethically. With Confidence and Clarity",
    text: "Summit Bank’s Treasury & Investment Products offer growth through ethical assets and financial instruments.",
    image: "/pages-hero/treasure.png",
    subtitle: "Treasury & Investment Products",
    buttonText: "Get Started",
  };

  const getStarted = () => {
    console.log("Get Started");
  };

  const allSection = [
    {
      title: "Asset-Backed Bonds (Sukuk)",
      text: "Participate in the profits of real and tangible assets. Our Sukuk offerings provide a stable alternative to conventional bonds, giving you consistent returns without interest-based risk.",
      image: "/pages-section/sukuk-bg.png",
      reverse: true,
    },
    {
      title: "Ethical Mutual Funds",
      text: "Diversify your portfolio while investing in ethically structured financial instruments. Our mutual funds are screened, ensuring your earnings are rooted in ethical practices.",
      image: "/pages-section/islamic-mutual-funds.png",
    },
    {
        title: "Ethical Money Market Investments (Commodity Murabaha)",
        text: "Manage your short-term liquidity in an ethical way. With Commodity Murabaha, you can access stable returns through real commodity trades, ideal for businesses and individuals seeking risk-averse options.",
        image: "/pages-section/money-market.png",
        reverse: true,
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
